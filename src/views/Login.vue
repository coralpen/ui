<template>
	<TemplateSetup>
		<h2 class="mb-2">
			JSTune
		</h2><input
			ref="username"
			v-model="email"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Username"
		/><input
			v-model="password"
			class="font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password"
			type="password"
		/><button
			@click="login({ email, password })"
			class="hover:bg-fuchsia-950 mt-4 mb-2 rounded-lg bg-fuchsia-900 w-full p-3"
		>
			Login
		</button><button
			v-for="provider in providers"
			@click="redirect(provider)"
			class="hover:bg-sky-800 bg-sky-700 mt-2 rounded-lg w-full p-3"
		>
			Login with {{provider}}
		</button><router-link
			to="/recover"
			class="hover:text-slate-200 mt-6 inline-block text-center w-full"
		>
			Recover lost password
		</router-link><router-link
			to="/register"
			class="mt-3 hover:text-slate-200 inline-block text-center w-full"
		>
			Request access
		</router-link>
	</TemplateSetup>
</template>
<script>
	import TemplateSetup from '@/components/TemplateSetup.vue';
	export default {
		components: {
			TemplateSetup: TemplateSetup
		},
		inject: ["io", "server", "user", "userUpdate"],
		data: () => ({
			email: '',
			password: '',
			providers: []
		}),
		async created() {
			await this.getLoginProviders();
		},
		async mounted() {
			this.$refs?.username?.focus();
		},
		methods: {
			async redirect(provider) {
				let server = this.server
				if (server === '/' || !server) {
					server = location.origin
				}
				const path = server.endsWith('/') ? `oauth/${provider}` : `/oauth/${provider}`;
				location.href = server + path + `?app_url=${location.origin}`;
			},
			async getLoginProviders() {
				try {
					await this.io.logout();
					this.providers = await this.io.service('oauth_login')
						.find();
				} catch (e) {
					console.log('error', e);
				}
			},
			async login(creds) {
				this.io.authenticate({
						strategy: "local",
						...creds
					})
					.then(profile => {
						this.userUpdate(profile?.user);
						this.$router.push("/dashboard");
					})
					.catch(e => {
						console.error("Authentication error", e);
						alert(e.message);
					});
			}
		}
	};

</script>
<style scoped></style>