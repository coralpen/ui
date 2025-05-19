<template>
	<TemplateDefault>
		<WrapperPage class="flex-col">

			<div class="flex-col max-w-md place-self-center mt-8 mb-24 w-full flex md:max-w-2xl">
				<h1 class="px-4 mb-4 mt-6 font-medium text-3xl w-full">
					Privacy Policy
				</h1> <span class="text-slate-500 pl-5 mt-2">
					Dec 22, 2023
				</span>
				<div class="relative mb-16 flex-col md:flex-row flex w-full px-4">
					<div class="pt-2 md:pt-0 grow">
						<h2 class="text-xl font-medium mt-10">
							Lorem ipsum dolor sit amet
						</h2> <span class="text-slate-800 my-4 w-full block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ut justo quis nisi placerat faucibus. Integer feugiat eros at nisi commodo, sed dictum eros volutpat.
						</span><span class="text-slate-800 my-4 w-full block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ut justo quis nisi placerat faucibus. Integer feugiat eros at nisi commodo, sed dictum eros volutpat.
						</span>
					</div>
					<div class="bg-slate-100 -bottom-5 absolute h-0.5 left-4 right-4">
					</div>
				</div>
			</div>
		</WrapperPage>
	</TemplateDefault>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateDefault from '@/components/TemplateDefault.vue';
	export default {
		components: {
			WrapperPage,
			TemplateDefault
		},
		data: () => ({})
	};

</script>
<style scoped></style>