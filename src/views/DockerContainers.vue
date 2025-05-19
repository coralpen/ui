<template>
	<TemplateSidemenu title="Applications">
		<div class="flex h-full flex-col md:flex-row">
			<div class="flex-col flex w-full md:w-1/2 flex-shrink-0">
				<h2 class="font-light text-lg p-4 max-w-full">
					Containers
				</h2>
				<div class="flex px-4">

					<input
						v-model="search"
						placeholder="Search"
						@keypress.enter="getItems"
						class="rounded-l bg-slate-50 grow p-2"
					/><button
						@click="getItems"
						class="hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"
					>
						Search
					</button>
				</div>
				<div class="px-4 pt-4 md:hidden flex">
					<button
						class="p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100"
						:disabled="!items?.skip"
						@click="previous()"
					>
						Previous
					</button>
					<div class="text-sm justify-items-center content-center text-center grow">
						{{items?.skip}} - {{items?.skip + items?.data?.length}} of {{items?.total}}
					</div><button
						class="p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100"
						:disabled="!items || (items?.skip + items?.data?.length) >= items?.total"
						@click="next()"
					>
						Next
					</button>
				</div>
				<div class="px-4 pt-4 grow">
					<button
						v-for="item in items?.data"
						@click="current = item"
						class="overflow-hidden rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"
					>
						{{ item.name }}
					</button>
				</div>
				<div class="p-4 hidden md:flex">
					<button
						class="p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100"
						:disabled="!items?.skip"
						@click="previous()"
					>
						Previous
					</button>
					<div class="text-sm justify-items-center content-center text-center grow">
						{{items?.skip}} - {{items?.skip + items?.data?.length}} of {{items?.total}}
					</div><button
						class="p-1.5 w-20 hover:bg-slate-200 font-extralight rounded bg-slate-100"
						:disabled="!items || (items?.skip + items?.data?.length) >= items?.total"
						@click="next()"
					>
						Next
					</button>
				</div>
			</div>
			<div class="grow p-4 overflow-auto">
				<h2 v-if="current">
					Selected {{current.docker_container_id}}
				</h2>
				<h2
					v-if="!current"
					class="overflow-hidden"
				>
					Select Container
				</h2> <button
					@click="connect()"
					class="mb-1 w-full hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"
				>
					Connect
				</button><textarea
					ref="output"
					readonly=""
					v-model="output"
					class="justify-start flex-col-reverse flex overflow-auto h-64 w-full p-4 rounded bg-slate-50"
					style="font-family:monospace"
				/> <input
					@keypress.enter="send()"
					v-model="command"
					placeholder="cmd"
					class="w-full p-2"
				/> <button
					@click="send()"
					class="w-full hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"
				>
					Send
				</button> <button
					class="mt-1 w-full hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"
					@click="autoscroll = !autoscroll"
				>
					Autoscroll {{ autoscroll ? 'on' :'off' }}
				</button>
				<h2 class="font-light text-lg max-w-full">
					Details & Actions
				</h2>
				<pre>
				{{current}}
				</pre>
			</div>
		</div>
	</TemplateSidemenu>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateSidemenu from '@/components/TemplateSidemenu.vue';
	export default {
		components: {
			WrapperPage,
			TemplateSidemenu
		},
		inject: ['menus', 'io'],
		props: ['identifier'],
		data: () => ({
			service: 'docker_containers',
			items: null,
			current: null,
			search: '',
			command: '',
			output: '',
			autoscroll: true,
			listener: null
		}),
		async created() {
			if (this.identifier) {
				this.search = this.identifier;
			}
			await this.getItems();
		},
		async beforeUnmount() {
			if (this.listener) {
				console.log('Killing container terminal session');
				this.io.service('containers')
					.off('output', this.listener);
			}
		},
		methods: {
			async getItems() {
				try {
					const query = {};
					if (this.items) {
						query.$limit = this.items.limit;
						query.$skip = this.items.skip;
					}
					if (this.search) {
						query.$or = [];
						const searchFields = ['id', 'name', 'command', 'state', 'status', 'created', 'docker_service_name', 'docker_task_name', 'docker_service_id', 'docker_task_id', 'docker_image_name', 'docker_image_id', 'docker_node_id', 'docker_container_id', 'created_at', 'updated_at'];
						for (const searchField of searchFields) {
							const obj = {};
							obj[searchField] = {
								$like: `%${this.search}%`
							};
							query.$or.push(obj);
						}
					}
					this.items = await this.io.service(this.service)
						.find({
							query
						});
				} catch (e) {
					this.items = null;
					console.error(e);
				}
			},
			async connect() {
				if (!this.current) {
					alert('Select container before connect');
					return;
				}
				if (this.listener) {
					console.log('Killing previous terminal session');
					this.io.service('containers')
						.off('output', this.listener);
				}
				console.log('Generating new terminal session');
				this.listener = line => {
					if (!this.$refs?.output) {
						console.log('Killing previous terminal session');
						this.io.service('containers')
							.off('output', this.listener);
					} else {
						this.output += `${line.data}\n`;
						if (this.autoscroll) {
							this.$refs.output.scrollTop = this.$refs.output.scrollHeight;
						}
					}
				};
				console.log('Start listener');
				this.io.service('containers')
					.on('output', this.listener);
				console.log('Que terminal session');
				await this.io.service('containers')
					.get(this.current.docker_container_id);
			},
			async send() {
				if (!this.current) return console.log('current not set', this.current);
				if (!this.command) return console.log('command not set', this.command);
				try {
					await this.io.service('containers')
						.patch(this.current.docker_container_id, {
							command: this.command
						});
					this.command = '';
				} catch (e) {
					console.log('error', e.message);
				}
			},
			next() {
				if (!this.items) return;
				this.items.skip += this.items.limit;
				this.getItems();
			},
			previous() {
				if (!this.items) return;
				this.items.skip -= this.items.limit;
				this.getItems();
			}
		}
	};

</script>
<style scoped></style>