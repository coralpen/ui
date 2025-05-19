<template>
	<TemplateHero
		class="shadow-2xl"
		title="Uh oh ..."
	>
		<WrapperPage>
			<div class="w-full md:flex-row flex-col my-16 py-4 flex">
				<div class="px-6 justify-center flex-col flex w-full md:w-2/3">
					<h1 class="mb-8 font-semibold text-4xl">
						Page could not be found
					</h1><router-link
						to="/"
						class="tracking-wide max-w-md font-light text-2xl"
					>
						Take me home
					</router-link>
				</div>
				<div class="p-6 justify-center lg:justify-end flex w-full md:w-1/3">
				</div>
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
		data: () => ({})
	};

</script>
<style scoped></style>