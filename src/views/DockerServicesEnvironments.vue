<template>
	<TemplateSidemenu
		title="Applications"
		:renderer="renderer"
	>
		<div class="flex h-full flex-col md:flex-row">
			<div class="flex-col flex w-full md:w-1/2 flex-shrink-0">
				<h2 class="font-light text-lg p-4 max-w-full">
					App Environments
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
						{{items?.skip + 1}} - {{items?.skip + items?.data?.length}} of {{items?.total}}
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
						class="rounded hover:bg-slate-200 font-extralight mb-1 text-left w-full bg-slate-50 py-1 px-2"
					>
						<b>{{ item.key }}:</b> {{ item.value }}
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
						{{items?.skip + 1}} - {{items?.skip + items?.data?.length}} of {{items?.total}}
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
		props: ['renderer'],
		data: () => ({
			service: 'docker_services_environments',
			items: null,
			current: null,
			search: ''
		}),
		async created() {
			await this.getItems();
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
						const searchFields = ['id', 'key', 'value', 'docker_service_id', 'created_at', 'updated_at'];
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