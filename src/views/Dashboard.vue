<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center">
				Dashboard
			</h1>
		</SectionHero>
		<WrapperPage class="flex-col">

			<div class="flex-col max-w-md place-self-center mt-8 mb-24 w-full flex md:max-w-4xl">
				<h1 class="px-4 mb-2 mt-6 font-medium text-3xl w-full">
					Platform as a Service
				</h1>
				<h1 class="px-4 mb-4 mt-2 font-medium text-xl w-full">
					Leader node address: {{ address }}
				</h1>
				<div class="mt-6 relative mb-16 flex-col md:flex-row flex w-full px-4">
					<div class="grid-cols-2 md:grid-cols-3 gap-11 grid w-full">
						<router-link
							to="/docker/apps"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path d="M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z" />
								<path d="M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z" />
							</svg>
							<h2 class="text-slate-100">
								Apps
							</h2>
						</router-link> <router-link
							to="/docker/nodes"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
								<path
									fill-rule="evenodd"
									d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<h2 class="text-slate-100">
								Machines
							</h2>
						</router-link> <router-link
							to="/deploy"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path
									fill-rule="evenodd"
									d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
									clip-rule="evenodd"
								/>
								<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
							</svg>
							<h2 class="text-slate-100">
								Deploy
							</h2>
						</router-link> <router-link
							to="/docker/tasks"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
							</svg>
							<h2 class="text-slate-100">
								Tasks
							</h2>
						</router-link> <router-link
							to="/docker/networks"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
							</svg>
							<h2 class="text-slate-100">
								Networks
							</h2>
						</router-link> <router-link
							to="/docker/volumes"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
							</svg>
							<h2 class="text-slate-100">
								Volumes

							</h2>
						</router-link> <router-link
							to="/docker/images"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
							</svg>
							<h2 class="text-slate-100">
								Images
							</h2>
						</router-link> <router-link
							to="/routes"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path
									fill-rule="evenodd"
									d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
									clip-rule="evenodd"
								/>
							</svg>
							<h2 class="text-slate-100">
								Routes
							</h2>
						</router-link> <router-link
							to="/settings"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
								<path
									fill-rule="evenodd"
									d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z"
									clip-rule="evenodd"
								/>
							</svg>
							<h2 class="text-slate-100">
								Settings
							</h2>
						</router-link> <router-link
							to="/auth"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path
									fill-rule="evenodd"
									d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
									clip-rule="evenodd"
								/>
							</svg>
							<h2 class="text-slate-100">
								Authentication
							</h2>
						</router-link><router-link
							to="/env"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path
									fill-rule="evenodd"
									d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z"
									clip-rule="evenodd"
								/>
							</svg>
							<h2 class="text-slate-100">
								Environment
							</h2>
						</router-link><router-link
							to="/monitor"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path d="M19.5 6h-15v9h15V6z" />
								<path
									fill-rule="evenodd"
									d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
									clip-rule="evenodd"
								/>
							</svg>
							<h2 class="text-slate-100">
								Monitor
							</h2>
						</router-link><router-link
							to="/terminal"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path
									fill-rule="evenodd"
									d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
									clip-rule="evenodd"
								/>
							</svg>
							<h2 class="text-slate-100">
								Terminal
							</h2>
						</router-link> <router-link
							to="/users"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
							</svg>
							<h2 class="text-slate-100">
								Users
							</h2>
						</router-link><router-link
							to="/profile"
							class="bg-slate-700 from-slate-800 aspect-video shadow-md rounded-lg items-center justify-center flex-col bg-gradient-to-tr flex cursor-pointer hover:opacity-80"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="text-white w-12 h-12"
							>
								<path
									fill-rule="evenodd"
									d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<h2 class="text-slate-100">
								Profile
							</h2>
						</router-link>
					</div>
					<div class="-mb-8 bg-slate-100 -bottom-5 absolute h-0.5 left-4 right-4">
					</div>
				</div> <textarea
					ref="output"
					readonly=""
					v-model="log"
					class="justify-start flex-col-reverse flex overflow-auto h-64 w-full p-4 rounded bg-slate-50 mb-4"
					style="font-family:monospace"
				/> <button
					class="rounded p-2 bg-slate-200"
					@click="update()"
				>
					Self Update
				</button><button
					class="rounded p-2 bg-slate-200 mt-2"
					@click="migrate()"
				>
					Migrate
				</button><button
					class="rounded p-2 bg-slate-200 mt-2"
					@click="updateNPM()"
				>
					Update Node Packages
				</button><button
					class="rounded p-2 bg-slate-200 mt-2"
					@click="updateUI()"
				>
					Update Admin UI
				</button><button
					class="rounded p-2 bg-slate-200 mt-2"
					@click="reboot()"
				>
					Restart system
				</button>
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
		inject: ['io'],
		props: ['renderer'],
		data: () => ({
			address: '',
			listenerProgress: null,
			listenerMessage: null,
			listenerInstallation: null,
			listenerMigration: null,
			listenerFinish: null,
			listenerError: null,
			listenerDisconnect: null,
			listenerConnect: null,
			log: ''
		}),
		async created() {
			try {
				await this.inspectLeader();
			} catch (e) {}
			console.log('Adding listeners');
			this.listenerProgress = line => this.terminal('progress', line);
			this.listenerMessage = line => this.terminal('message', line);
			this.listenerInstallation = line => this.terminal('installation', line);
			this.listenerMigration = line => this.terminal('migration', line);
			this.listenerFinish = line => this.terminal('finish', line);
			this.listenerError = line => this.terminal('error', line);
			this.listenerDisconnect = line => this.terminal('disconnect', line);
			this.listenerConnect = line => this.terminal('connect', line);
			this.io.service('exec')
				.on('progress', this.listenerProgress);
			this.io.service('exec')
				.on('message', this.listenerMessage);
			this.io.service('exec')
				.on('installation', this.listenerInstallation);
			this.io.service('exec')
				.on('migration', this.listenerMigration);
			this.io.service('exec')
				.on('finish', this.listenerFinish);
			this.io.service('exec')
				.on('error', this.listenerError);
			console.log('Listeners added');
			this.io.io.on('disconnect', this.listenerDisconnect);
			this.io.io.on('connect', this.listenerConnect);
		},
		beforeUnmount() {
			console.log('Removing listeners');
			this.io.service('exec')
				.off('progress', this.listenerProgress);
			this.io.service('exec')
				.off('message', this.listenerMessage);
			this.io.service('exec')
				.off('installation', this.listenerInstallation);
			this.io.service('exec')
				.off('migration', this.listenerMigration);
			this.io.service('exec')
				.off('finish', this.listenerFinish);
			this.io.service('exec')
				.off('error', this.listenerError);
			this.io.io.off('disconnect', this.listenerDisconnect);
			this.io.io.off('connect', this.listenerConnect);
			console.log('Listeners removed');
		},
		methods: {
			terminal(event, data) {
				console.log(event, data);
				if (event === 'disconnect') data = 'Disconnected from server';
				if (event === 'connect') data = 'Connected to server';
				if (typeof data === 'object') {
					this.log += '\n' + JSON.stringify(data);
				} else {
					this.log += '\n' + data;
				}
				setTimeout(() => {
					this.$refs.output.scrollTop = this.$refs.output.scrollHeight;
				}, 10);
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
			async update() {
				if (!confirm(`Are you sure you want to update jstune?`)) {
					return false;
				}
				await this.io.service('exec')
					.patch('update');
			},
			async test() {
				await this.io.service('exec')
					.patch('test');
			},
			async updateNPM() {
				if (!confirm(`Are you sure you want to update packages?`)) {
					return false;
				}
				await this.io.service('exec')
					.patch('update-npm');
				alert('jstune will automatically be restarted after update is completed');
			},
			async migrate() {
				if (!confirm(`Are you sure you want to migrate database?`)) {
					return false;
				}
				await this.io.service('exec')
					.patch('migrate');
				alert('Migration completed');
			},
			async updateUI() {
				if (!confirm(`Are you sure you want to update admin ui?`)) {
					return false;
				}
				await this.io.service('exec')
					.patch('update-ui');
				location.reload();
			},
			async reboot() {
				if (!confirm(`Are you sure you want to reboot?`)) {
					return false;
				}
				await this.io.service('exec')
					.patch('reboot');
				setTimeout(() => {
					location.reload();
				}, 3000);
			}
		}
	};

</script>
<style scoped></style>