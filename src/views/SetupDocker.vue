<template>
	<TemplateSetup>
		<div v-if="platform === 'linux'">
			<h2 class="mb-2">
				Setup Docker Automatically
			</h2> <button
				@click="autoSetup"
				:disabled="loading"
				class="hover:bg-fuchsia-950 mb-4 rounded-lg bg-fuchsia-900 w-full p-3"
				title="Install and/or start docker on your machine"
			>
				Auto install
			</button> <input
				v-model="sudoPassword"
				class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
				placeholder="Sudo user password:"
			/>
		</div>
		<h2 class="mb-2">
			Connect to docker
		</h2> <input
			v-model="config.host"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Host: 127.0.0.1"
		/> <input
			v-model="config.port"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Port: 2375"
		/> <input
			v-model="config.username"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Username:"
		/> <input
			v-model="config.password"
			class="font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password:"
		/> <button
			@click="setup"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running docker instance"
		>
			Connect
		</button>
		<h2 class="mt-6">
			Install and start docker desktop manually and try to reconnect.
		</h2> <button
			:disabled="loading"
			@click="connect"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running docker instance"
		>
			Re-connect
		</button>
		<h2 class="mt-2">
			Platform: {{platform}} Loading: {{loading}}
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
				username: '',
				password: ''
			},
			platform: '',
			sudoPassword: '',
			loading: false
		}),
		async created() {
			await this.connect();
		},
		methods: {
			async connect() {
				this.loading = true;
				const result = await this.io.service('setup')
					.get('docker');
				this.resolve(result);
			},
			async autoSetup() {
				this.loading = true;
				let result = await this.io.service('setup')
					.update('docker', {
						sudo: this.sudoPassword
					});
				this.resolve(result);
			},
			async setup() {
				this.loading = true;
				let result = await this.io.service('setup')
					.update('docker', this.config);
				this.resolve(result);
			},
			async resolve(result) {
				if (result && !result.ready) {
					this.config = result.config;
					this.platform = result.platform;
				} else {
					this.$router.push('/login');
				}
				this.loading = false;
			}
		}
	};

</script>
<style scoped></style>