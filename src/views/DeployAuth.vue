<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase">
				Deploy OAuth2 Provider
			</h1>
		</SectionHero>
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
					</h2> <button
						class="rounded p-2 bg-slate-200"
						@click="getItems()"
					>
						Google
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="getItems()"
					>
						Github
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="getItems()"
					>
						Facebook
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="getItems()"
					>
						iCloud
					</button>
				</div> <button
					class="rounded p-2 bg-slate-200"
					@click="getItems()"
				>
					Submit
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
		props: ['renderer'],
		data: () => ({})
	};

</script>
<style scoped></style>