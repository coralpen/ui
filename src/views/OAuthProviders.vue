<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase">
				Authentication
			</h1>
		</SectionHero>
		<WrapperPage class="max-w-screen-2xl p-6">
			<div class="flex-col flex relative overflow-auto w-full">
				<div class="flex-row-reverse flex">
					<button
						class="rounded p-2 bg-slate-200"
						@click="getItems"
					>
						Reload
					</button>
				</div>
				<div class="overflow-auto shadow-sm my-8">
					<table class="border-collapse table-auto w-full text-sm">
						<thead>
							<tr>
								<th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
									ID
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Provider
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Key
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Secret
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Scope
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Nonce
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Token
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Setup URL
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Callback URL
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Consent URL
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Created at
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Updated at
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Publish
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Remove
								</th>
							</tr>
						</thead>
						<tbody class="bg-white dark:bg-slate-800">
							<tr>
								<td class="text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"><input
										v-model="create.provider"
										class="shadow"
									/> </td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.key"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.secret"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.scope"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.nonce"
										class="shadow"
										type="checkbox"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.token"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.setup_url"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										readonly="readonly"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										readonly="readonly"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										readonly="readonly"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										readonly="readonly"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">

									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
										@click="createItem"
									>
										<path
											fill-rule="evenodd"
											d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
											clip-rule="evenodd"
										/>
										<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
									</svg>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
									>
										<path
											fill-rule="evenodd"
											d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
											clip-rule="evenodd"
										/>
									</svg>
								</td>
							</tr>
							<tr v-for="item in items?.data">
								<td class="text-ellipsis overflow-hidden border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
									{{ item.id }}
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.provider"
										style="height:20px"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.key"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.secret"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.scope"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.nonce"
										type="checkbox"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.token"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.setup_url"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.callback_url"
										readonly="readonly"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										@click="consent(item.consent_url)"
										class="shadow"
										v-model="item.consent_url"
										readonly="readonly"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.created_at"
										readonly="readonly"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.updated_at"
										readonly="readonly"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">

									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
										@click="updateItem(item)"
									>
										<path
											fill-rule="evenodd"
											d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
											clip-rule="evenodd"
										/>
										<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
									</svg>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
										@click="removeItem(item)"
									>
										<path
											fill-rule="evenodd"
											d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
											clip-rule="evenodd"
										/>
									</svg>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</WrapperPage>
	</TemplateDefault>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateDefault from '@/components/TemplateDefault.vue';
	import SectionHero from '@/components/SectionHero.vue';
	export default {
		components: {
			WrapperPage,
			TemplateDefault,
			SectionHero
		},
		inject: ['menus', 'io', 'server'],
		props: ['renderer'],
		data: () => ({
			items: null,
			service: 'oauth_providers',
			create: {
				provider: '',
				key: '',
				secret: '',
				scope: '',
				nonce: false,
				token: '',
				setup_url: ''
			}
		}),
		async created() {
			try {
				this.resetCreate();
				await this.getItems();
			} catch (e) {}
		},
		methods: {
			consent(url, provider = 'github') {
				if (!url) return;
				let server = this.server
				if (server === '/' || !server) {
					server = location.origin
				}
				const path = server.endsWith('/') ? `oauth/${provider}` : `/oauth/${provider}`;
				const redir = encodeURIComponent(`${server}${path}/callback?app_url=${location.origin}/oauth-token-stored`)
				window.open(url + `&redirect_uri=${redir}`, '_blank');
			},
			async getItems() {
				this.items = await this.io.service(this.service)
					.find({
						query: {}
					});
			},
			async createItem() {
				try {
					await this.io.service(this.service)
						.create(this.create);
					await this.getItems();
					this.resetCreate();
				} catch (e) {
					console.error(e);
					alert(e.message);
				}
			},
			async updateItem(oldItem) {
				let clone = {
					...oldItem
				};
				delete clone.consent_url;
				delete clone.callback_url;
				try {
					const newItem = await this.io.service(this.service)
						.update(oldItem.id, clone);
					for (const key of Object.keys(oldItem)) {
						oldItem[key] = newItem[key];
					}
				} catch (e) {
					console.error(e);
					alert(e.message);
				}
			},
			async removeItem(item) {
				try {
					await this.io.service(this.service)
						.remove(item.id);
					await this.getItems();
				} catch (e) {
					console.error(e);
					alert(e.message);
				}
			},
			resetCreate() {
				this.create = {
					provider: '',
					key: '',
					secret: '',
					scope: '',
					nonce: false,
					token: '',
					setup_url: ''
				};
			}
		}
	};

</script>
<style scoped></style>