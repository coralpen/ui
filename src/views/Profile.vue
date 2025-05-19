<template>
	<TemplateHero title="User Profile">
		<WrapperPage>
			<div class="w-full md:flex-row flex-col my-16 py-4 flex">
				<div class="px-6 justify-center flex-col flex w-full md:w-1/2">
					<p class="tracking-wide max-w-md font-light text-2xl">
						{{user}}
					</p>
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
		inject: ['user'],
		data: () => ({})
	};

</script>
<style scoped></style>