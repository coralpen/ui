<template>
	<TemplateSetup>
		<h2 class="text-center mb-2">
			Node is connected to swarm
		</h2>
	</TemplateSetup>
</template>
<script>
	import TemplateSetup from '@/components/TemplateSetup.vue';
	export default {
		inject: ['io'],
		components: {
			TemplateSetup: TemplateSetup
		},
		data: () => ({})
	};

</script>
<style scoped></style>