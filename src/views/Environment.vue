<template>
	<TemplateDefault
		title="Settings"
		:renderer="renderer"
	>
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase">
				Environment
			</h1>
		</SectionHero>
		<WrapperPage class="max-w-screen-2xl p-6">
			<div class="relative overflow-auto w-full">
				<h2 class="font-semibold text-center">
					Be carefull, changing environment variables could potentially shut down the system.
				</h2>
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
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Key
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Value
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
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.key"
										class="shadow"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										v-model="create.value"
										class="shadow"
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
							<tr v-for="key in Object.keys(items)">
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										readonly=""
										class="shadow"
										:value="key"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
									<input
										class="shadow"
										v-model="items[key]"
										style="height:20px"
									/>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">

									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
										@click="patchItem({ key, value: items[key] })"
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
										@click="removeItem({ key })"
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
		inject: ['menus', 'io'],
		props: ['renderer'],
		components: {
			WrapperPage,
			TemplateDefault,
			SectionHero
		},
		data: () => ({
			items: {},
			service: 'environment',
			create: {
				key: '',
				value: ''
			}
		}),
		async created() {
			try {
				this.resetCreate();
				await this.getItems();
			} catch (e) {}
		},
		methods: {
			async getItems() {
				this.items = await this.io.service(this.service)
					.find();
			},
			async createItem() {
				try {
					await this.io.service(this.service)
						.patch(this.create.key, this.create.value);
					await this.getItems();
					this.resetCreate();
				} catch (e) {
					console.error(e);
					alert(e.message);
				}
			},
			async patchItem({
				key,
				value
			}) {
				if (!confirm(`Are you sure you want to update ${key} to ${value}?`)) {
					return false;
				}
				try {
					await this.io.service(this.service)
						.patch(key, value);
					await this.getItems();
				} catch (e) {
					console.error(e);
					alert(e.message);
				}
			},
			async removeItem({
				key
			}) {
				if (!confirm(`Are you sure you want to remove ${key}?`)) {
					return false;
				}
				try {
					await this.io.service(this.service)
						.remove(key);
					await this.getItems();
				} catch (e) {
					console.error(e);
					alert(e.message);
				}
			},
			resetCreate() {
				this.create = {
					key: '',
					value: ''
				};
			}
		}
	};

</script>
<style scoped></style>