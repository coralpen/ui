<template>
	<TemplateSetup>
		<h2 class="mb-2">
			Setup sender email
		</h2> <input
			v-model="config.user"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Email:"
			name="email"
		/><a
			class="hover:no-underline hover:text-sky-100 underline inline-block mb-2"
			style="height:24px"
			target="_blank"
			href="https://security.google.com/settings/security/apppasswords"
		>
			Get gmail app password (optional)
		</a><input
			v-model="config.pass"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password:"
			type="password"
			name="password"
		/><input
			v-model="config.host"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Host: smtp.gmail.com"
			name="host"
		/> <input
			v-model="config.port"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Port: 465"
			type="number"
			name="port"
		/> <label class="block">Secure</label> <input
			name="secure"
			type="checkbox"
			v-model="config.secure"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md"
		/> <label class="block">Pool</label> <input
			name="pool"
			type="checkbox"
			v-model="config.pool"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md"
		/> <label class="block">Reject unauthorized</label> <input
			type="checkbox"
			v-model="config.rejectUnauthorized"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md"
		/>
		<h2
			class="mt-10 mb-2"
			style="height:24px"
		>
			Send a test email
		</h2><input
			name="receiver-email"
			v-model="receiver"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Receiver: example@gmail.com"
		/><button
			@click="setup(true)"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running database instance"
		>
			Send test email
		</button>
		<h2
			class="mt-10"
			style="height:24px"
		>
			Store sender
		</h2><button
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
				user: '',
				pass: '',
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				pool: false,
				rejectUnauthorized: true
			},
			receiver: '',
			loading: false
		}),
		async created() {
			await this.connect();
		},
		methods: {
			async connect() {
				this.loading = true;
				const result = await this.io.service('setup')
					.get('mail');
				this.resolve(result);
			},
			async setup(test = false) {
				this.loading = true;
				let result = await this.io.service('setup')
					.update('mail', {
						test,
						receiver: this.receiver,
						...this.config
					});
				if (test) {
					alert('Test email sent');
					this.loading = false;
				} else {
					this.resolve(result);
				}
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