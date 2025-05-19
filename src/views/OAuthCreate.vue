<template>
	<TemplateHero title="OAuth2 Settings">
		<WrapperPage class="p-6">
			<div class="relative overflow-auto w-full">
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">

					<h2 class="my-4">
						General settings
					</h2><input
						placeholder="Client ID"
						class="px-4 py-2"
					/><input
						placeholder="Client Secret"
						class="ml-4 px-4 py-2"
					/><input
						placeholder="Scopes"
						class="ml-4 px-4 py-2"
					/>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<h2 class="my-4">
						Select which provider, then try to automate most possible
					</h2>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<h2 class="my-4">
						Select provider
					</h2>
					<button
						class="rounded p-2 bg-slate-200"
						@click="getItems"
					>
						Google
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="getItems"
					>
						Github
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="getItems"
					>
						Facebook
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="getItems"
					>
						iCloud
					</button>
				</div> <button
					class="rounded p-2 bg-slate-200"
					@click="getItems"
				>
					Submit
				</button>
			</div>
		</WrapperPage>
	</TemplateHero>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateHero from '@/components/TemplateHero.vue';
	export default {
		components: {
			WrapperPage,
			TemplateHero
		},
		inject: ['menus', 'io'],
		data: () => ({
			service: 'apps',
			items: null
		}),
		async created() {
			await this.getItems();
		},
		methods: {
			async getItems() {
				try {
					this.items = await this.io.service(this.service)
						.find({
							query: {
								all: true,
								limit: 100,
								since: '',
								// container ID or name
								before: '' // container ID or name
							}
						});
					console.log(this.items);
				} catch (e) {
					this.items = null;
					console.error(e);
				}
			}
		}
	};

</script>
<style scoped></style>