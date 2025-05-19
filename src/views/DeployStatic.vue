<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<div class="w-full">
				<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase">
					{{id ? id : 'Deploy Static App'}}
				</h1>
				<h2
					v-if="loading"
					class="font-thin block xl:pl-6 w-full text-center uppercase"
				>
					Loading - {{ loading }} ...
				</h2>
			</div>
		</SectionHero>
		<WrapperPage class="p-6">
			<div class="mt-8 mb-20 relative overflow-auto w-full">
				<div>
					<button
						class="py-4 p-2 w-full rounded bg-slate-200"
						@click="getItem()"
					>
						Reload
					</button>
				</div>
				<div
					class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
					v-if="log"
				>

					<label class="block my-2">
						Last updated {{ new Date(log?.[0]?.commit?.author?.timestamp * 1000).toLocaleString() }} by {{ log?.[0]?.commit?.author?.name }}
					</label>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">

					<label class="block my-2">
						Basic app settings
					</label> <input
						v-if="!$route.params.id"
						v-model="hostname"
						placeholder="Hostname"
						class="px-4 py-2 block w-full mb-4"
					/> <input
						v-if="$route.params.id"
						v-model="id"
						placeholder="Hostname"
						readonly=""
						class="px-4 py-2 block w-full mb-4"
					/>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">
						Upload using drop of Tar / Zip / Folder / Docker Compose File / Docker File
					</label><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadFiles()"
					>
						Upload files
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadFolde()"
					>
						Upload folder
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadTar()"
					>
						Upload tar
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadZip()"
					>
						Upload zip
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="files = []"
					>
						Clear files
					</button>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"><label class="block my-2">
						Files count: {{files.length}}
					</label> </div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">
						Clone using a git provider
					</label>
					<div
						v-for="provider in oauthProvidersFiltered"
						class="mr-4 inline-block"
					>
						<button
							class="rounded p-2 bg-slate-200 mr-1"
							@click="consent(provider.consent_url)"
						>
							Connect to {{provider.provider}}
						</button> <button
							class="rounded p-2 bg-slate-200"
							@click="searchRepos = !searchRepos"
						>
							{{ searchRepos ? 'Close' : 'Select repository' }}
						</button>
					</div>
					<div v-if="searchRepos">
						<label class="block my-2">
							Select user / organisation ({{orgs?.length || '0'}})
						</label> <select
							v-model="query"
							class="mt-2 px-4 py-2 w-full"
						>
							<option
								v-for="org in orgs"
								:value="org.query"
							>
								{{org.title}}
							</option>
						</select> <input
							v-model="search"
							placeholder="Search for repository ..."
							class="mt-2 px-4 py-2 w-full"
							@keypress.enter="getRepositories()"
						/> <button
							class="rounded p-2 mt-2 w-full bg-slate-200"
							@click="getRepositories()"
						>
							Search
						</button> <label class="block my-2">
							Select Repository ({{repositories?.items?.length || '0'}})
						</label> <select
							v-model="repository"
							class="mt-2 px-4 py-2 w-full"
						>
							<option
								v-for="repo in repositories?.items"
								:value="repo.clone_url"
							>
								{{repo.full_name}}
							</option>
						</select> <label class="block my-2">
							Select Branch ({{branches?.length || '0'}})
						</label> <select
							v-model="branch"
							class="mt-2 px-4 py-2 w-full"
						>
							<option
								v-for="repoBranch in branches"
								:value="repoBranch.name"
							>
								{{repoBranch.name}}
							</option>
						</select>
					</div> <input
						v-model="repository"
						placeholder="Repository url"
						class="mt-2 px-4 py-2 w-full"
					/> <input
						v-model="branch"
						placeholder="Branch name"
						class="mt-2 px-4 py-2 w-full"
					/>
				</div>
				<div class="text-right">
					<button
						v-if="!$route.params.id"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						:disabled="!hostname"
						@click="deploy()"
					>
						Launch
					</button><button
						v-if="$route.params.id"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="update()"
					>
						Update
					</button><button
						v-if="!webhook && repository"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="attach()"
					>
						Attach webhook
					</button><button
						v-if="webhook && repository"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="detach()"
					>
						Detach webhook
					</button><button
						v-if="$route.params.id"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="remove()"
					>
						Remove
					</button>
				</div>
			</div>
		</WrapperPage>
	</TemplateDefault>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateDefault from '@/components/TemplateDefault.vue';
	import SectionHero from '@/components/SectionHero.vue';
	import Tar from 'tar-js';
	import untar from 'js-untar';
	import {
		unzip
	} from 'unzipit';
	export default {
		components: {
			WrapperPage,
			TemplateDefault,
			SectionHero
		},
		props: ['renderer'],
		inject: ['io'],
		data: () => ({
			files: [],
			hostname: '',
			repository: '',
			branch: '',
			branches: [],
			webhook: false,
			searchRepos: false,
			oauthProviders: [],
			consentUrl: '',
			search: '',
			user: null,
			query: '',
			organisations: [],
			repositories: null,
			loading: '',
			log: null
		}),
		watch: {
			async searchRepos(open) {
				if (open) {
					await this.getOAuthProviders();
					await this.getUser();
					await this.getOrganisations();
					if (!this.query && this.orgs.length) {
						this.query = this.orgs[0].query;
						await this.getRepositories();
					}
				}
			},
			async query() {
				await this.getRepositories();
			},
			async repository(value) {
				const repo = this.repositories?.items.find(repo => repo.clone_url === value);
				if (repo) {
					this.branch = repo.default_branch;
					await this.getBranches(repo);
				}
			}
		},
		computed: {
			id() {
				return this.$route.params.id || this.hostname;
			},
			oauthProvidersFiltered() {
				const supported = ['github'];
				return this.oauthProviders.filter(provider => supported.includes(provider.provider));
			},
			orgs() {
				return [{
					title: this.user?.login,
					query: `user:${this.user?.login}`
				}, ...this.organisations.map(org => {
					return {
						title: org?.organization?.login,
						query: `org:${org?.organization?.login}`
					};
				})];
			}
		},
		async created() {
			await this.getOAuthProviders();
			if (this.id) {
				await this.getItem();
			} else {
				this.branch = 'main';
			}
		},
		methods: {
			async getUser() {
				this.loading = 'user';
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					let response = await fetch('https://api.github.com/user', {
						headers: {
							Accept: 'application/vnd.github+json',
							Authorization: `Bearer ${provider.token}`
						}
					});
					this.user = await response.json();
					console.log('user', this.user);
				}
				this.loading = '';
			},
			async getOrganisations() {
				this.loading = 'organisations';
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					let response = await fetch('https://api.github.com/user/memberships/orgs' + '?per_page=150', {
						headers: {
							Accept: 'application/vnd.github+json',
							Authorization: `Bearer ${provider.token}`
						}
					});
					this.organisations = await response.json();
					console.log('orgs', this.organisations);
				}
				this.loading = '';
			},
			async getRepositories() {
				this.loading = 'repositories';
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					let search = 'q=' + encodeURIComponent(this.search + (' ' + this.query || ' user:' + this.user.login));
					let response = await fetch(`https://api.github.com/search/repositories?${search}&per_page=150`, {
						headers: {
							Accept: 'application/vnd.github+json',
							Authorization: `Bearer ${provider.token}`
						}
					});
					this.repositories = await response.json();
					console.log('repos', this.repositories);
				}
				this.loading = '';
			},
			async getBranches(repo) {
				this.loading = 'branches';
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					let response = await fetch(repo.branches_url.replace('{/branch}', '') + '?per_page=150', {
						headers: {
							Accept: 'application/vnd.github+json',
							Authorization: `Bearer ${provider.token}`
						}
					});
					this.branches = await response.json();
					console.log('branches', this.branches);
				}
				this.loading = '';
			},
			consent(url) {
				if (!url) return;
				window.open(url, '_blank');
			},
			async getOAuthProviders() {
				this.loading = 'providers';
				const result = await this.io.service('oauth_providers')
					.find({
						query: {}
					});
				this.oauthProviders = result?.data;
				this.loading = '';
			},
			async getItem() {
				this.loading = 'app';
				const res = await this.io.service('static')
					.get(this.id);
				this.hostname = res.id;
				this.repository = res.repository;
				this.branch = res.branch;
				this.webhook = res.webhook;
				this.log = res.log;
				console.log('res', res);
				this.loading = '';
			},
			async remove() {
				this.loading = 'remove app';
				const res = await this.io.service('static')
					.remove(this.id);
				console.log('res', res);
				this.$router.push('/apps-static');
				alert('Static site removed!');
				this.loading = '';
			},
			async attach() {
				this.loading = 'attach webhook';
				const res = await this.io.service('static')
					.patch(this.id, {
						attach: true
					});
				console.log('res', res);
				await this.getItem();
				alert('Attached to webhook!');
				this.loading = '';
			},
			async detach() {
				this.loading = 'detach webhook';
				const res = await this.io.service('static')
					.patch(this.id, {
						detach: true
					});
				console.log('res', res);
				await this.getItem();
				alert('Detached from webhook!');
				this.loading = '';
			},
			async update() {
				this.loading = 'update app';
				try {
					console.log('files', this.files);
					const res = await this.io.service('static')
						.update(this.id, {
							buffer: this.files?.length ? await this.packTar() : null,
							repository: this.repository,
							branch: this.branch
						});
					console.log('res', res);
					await this.getItem();
					alert('Updated!');
				} catch (e) {
					console.log('error', e);
					alert('Could not update: ' + e.message);
				}
				this.loading = '';
			},
			async deploy() {
				this.loading = 'deploy app';
				try {
					console.log('files', this.files);
					const res = await this.io.service('static')
						.create({
							hostname: this.id,
							buffer: this.files?.length ? await this.packTar() : null,
							repository: this.repository,
							branch: this.branch
						});
					console.log('res', res);
					await this.getItem();
					alert('Static site is live!');
				} catch (e) {
					console.log('error', e);
					alert('Could not deploy: ' + e.message);
				}
				this.loading = '';
			},
			async packTar() {
				let tape = new Tar();
				for await (let file of this.files) {
					tape.append(file.name, new Uint8Array(file.buffer));
				}
				return tape.out;
			},
			async uploadZip() {
				this.files = [];
				return new Promise(resolve => {
					let input = document.createElement('input');
					input.type = 'file';
					input.multiple = false;
					input.accept = '.zip';
					input.onchange = async () => {
						let file = Array.from(input.files)[0];
						const {
							entries
						} = await unzip(await file.arrayBuffer());
						for await (const [name, entry] of Object.entries(entries)) {
							if (!entries[name].isDirectory) {
								this.files.push({
									buffer: await entry.arrayBuffer(),
									name
								});
							}
						}
						resolve();
					};
					input.click();
				});
			},
			async uploadTar() {
				this.files = [];
				return new Promise(resolve => {
					let input = document.createElement('input');
					input.type = 'file';
					input.multiple = false;
					input.accept = '.tar';
					input.onchange = async () => {
						let file = Array.from(input.files)[0];
						let files = await untar(await file.arrayBuffer());
						for await (let file of files) {
							this.files.push({
								buffer: file.buffer,
								name: file.name
							});
						}
						resolve();
					};
					input.click();
				});
			},
			async uploadFolder() {
				this.files = [];
				return new Promise(resolve => {
					let input = document.createElement('input');
					input.type = 'file';
					input.multiple = true;
					input.webkitdirectory = true;
					input.dir = true;
					input.onchange = async () => {
						let files = Array.from(input.files);
						for await (let file of files) {
							this.files.push({
								buffer: await file.arrayBuffer(),
								name: file.webkitRelativePath
							});
						}
						resolve();
					};
					input.click();
				});
			},
			async uploadFiles() {
				this.files = [];
				return new Promise(resolve => {
					let input = document.createElement('input');
					input.type = 'file';
					input.multiple = true;
					input.onchange = async () => {
						let files = Array.from(input.files);
						for await (let file of files) {
							let buffer = await file.arrayBuffer();
							this.files.push({
								buffer,
								name: 'root/' + file.name
							});
						}
						resolve();
					};
					input.click();
				});
			}
		}
	};

</script>
<style scoped>
	[disabled] {
		opacity: .5;
	}

</style>