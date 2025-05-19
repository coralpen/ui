<template>
	<TemplateSetup>
		<h2 class="mb-2">
			Create Admin User
		</h2> <input
			v-model="config.email"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Email:"
		/><input
			v-model="config.password"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password:"
			type="password"
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
				email: '',
				password: ''
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
					.get('admin');
				this.resolve(result);
			},
			async setup(create = false) {
				this.loading = true;
				let result = await this.io.service('setup')
					.update('admin', {
						...this.config,
						create
					});
				this.resolve(result);
			},
			async resolve(result) {
				console.log('res', result)
				if (result && !result.ready) {} else {
					this.$router.push('/login');
				}
				this.loading = false;
			}
		}
	};

</script>
<style scoped></style>