<template>
	<div
		class="bg-slate-50"
		style="min-height:40px"
	>
		<slot>
			<div class="items-center h-9 justify-center w-full flex">
				Add some content to header
			</div>
		</slot>
	</div>
</template>
<script>
	export default {
		data: () => ({})
	};

</script>
<style scoped></style>