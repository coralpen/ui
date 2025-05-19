<template>
	<TemplateSetup>
		<h2 class="mb-2">
			Lets Encrypt
			<a
				href="https://community.letsencrypt.org/tos"
				target="_blank"
				class="hover:text-slate-200"
			>
				Terms of Service
			</a>
		</h2>
		<br>
		<label>Agree</label>
		<input
			v-model="config.agreed"
			class="float-right"
			type="checkbox"
		/>
		<br>
		<label>Production?</label>
		<input
			v-model="config.production"
			class="float-right"
			type="checkbox"
		/><button
			@click="setup()"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running database instance"
		>
			Submit
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
				agreed: false,
				production: false
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
					.get('letsencrypt');
				this.resolve(result);
			},
			async setup(create = false) {
				this.loading = true;
				let result = await this.io.service('setup')
					.update('letsencrypt', {
						...this.config,
						create
					});
				this.resolve(result);
			},
			async resolve(result) {
				if (result && !result.ready) {} else {
					this.$router.push('/login');
				}
				this.loading = false;
			}
		}
	};

</script>
<style scoped></style>