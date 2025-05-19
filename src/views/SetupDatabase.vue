<template>
	<TemplateSetup>
		<h2 class="mb-2">
			Connect to database
		</h2> <input
			v-model="config.email"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Host: 127.0.0.1"
		/> <input
			v-model="config.passwor"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Port: 3306"
		/> <input
			v-model="config.user"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Username:"
		/> <input
			v-model="config.password"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password:"
		/> <input
			v-model="config.database"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Database:"
		/> <button
			@click="setup()"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-2 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running database instance"
		>
			Connect to existing database
		</button> <button
			@click="setup(true)"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running database instance"
		>
			Create a new database
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
				host: '',
				port: '',
				user: '',
				password: '',
				database: ''
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
					.get('database');
				this.resolve(result);
			},
			async setup(create = false) {
				this.loading = true;
				let result = await this.io.service('setup')
					.update('database', {
						...this.config,
						create
					});
				this.resolve(result);
			},
			async resolve(result) {
				if (result && !result.ready) {
					if (result?.config) this.config = result.config;
				} else {
					this.$router.push('/login');
				}
				this.loading = false;
			}
		}
	};

</script>
<style scoped></style>