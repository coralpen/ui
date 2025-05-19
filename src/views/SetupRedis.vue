<template>
	<TemplateSetup>
		<h2 class="mb-2">
			Setup Redis
		</h2> <input
			v-model="config.url"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="redis://"
		/><button
			@click="setup()"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using cluster for loadbalancing with redis"
		>
			Submit
		</button>
		<button
			@click="setup(false)"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install without using clustering"
		>
			Skip clustering
		</button>
		<h2 class="mt-2">
			Loading: {{loading}}
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
		data: () => ({
			config: {
				url: 'redis://localhost:6379'
			},
			loading: false
		}),
		async created() {
			await this.connect();
		},
		methods: {
			async connect() {
				this.loading = true;
				const result = await this.io.service('setup')
					.get('redis');
				this.resolve(result);
			},
			async setup(redis = true) {
				this.loading = true;
				let result = await this.io.service('setup')
					.update('redis', {
						...this.config,
						redis
					});
				this.resolve(result);
			},
			async resolve(result) {
				console.log('res', result);
				if (result && !result.ready) {} else {
					this.$router.push('/login');
				}
				this.loading = false;
			}
		}
	};

</script>
<style scoped></style>