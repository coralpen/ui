<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<div class="w-full">
				<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase">
					{{ id || 'Deploy Docker App'}}
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
			<div class="mb-20 relative overflow-auto w-full">
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">

					<div class="flex mb-4"><input
							v-model="name"
							placeholder="Name"
							class="text-2xl px-4 py-2 block w-full "
						/><button
							class="justify-center items-center flex py-2 rounded bg-slate-200 w-12"
							@click="rename()"
							title="Rename app"
							v-if="loaded"
						><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-6 h-6"
							>
								<path
									fill-rule="evenodd"
									d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
									clip-rule="evenodd"
								/>
							</svg> </button></div><input
						v-if="!loaded"
						v-model="slug"
						placeholder="Slug"
						class="px-4 py-2 block w-full"
					/> <input
						v-if="loaded"
						v-model="id"
						placeholder="Slug"
						readonly=""
						class="px-4 py-2 block w-full"
					/>
				</div>
				<div
					class="flex p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
					v-if="log"
				>
					<div>
						<label class="block my-2">
							Last updated {{ new Date(log?.[0]?.commit?.author?.timestamp * 1000).toLocaleString() }} by {{ log?.[0]?.commit?.author?.name }}
						</label>
					</div>
				</div>
				<div
					class="flex p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
					v-if="loaded"
				><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="getItem()"
						title="Reload"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
								clip-rule="evenodd"
							/>
						</svg> </button> <button
						v-if="!running"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="start()"
						title="Start"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="compose()"
						title="Compose - Generates commands based on docker compose"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
							<path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
							<path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="build()"
						title="Build"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
								clip-rule="evenodd"
							/>
							<path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
							<path
								fill-rule="evenodd"
								d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="running"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="stop()"
						title="Stop"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
								clip-rule="evenodd"
							/>
						</svg> </button> <button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="destroy()"
						title="Delete volumes"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="update()"
						title="Update app by repository or provided files"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="!webhook && repository"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="attach()"
						title="Attach Webhook"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
						</svg> </button><button
						v-if="webhook && repository"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="detach()"
						title="Detach Webhook"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="stats()"
						title="Get statistics"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
						</svg> </button><button
						class="p-2 rounded bg-slate-200"
						@click="remove()"
						title="Delete application"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
								clip-rule="evenodd"
							/>
						</svg> </button> </div><textarea
					ref="output"
					readonly=""
					v-model="logs"
					class="justify-start flex-col-reverse flex overflow-auto h-64 w-full p-4 rounded bg-slate-50 my-8 "
					style="font-family:monospace"
				/>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"><label class="block my-2 text-center">
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
					</button> </div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"><label class="block my-2">
						Files count: {{files.length}}
					</label> </div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block mt-2 mb-4 font-medium text-lg">
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
					</div> <label class="block my-2">
						Repository
					</label> <input
						v-model="repository"
						placeholder="Repository url"
						class="mt-2 px-4 py-2 w-full"
					/> <label class="block my-2">
						Branch
					</label> <input
						v-model="branch"
						placeholder="Branch"
						class="mt-2 px-4 py-2 w-full"
					/> <button
						class="rounded p-2 bg-slate-200 mt-2"
						@click="adjustVolumes = !adjustVolumes"
					>
						Move volumes to app folder: {{ adjustVolumes ? 'Yes' : 'No' }}
					</button>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">
						One click installation browsing images from docker hub
					</label>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">
						Check if port is free
					</label><input
						v-model="portToCheck"
						placeholder="Port to check"
						class="mt-2 px-4 py-2 w-full"
					/><button
						class="rounded p-2 bg-slate-200 mt-2"
						@click="checkPort(portToCheck)"
					>
						Check
					</button>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2 font-medium text-lg">Docker Compose</label><button
						class="rounded p-2 bg-slate-200 my-4"
						@click="inherit = !inherit"
					>
						Inherit original docker-compose file: {{ inherit ? 'Yes' : 'No' }}
					</button> <textarea
						class="w-full p-4"
						v-model="dockerComposeFile"
						rows="10"
						placeholder="docker-compose.override.yml"
					/>
				</div>
				<div
					class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
					v-if="loaded"
				>
					<div class="flex mt-2 mb-6">
						<div class="w-1/2">
							<label class="font-medium text-lg">
								Related Services
							</label>
						</div>
						<div class="text-right w-1/2">
							<button
								class="rounded p-2 bg-slate-200"
								@click="getServices()"
								title="Reload"
							><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6"
								>
									<path
										fill-rule="evenodd"
										d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
										clip-rule="evenodd"
									/>
								</svg> </button>
						</div>
					</div>
					<div class="flex overflow-auto shadow-sm bg-slate-100 text-slate-700">
						<button
							class="p-2 mr-1 rounded bg-slate-200"
							@click="serviceOpen = (serviceOpen?.docker_service_id === service.docker_service_id ? null : service)"
							v-for="service in services"
						>
							{{service.name.replace(slug + '_', '')}}
						</button>
					</div>
					<div
						class="bg-slate-50 p-4 overflow-auto shadow-sm mb-2 mt-2 text-slate-700"
						v-for="service in (serviceOpen ? [serviceOpen] : [])"
					>
						<label class="block my-2">
							<b class="block mt-1">
								Service name
							</b>
							{{ service.name }} <b class="block mt-1">
								Service ID
							</b>
							{{ service.docker_service_id }} <b class="block mt-1">
								Image
							</b>
							{{ service.docker_image }}
						</label>
						<div
							class="bg-slate-100 p-4 my-4 overflow-auto shadow-sm mb-2 text-slate-700"
							v-for="port in service.ports"
						>
							<label class="block my-2">
								<b class="block mt-1">
									Routes linked to port {{ port.port_external }}
								</b> </label>
							<div
								v-for="provider in portProviders"
								class="mb-2 p-2 bg-slate-50"
							>
								<h3>
									{{provider}}
								</h3> <button
									@click="inspectPort(port.port_external, provider)"
									class="mb-2 mr-2 hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"
								>
									Inspect Port
								</button><button
									@click="openPort(port.port_external, provider)"
									class="mr-2 hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"
								>
									Open Port
								</button><button
									@click="closePort(port.port_external, provider)"
									class="hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100"
								>
									Close Port
								</button>
							</div>
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
									<tr v-for="item in port.routes">
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
												v-if="item.id"
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
											</svg> <svg
												v-if="!item.id"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
												@click="createItem(item)"
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
						<div class="bg-slate-100 p-4 my-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<table class="w-full">
								<caption class="text-left mb-3">
									Environment Variables
								</caption>
								<thead>
									<tr>
										<th class="text-left">
											Key
										</th>
										<th class="text-left">
											Value
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="env in service.environments">
										<td class="pr-4">
											<input
												v-model="env.key"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4"><input
												v-model="env.value"
												class="w-full p-2 rounded my-1"
											/> </td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<table class="w-full">
								<caption class="text-left mb-3">
									Networks
								</caption>
								<thead>
									<tr>
										<th class="text-left">
											Address
										</th>
										<th class="text-left">
											Network ID
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="network in service.networks">
										<td class="pr-4">
											<input
												v-model="network.address"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4"><input
												v-model="network.docker_network_id"
												class="w-full p-2 rounded my-1"
											/> </td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<table class="w-full">
								<caption class="text-left mb-3">
									Ports
								</caption>
								<thead>
									<tr>
										<th class="text-left">
											External
										</th>
										<th class="text-left">
											Internal
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="port in service.ports">
										<td class="pr-4">
											<input
												v-model="port.port_external"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4"><input
												v-model="port.port_internal"
												class="w-full p-2 rounded my-1"
											/> </td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<table class="w-full">
								<caption class="text-left mb-3">
									Volumes
								</caption>
								<thead>
									<tr>
										<th class="text-left">
											Name
										</th>
										<th class="text-left">
											Path
										</th>
										<th class="text-left">
											Type
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="volume in service.volumes">
										<td class="pr-4">
											<input
												v-model="volume.name"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="volume.path"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="volume.type"
												class="w-full p-2 rounded my-1"
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<caption class="text-left mb-3">
								Tasks
							</caption>
							<table class="w-full">
								<thead>
									<tr>
										<th class="text-left">
											Timestamp
										</th>
										<th class="text-left">
											State
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Message
										</th>
										<th
											class="whitespace-nowrap text-left"
											style="height:26px"
										>
											Desired State
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Slot
										</th>
										<th
											class="whitespace-nowrap text-left"
											style="height:26px"
										>
											Node ID
										</th>
										<th
											class="whitespace-nowrap text-left"
											style="height:26px"
										>
											Task ID
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="task in service.tasks">
										<td class="pr-4">
											<input
												v-model="task.timestamp"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.state"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.message"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.desired_state"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.slot"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.docker_node_id"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.docker_task_id"
												class="w-full p-2 rounded my-1"
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<caption class="text-left mb-3">
								Containers
							</caption>
							<table class="w-full">
								<thead>
									<tr>
										<th class="text-left">
											Name
										</th>
										<th class="text-left">
											Command
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											State
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Status
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Image
										</th>
										<th
											class="whitespace-nowrap text-left"
											style="height:26px"
										>
											Task ID
										</th>
										<th class="whitespace-nowrap text-left">
											Node ID
										</th>
										<th class="whitespace-nowrap text-left">
											Container ID
										</th>
										<th class="text-left">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="container in service.containers">
										<td class="pr-4">
											<input
												v-model="container.name"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.command"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.state"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.status"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.docker_image_name"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.docker_task_id"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.docker_node_id"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.docker_container_id"
												class="w-full p-2 rounded my-1"
											/>
										</td>
										<td style="width:130px">
											<router-link
												:to="'/docker/containers/' + container.docker_container_id"
												class="p-2 mr-4 rounded bg-slate-200"
											>
												Terminal
											</router-link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div v-if="!loaded">
					<button
						class="py-4 rounded bg-slate-200 w-full"
						:disabled="!slug"
						@click="deploy()"
						title="Launch"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="m-auto w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
								clip-rule="evenodd"
							/>
							<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
						</svg> </button>
				</div>
				<div
					class="flex p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
					v-if="loaded"
				><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="getItem()"
						title="Reload"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
								clip-rule="evenodd"
							/>
						</svg> </button> <button
						v-if="!running"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="start()"
						title="Start"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="compose()"
						title="Compose - Generates commands based on docker compose"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
							<path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
							<path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="build()"
						title="Build"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
								clip-rule="evenodd"
							/>
							<path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
							<path
								fill-rule="evenodd"
								d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="running"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="stop()"
						title="Stop"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
								clip-rule="evenodd"
							/>
						</svg> </button> <button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="destroy()"
						title="Delete volumes"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="update()"
						title="Update app by repository or provided files"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="!webhook && repository"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="attach()"
						title="Attach Webhook"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" />
						</svg> </button><button
						v-if="webhook && repository"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="detach()"
						title="Detach Webhook"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="stats()"
						title="Get statistics"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
						</svg> </button><button
						class="p-2 rounded bg-slate-200"
						@click="remove()"
						title="Delete application"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
								clip-rule="evenodd"
							/>
						</svg> </button> </div>
				<h2
					v-if="loading"
					class="font-thin block xl:pl-6 w-full text-center uppercase flex p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
				>
					Loading - {{ loading }} ...
				</h2> <textarea
					ref="output"
					readonly=""
					v-model="logs"
					class="justify-start flex-col-reverse flex overflow-auto h-64 w-full p-4 rounded bg-slate-50 my-8 "
					style="font-family:monospace"
				/>
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
			portToCheck: '',
			dockerComposeFile: ``,
			files: [],
			name: '',
			slug: '',
			repository: '',
			branch: '',
			branches: [],
			adjustVolumes: true,
			inherit: true,
			running: false,
			webhook: false,
			searchRepos: false,
			oauthProviders: [],
			consentUrl: '',
			search: '',
			user: null,
			query: '',
			organisations: [],
			repositories: null,
			log: null,
			loading: '',
			serviceOpen: null,
			services: [],
			logs: '',
			loaded: false,
			providers: [],
			portProviders: ['ufw', 'google', 'aws', 'azure'],
			sslRenewIds: [],
			demo: false
		}),
		watch: {
			slug(val) {
				let slug = val.toLowerCase()
					.replace(/[\s_]+/g, '-')
					.replace(/[^a-z0-9-]/g, '')
					.replace(/-{2,}/g, '-')
					.replace(/^-+/g, '');
				if (val !== slug) {
					this.slug = slug;
				}
			},
			name(val, old) {
				if (!this.loaded) {
					let oldSlug = old.toLowerCase()
						.replace(/[\s_]+/g, '-')
						.replace(/[^a-z0-9-]/g, '')
						.replace(/-{2,}/g, '-')
						.replace(/^-+|-+$/g, '');
					let slug = val.toLowerCase()
						.replace(/[\s_]+/g, '-')
						.replace(/[^a-z0-9-]/g, '')
						.replace(/-{2,}/g, '-')
						.replace(/^-+|-+$/g, '');
					if (!this.slug || oldSlug === this.slug) {
						this.slug = slug;
					}
				}
			},
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
					await this.getDockerCompose(repo);
				}
			},
			async branch(value) {
				const repo = this.repositories?.items.find(repo => repo.clone_url === this.repository);
				if (repo) {
					await this.getDockerCompose(repo);
				}
			}
		},
		computed: {
			id() {
				return this.$route.params.id || this.slug || (this.demo ? 'ignite-users' : '');
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
			await this.getProviders();
			this.io.service('apps')
				.on(`output`, this.listener);
			if (this.id) {
				await this.getItem();
			}
		},
		beforeUnmount() {
			this.io.service('apps')
				.off(`output`, this.listener);
		},
		methods: {
			async stats() {
				const res = await this.io.service('apps')
					.stats({
						slug: this.slug
					});
				console.log('stats', res);
			},
			async checkPort(port) {
				const res = await this.io.service('docker_services_ports')
					.find({
						query: {
							port_external: port
						}
					});
				if (res?.data?.length) {
					alert('Port is taken');
				} else {
					alert('Port is available');
				}
			},
			async inspectPort(port, provider = 'ufw') {
				const result = await this.io.service('ports')
					.get({
						port,
						provider
					});
				console.log(result);
			},
			async openPort(port, provider = 'ufw') {
				const result = await this.io.service('ports')
					.create({
						port,
						provider
					});
				console.log(result);
			},
			async closePort(port, provider = 'ufw') {
				const result = await this.io.service('ports')
					.remove({
						port,
						provider
					});
				console.log(result);
			},
			openItem(item) {
				let port = ['studio.vueplay.com', 'next.vueplay.com', 'localhost'].includes(parent?.location?.hostname) ? ':8000' : '';
				window.open('http://' + item.hostname + port, '_blank');
			},
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
			async createItem(item) {
				try {
					await this.io.service('proxy')
						.create(item);
					await this.getServices();
				} catch (e) {
					console.error(e);
					alert(e.message);
				}
			},
			async updateItem(oldItem) {
				try {
					const newItem = await this.io.service('proxy')
						.update(oldItem.id, oldItem);
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
					await this.io.service('proxy')
						.remove(item.id);
					await this.getServices();
				} catch (e) {
					console.error(e);
					alert(e.message);
				}
			},
			async getProviders() {
				try {
					this.providers = await this.io.service('dns_providers')
						.find();
				} catch (e) {
					console.log(e.message);
				}
			},
			listener(line) {
				console.log('Got something', line);
				this.logs += '\n' + line.data;
				setTimeout(() => {
					this.$refs.output.scrollTop = this.$refs.output.scrollHeight;
				}, 10);
			},
			async getServices() {
				console.log('Syncing docker with database...');
				await this.io.service('docker_nodes')
					.get('sync');
				console.log('Fetching services...');
				const services = (await this.io.service('docker_services')
						.find({
							query: {
								stackname: this.slug,
								$limit: 1000
							}
						}))
					.data;
				console.log('Fetching service resources...', services);
				for (const service of services) {
					console.log('Resolve', service.name);
					console.log('Fetching environments');
					service.environments = (await this.io.service('docker_services_environments')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Fetching networks');
					service.networks = (await this.io.service('docker_services_networks')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Fetching ports');
					service.ports = (await this.io.service('docker_services_ports')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					for (const port of service.ports) {
						port.routes = (await this.io.service('proxy')
								.find({
									query: {
										port: port.port_external
									}
								}))
							?.data || [];
						port.routes.push({
							hostname: '',
							redirect_url: '',
							redirect_status: '',
							port: port.port_external,
							dns_provider: '',
							dns_challenge_host: '',
							dns_challenge_digest: '',
							cert_days_left: '',
							dns_challenge_ready: '',
							auto_ssl: '',
							force_https: '',
							subdomain_fallback: '',
							oauth_origin: '',
							created_at: '',
							updated_at: ''
						});
						console.log('port routes', port.port_external, port.routes);
					}
					console.log('Fetching volumes');
					service.volumes = (await this.io.service('docker_services_volumes')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Fetching tasks');
					service.tasks = (await this.io.service('docker_tasks')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Fetching containers');
					service.containers = (await this.io.service('docker_containers')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Done', service.name);
				}
				console.log('Completed', services);
				this.services = services;
			},
			async getDockerCompose(repo) {
				this.loading = 'docker compose file';
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					try {
						let response = await fetch(repo.contents_url.replace('{+path}', 'docker-compose.yml') + `?ref=${this.branch}`, {
							headers: {
								Accept: 'application/vnd.github+json',
								Authorization: `Bearer ${provider.token}`
							}
						});
						const json = await response.json();
						if (json.download_url) {
							this.dockerComposeFile = await (await fetch(json.download_url))
								.text();
						}
					} catch (e) {
						console.error('Could not fetch docker-compose.yml', error);
					}
				}
				this.loading = '';
			},
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
				try {
					const item = await this.io.service('apps')
						.get(this.id);
					this.name = item.name;
					this.slug = item.id;
					this.repository = item.repository;
					this.branch = item.branch;
					this.adjustVolumes = item.adjustVolumes;
					this.inherit = item.inherit;
					this.running = item.running;
					this.dockerComposeFile = item.dockerComposeFile;
					this.webhook = item.webhook;
					this.log = item.log;
					this.loaded = true;
					console.log('item', item);
					await this.getServices();
				} catch (e) {
					console.log('Error fetching item', e);
				}
				this.loading = '';
			},
			async rename() {
				this.loading = `Rename to ${this.name} ...`;
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							rename: this.name
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async remove() {
				if (!confirm('Remove application entirely?')) return;
				this.loading = 'remove app';
				try {
					const res = await this.io.service('apps')
						.remove(this.id);
					console.log('res', res);
					this.$router.push('/apps');
				} catch (e) {
					console.log('err', e);
				}
				this.loading = '';
			},
			async attach() {
				this.loading = 'attach webhook';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							attach: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async detach() {
				this.loading = 'detach webhook';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							detach: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async start() {
				this.loading = 'start app';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							start: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async stop() {
				this.loading = 'stop app';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							stop: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async build() {
				this.loading = 'build app';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							build: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async destroy() {
				if (!confirm('Destroy volumes?')) this.loading = 'destroy app';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							destroy: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async compose() {
				this.loading = 'compose app';
				const res = await this.io.service('apps')
					.patch(this.id, {
						compose: this.dockerComposeFile
					});
				console.log('res', res);
				await this.getItem();
				this.loading = '';
			},
			async deploy() {
				this.loading = 'deploy app';
				try {
					console.log('files', this.files);
					const res = await this.io.service('apps')
						.create({
							name: this.name,
							slug: this.id,
							buffer: this.files?.length ? await this.packTar() : null,
							repository: this.repository,
							branch: this.branch,
							dockerComposeFile: this.dockerComposeFile,
							adjustVolumes: this.adjustVolumes,
							inherit: this.inherit
						});
					console.log('res', res);
				} catch (e) {
					console.log('error', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async update() {
				this.loading = 'update app';
				try {
					const res = await this.io.service('apps')
						.update(this.id, {
							buffer: this.files?.length ? await this.packTar() : null,
							repository: this.repository,
							dockerComposeFile: this.dockerComposeFile,
							inherit: this.inherit,
							adjustVolumes: this.adjustVolumes,
							branch: this.branch,
							name: this.name
						});
					console.log('res', res);
				} catch (e) {
					console.log('error', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async resolveDockerCompose() {
				this.loading = 'docker compose file';
				const file = this.files.find(f => f.name.endsWith('docker-compose.yml'));
				if (file) {
					const content = new TextDecoder()
						.decode(file.buffer);
					this.dockerComposeFile = content;
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
				this.dockerComposeFile = '';
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
						await this.resolveDockerCompose();
						resolve();
					};
					input.click();
				});
			},
			async uploadTar() {
				this.files = [];
				this.dockerComposeFile = '';
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
						await this.resolveDockerCompose();
						resolve();
					};
					input.click();
				});
			},
			async uploadFolder() {
				this.files = [];
				this.dockerComposeFile = '';
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
						await this.resolveDockerCompose();
						resolve();
					};
					input.click();
				});
			},
			async uploadFiles() {
				this.files = [];
				this.dockerComposeFile = '';
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
						await this.resolveDockerCompose();
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