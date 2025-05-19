<template>
	<div class="overflow-auto h-screen bg-gradient-to-tl bg-cyan-800 grow place-items-center flex from-emerald-500 justify-center p-8 text-white w-full">
		<WrapperPage class="justify-center">
			<div style="max-width:100%;width:240px">
				<slot>
					<h2 class="mb-2">
						Add Some Content ...
					</h2>
				</slot>
			</div>
		</WrapperPage>
	</div>
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