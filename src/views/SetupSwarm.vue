<template>
	<TemplateSetup>
		<h2 class="mb-2">
			Connect to swarm
		</h2> <input
			v-model="config.ip"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="IP:"
		/> <input
			v-model="config.port"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Port:"
		/><input
			v-model="config.token"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Token:"
		/> <select
			v-model="config.role"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
		>
			<option value="worker">Worker</option>
			<option value="manager">Manager</option>
		</select> <button
			@click="setup()"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-2 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running database instance"
		>
			Connect to existing swarm
		</button> <button
			@click="setup(true)"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running database instance"
		>
			Create a new swarm
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
				token: '',
				ip: '',
				port: '',
				role: 'worker'
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
					.get('swarm');
				this.resolve(result);
			},
			async setup(create = false) {
				this.loading = true;
				let result = await this.io.service('setup')
					.update('swarm', {
						...this.config,
						create
					});
				this.resolve(result);
			},
			async resolve(result) {
				if (result && !result.ready) {
					this.config = result.config;
					if (!this.config.role) {
						this.config.role = 'worker';
					}
				} else {
					this.$router.push('/login');
				}
				this.loading = false;
			},
			getIp() {
				const hostname = location.hostname;
				const ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
				const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
				const isIp = ipv4Regex.test(hostname) || ipv6Regex.test(hostname);
				if (isIp) {
					this.ip = hostname;
				}
			}
		}
	};

</script>
<style scoped></style>