<template>
	<div class="flex m-auto max-w-6xl w-full">
		<slot>
			<div class="items-center justify-center w-full flex p-4">
				Add anything to the page wrapper
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