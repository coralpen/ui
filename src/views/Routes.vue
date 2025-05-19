<template>
	<TemplateDefault
		title="Hostname port routing"
		:renderer="renderer"
	>
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase">
				Routes
			</h1>
		</SectionHero>
		<WrapperPage class="max-w-screen-2xl p-6">
			<div class="relative overflow-auto w-full">
				<h2 class="font-semibold text-center">
					Leader node address: {{address}}
				</h2>
				<h2 class="text-center">
					Feathers = 5050, Static = 6060, Admin = 9090, Fallback = 8080, Http = 80 or 8000, Https = 443
				</h2>
				<h2 class="text-center">
					Custom OAuth redirect: http://localhost:8000/oauth/github?app_url=http://any.localhost:8000
				</h2>
				<div class="flex-row-reverse flex">
					<button
						class="rounded p-2 bg-slate-200"
						@click="getItems"
					>
						Reload
					</button><button
						class="mr-2 rounded p-2 bg-slate-200"
						@click="saveItems"
					>
						Save all
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
									Hostname
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Redirect URL
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Redirect Status
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									App Port
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									DNS Provider
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									DNS Challenge Host
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									DNS Challenge Digest
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									SSL Days Left
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Challenge Ready
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Auto SSL
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Force HTTPS
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Subdomain Fallback
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									OAuth Origin
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Created at
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Updated at
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Renew SSL
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Publish
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									View
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
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.hostname"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.redirect_url"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.redirect_status"
										class="shadow"
										type="number"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.port"
										type="number"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<select
										v-model="create.dns_provider"
										class="h-5 w-40 shadow"
									>
										<option
											v-for="provider of providers?.data"
											:value="String(provider.id)"
										>
											{{provider.name}}
										</option>
									</select>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.dns_challenge_host"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.dns_challenge_digest"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.cert_days_left"
										class="shadow"
										type="number"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.dns_challenge_ready"
										class="shadow"
										type="checkbox"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.auto_ssl"
										class="shadow"
										type="checkbox"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.force_https"
										class="shadow"
										type="checkbox"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.subdomain_fallback"
										class="shadow"
										type="checkbox"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.oauth_origin"
										class="shadow"
										type="checkbox"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input class="shadow" />
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input class="shadow" />
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">

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
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
									>
										<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
										<path
											fill-rule="evenodd"
											d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
											clip-rule="evenodd"
										/>
									</svg> </td>
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
										v-model="item.hostname"
										style="height:20px"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.redirect_url"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.redirect_status"
										type="number"
										style="height:20px"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.port"
										type="number"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<select
										v-model="item.dns_provider"
										class="h-5 w-40 shadow"
									>
										<option
											v-for="provider of providers?.data"
											:value="String(provider.id)"
										>
											{{provider.name}}
										</option>
									</select>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.dns_challenge_host"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.dns_challenge_digest"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.cert_days_left"
										type="number"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										type="checkbox"
										v-model="item.dns_challenge_ready"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										type="checkbox"
										v-model="item.auto_ssl"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										type="checkbox"
										v-model="item.force_https"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										type="checkbox"
										v-model="item.subdomain_fallback"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										type="checkbox"
										v-model="item.oauth_origin"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.created_at"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="item.updated_at"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
										title="Renew SSL Certificate"
										@click="sslrenew(item)"
										:class="{
											'animate-spin': sslRenewIds.includes(item?.id)
										}"
									>
										<path
											fill-rule="evenodd"
											d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
											clip-rule="evenodd"
										/>
									</svg>
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
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
										@click="openItem(item)"
									>
										<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
										<path
											fill-rule="evenodd"
											d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
											clip-rule="evenodd"
										/>
									</svg> </td>
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
		inject: ['menus', 'io', 'socket'],
		props: ['renderer'],
		components: {
			WrapperPage,
			TemplateDefault,
			SectionHero
		},
		data: () => ({
			address: '',
			items: null,
			sslRenewIds: [],
			service: 'proxy',
			providers: [],
			create: {
				hostname: '',
				redirect_url: '',
				redirect_status: 302,
				dns_provider: '',
				dns_challenge_host: '',
				dns_challenge_digest: '',
				dns_challenge_ready: false,
				cert_days_left: 0,
				port: '',
				force_https: false,
				auto_ssl: false,
				subdomain_fallback: false,
				oauth_origin: false
			}
		}),
		async created() {
			try {
				this.resetCreate();
				await this.getProviders();
				await this.getItems();
				await this.inspectLeader();
			} catch (e) {}
		},
		methods: {
			async sslrenew(oldItem) {
				this.sslRenewIds.push(oldItem?.id);
				try {
					this.socket.emit('sslrenew', 'proxy', oldItem, {}, (error, newItem) => {
						for (const key of Object.keys(oldItem)) {
							oldItem[key] = newItem[key];
						}
						this.sslRenewIds = this.sslRenewIds.filter(id => id !== oldItem?.id);
					});
				} catch (e) {
					console.log('error', e);
					this.sslRenewIds = this.sslRenewIds.filter(id => id !== oldItem?.id);
				}
			},
			async inspectLeader() {
				const state = await this.io.service('state')
					.get();
				if (state.leaderIP) {
					this.address = state.leaderIP;
				} else {
					const leaders = await this.io.service('docker_nodes')
						.find({
							query: {
								leader: true
							}
						});
					const leader = leaders?.data?.[0];
					if (leader) {
						this.address = leader.address;
					}
				}
			},
			openItem(item) {
				let port = ['studio.vueplay.com', 'next.vueplay.com', 'localhost'].includes(parent?.location?.hostname) ? ':8000' : '';
				window.open('http://' + item.hostname + port, '_blank');
			},
			async getItems() {
				try {
					this.items = await this.io.service(this.service)
						.find({
							query: {
								$limit: 1000
							}
						});
					for (const item of this.items?.data) {
						for (const key of Object.keys(item)) {
							if (item[key] === null) item[key] = '';
							if (key === 'cert_days_left' && item[key] === '') {
								item[key] = 0;
							}
						}
					}
				} catch (e) {
					console.log(e.message);
				}
			},
			async getProviders() {
				try {
					this.providers = await this.io.service('dns_providers')
						.find({
							query: {
								$limit: 1000
							}
						});
				} catch (e) {
					console.log(e.message);
				}
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
				try {
					const newItem = await this.io.service(this.service)
						.update(oldItem.id, oldItem);
					for (const key of Object.keys(oldItem)) {
						oldItem[key] = newItem[key];
					}
				} catch (e) {
					console.error(e);
					alert(e.message);
				}
			},
			async saveItems() {
				for (const item of this.items?.data || []) {
					await this.updateItem(item);
				}
				alert('All Updated');
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
					hostname: '',
					redirect_url: '',
					redirect_status: 302,
					dns_provider: '',
					dns_challenge_host: '',
					dns_challenge_digest: '',
					dns_challenge_ready: false,
					cert_days_left: 0,
					port: '',
					force_https: false,
					auto_ssl: false,
					subdomain_fallback: false,
					oauth_origin: false
				};
			}
		}
	};

</script>
<style scoped></style>