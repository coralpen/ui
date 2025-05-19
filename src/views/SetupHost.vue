<template>
	<TemplateSetup>
		<h2 class="mb-2">
			Setup Host
		</h2> <input
			v-model="config.leaderIP"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Leader IP: 127.0.0.1"
		/><input
			v-model="config.appURL"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="API hostname: http://localhost"
		/><input
			v-model="config.adminHost"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Admin url: http://admin.localhost"
		/><button
			@click="setup()"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Setup host"
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
				leaderIP: '',
				appURL: '',
				adminHost: ''
			},
			loading: false
		}),
		async created() {
			await this.connect();
			this.config.leaderIP = this.getIP();
		},
		methods: {
			async connect() {
				this.loading = true;
				const result = await this.io.service('setup')
					.get('host');
				this.resolve(result);
			},
			async setup() {
				this.loading = true;
				let result = await this.io.service('setup')
					.update('host', {
						...this.config
					});
				this.resolve(result);
			},
			async resolve(result) {
				console.log('res', result);
				if (result && !result.ready) {} else {
					this.$router.push('/login');
				}
				this.loading = false;
			},
			getIP() {
				const hostname = location.hostname;
				const ipPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
				const isIpAddress = ipPattern.test(hostname);
				if (isIpAddress) return hostname;
				return '';
			}
		}
	};

</script>
<style scoped></style>