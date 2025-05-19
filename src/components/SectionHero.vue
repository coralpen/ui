<template>
	<div
		class="place-items-center flex from-emerald-500 bg-fuchsia-700 justify-center bg-gradient-to-l uppercase p-8 text-white w-full"
		style="min-height:150px"
	>
		<WrapperPage>
			<slot>
				<h1 class="w-full font-medium text-3xl">
					Your fancy hero title
				</h1>
			</slot>
		</WrapperPage>
	</div>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	export default {
		components: {
			WrapperPage
		},
		data: () => ({})
	};

</script>
<style scoped></style>