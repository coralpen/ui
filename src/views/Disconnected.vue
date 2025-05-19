<template>
	<TemplateSetup>
		<router-link
			to="/"
			class="text-center block hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
		>
			Disconnected from Server
		</router-link>
	</TemplateSetup>
</template>
<script>
	import TemplateSetup from '@/components/TemplateSetup.vue';
	export default {
		components: {
			TemplateSetup: TemplateSetup
		},
		data: () => ({
			interval: null
		}),
		mounted() {
			this.interval = setInterval(() => {
				this.$router.push('/')
			}, 1000)
		},
		beforeUnmount() {
			clearInterval(this.interval)
		}
	};

</script>
<style scoped></style>