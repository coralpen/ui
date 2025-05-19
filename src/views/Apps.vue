<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center">
				Apps
			</h1>
		</SectionHero>
		<WrapperPage class="flex-col">

			<div class="flex-col max-w-md place-self-center mt-8 mb-24 w-full flex md:max-w-4xl">
				<h1 class="px-4 mb-2 mt-6 font-medium text-3xl w-full">
					Docker Apps
				</h1>
				<h1 class="px-4 mb-4 mt-2 font-medium text-xl w-full">
					Leader node address: {{ address }}
				</h1>
				<div class="mt-6 relative mb-16 flex-col md:flex-row flex w-full px-4">
					<div class="grid-cols-2 md:grid-cols-3 gap-11 grid w-full">
						<div
							v-for="item in items"
							class="p-4 bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
							@click="$router.push('/apps/' + item.id)"
						>
							<h2 class="text-slate-100">
								{{ item.id }}
							</h2>
						</div>
					</div>
					<div class="-mb-8 bg-slate-100 -bottom-5 absolute h-0.5 left-4 right-4">
					</div>
				</div>
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
			address: '',
			items: [],
			service: 'apps'
		}),
		async created() {
			try {
				await this.inspectLeader();
				await this.getItems();
			} catch (e) {}
		},
		methods: {
			async getItems() {
				console.log('fetching apps')
				try {
					this.items = await this.io.service(this.service)
						.find();
					console.log('apps', this.items)
				} catch(e) {
					console.log('apps error', e)
				}
			},
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
			}
		}
	};

</script>
<style scoped></style>