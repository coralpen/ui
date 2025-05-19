<template>
	<TemplateSetup>
		<h2 class="mb-2">
			JSTune
		</h2><input
			v-model="email"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="E-mail"
		/><input
			v-model="password"
			type="password"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password"
		/><button
			@click="reset()"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
		>
			Reset
		</button><router-link
			to="/login"
			class="hover:text-slate-200 mt-6 inline-block text-center w-full"
		>
			Go to login
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
		data: () => ({
			token: '',
			email: '',
			password: ''
		}),
		inject: ['io'],
		created() {
			this.token = this.$route.query.token;
		},
		methods: {
			async reset() {
				try {
					await this.io.service('users_recover')
						.patch(this.email, {
							token: this.token,
							password: this.password
						});
					alert('Password has been reset, you can now log in using your new password');
					this.$router.push('/login');
				} catch (e) {
					alert('Reset password failed');
					console.log('Error', e);
				}
			}
		}
	};

</script>
<style scoped></style>