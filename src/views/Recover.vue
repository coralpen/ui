<template>
	<TemplateSetup>
		<h2 class="mb-2">
			JSTune
		</h2><input
			v-model="email"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="E-mail"
		/><button
			@click="recover()"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
		>
			Recover
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
		inject: ['io'],
		data: () => ({
			email: ''
		}),
		methods: {
			async recover() {
				try {
					await this.io.service('users_recover')
						.create({
							email: this.email
						});
					alert('Recovery email is sent');
				} catch (e) {
					console.log('error', e);
				}
			}
		}
	};

</script>
<style scoped></style>