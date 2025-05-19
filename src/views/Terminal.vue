<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center">
				Terminal
			</h1>
		</SectionHero>
		<WrapperPage class="flex-col">

			<div class="flex-col max-w-md place-self-center mt-8 mb-24 w-full flex md:max-w-4xl">
				<h1 class="px-4 mb-2 mt-6 font-medium text-3xl w-full">
					Execute scripts on leader node
				</h1>
				<h1 class="px-4 mb-4 mt-2 font-medium text-xl w-full">
					Leader node address: {{ address }}
				</h1>
				<div class="mt-6 relative mb-16 flex-col md:flex-row flex w-full">
					<textarea
						ref="output"
						readonly=""
						v-model="output"
						class="justify-start flex-col-reverse flex overflow-auto h-64 w-full p-4 rounded bg-slate-50"
						style="font-family:monospace"
					/>
					<div class="-mb-6 bg-slate-100 -bottom-5 absolute h-0.5 left-2 right-2">
					</div>
				</div><input
					v-model="command"
					@keypress.enter="submit()"
					class="p-4 my-4 bg-slate-50 rounded"
				/><button
					class="p-4 rounded bg-slate-200"
					@click="submit()"
				>
					Go
				</button><button
					class="p-4 rounded bg-slate-200 my-4"
					@click="autoscroll = !autoscroll"
				>
					Autoscroll {{ autoscroll ? 'on' :'off' }}
				</button>
			</div>
		</WrapperPage>
	</TemplateDefault>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateDefault from '@/components/TemplateDefault.vue';
	import SectionHero from '@/components/SectionHero.vue';
	export default {
		components: {
			WrapperPage,
			TemplateDefault,
			SectionHero
		},
		inject: ['io'],
		props: ['renderer'],
		data: () => ({
			command: '',
			address: '',
			output: '',
			autoscroll: true,
			listener: null
		}),
		async created() {
			try {
				await this.inspectLeader();
			} catch (e) {}
			console.log('Listening to terminal events');
			this.listener = line => {
				if (!this.$refs?.output) {
					this.io.service('terminal').off('output', this.listener);
				} else {
					this.output += `${line}\n`;
					if (this.autoscroll) {
						setTimeout(() => {
							this.$refs.output.scrollTop = this.$refs.output.scrollHeight;
						}, 10)
					}
				}
			}
			this.io.service('terminal').on('output', this.listener);
		},
		beforeUnmount() {
			console.log('Unmount terminal')
			this.io.service('terminal').off('output', this.listener);
		},
		methods: {
			async inspectLeader() {
				const state = await this.io.service('state')
					.get();
				if (state.leaderIP) {
					this.address = state.leaderIP;
				} else {
					const leaders = await this.io.service('docker_nodes')
						.find({
							query: {
								leader: true
							}
						});
					const leader = leaders?.data?.[0];
					if (leader) {
						this.address = leader.address;
					}
				}
			},
			async submit() {
				try {
					const result = await this.io.service('exec')
						.patch({
							command: this.command
						});
					console.log('result', result);
					this.command = '';
				} catch (e) {
					alert(e.message);
				}
			}
		}
	};

</script>
<style scoped></style>