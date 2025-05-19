<template>
	<teleport
		to="body"
		v-if="open && mini && !child && !sidebar"
	>
		<div
			class="outside"
			@click="open = !open"
		/>
	</teleport> <button
		v-if="!sidebar"
		v-bind="attributes"
		@click="open = !open"
		class="flex items-center justify-center"
		:class="{
			open,
			hidden: child || !mini || (mini && !small)
		}"
		:style="{
			width: buttonWidth,
			height: buttonHeight,
		}"
	>
		<div
			v-if="!open"
			class="flex m-2"
		>
			<slot>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6"
				>
					<path
						fill-rule="evenodd"
						d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</slot>
		</div>
		<div
			v-else=""
			class="flex m-2"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6"
			>
				<path
					fill-rule="evenodd"
					d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	</button>
	<ul
		v-bind="attributes"
		:class="{
			shadow: !mini && child,
			'float-top': float === 'top' && !(child || !mini || (mini && !small)),
			'float-right': float === 'right' && !(child || !mini || (mini && !small)),
			'float-bottom': float === 'bottom' && !(child || !mini || (mini && !small)),
			'float-left': float === 'left' && !(child || !mini || (mini && !small)),
			mini,
			open: open || (side && !small) || (sidebar && !child),
			root: !child,
			flex: !mini,
			'align-right': ['right', 'center-right', 'right-strong'].includes(align),
			right: ['right', 'right-strong'].includes(align),
			left: !['right', 'right-strong', 'center-right', 'center'].includes(align)
		}"
	>
		<li
			v-for="item in items"
			class="whitespace-nowrap place-content-between items-center relative inline-flex"
			:class="{
				'justify-center': ['center-right', 'center'].includes(align),
				'justify-end': ['right', 'right-strong'].includes(align),
				'open': item.open,
				'active': item.route === $route.path,
				'group-header': !item.route && !item.children
			}"
			:divider="divider"
		>
			<div
				v-if="!child && !mini"
				class="top-border"
			/> <svg
				v-if="align === 'right-strong'"
				@click="item.open = !item.open"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="cursor-pointer ml-2 w-4 h-4 top strong"
				:class="{
					flat:  !item.open
				}"
			>
				<path
					fill-rule="evenodd"
					d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
					clip-rule="evenodd"
				/>
			</svg><svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="cursor-pointer ml-2 w-4 h-4 sub right"
				@click="item.open = !item.open"
				v-if="['right', 'right-strong', 'center-right'].includes(align)"
			>
				<path
					fill-rule="evenodd"
					d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
					clip-rule="evenodd"
				/>
			</svg> <img
				v-if="item.icon && align !== 'right-strong'"
				@click="item.route ? $router.push(item.route) : ''"
				:src="item.icon"
				class="object-center object-contain ml-2.5 h-6 w-6"
				:class="{
					'cursor-pointer': item.route
				}"
				:style="{
					'margin-left': mini && indent && level && !['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : '',
					'margin-right': mini && indent && level && ['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : ''
				}"
			/> <router-link
				v-if="item.route && !item.external"
				:to="item.route"
				class="grow whitespace-nowrap"
				:class="{
					'text-right': ['center-right', 'right', 'right-strong'].includes(align) && (!mini || align === 'right-strong')
				}"
				:style="{
					'margin-left': mini && indent && level && !['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : '',
					'margin-right': mini && indent && level && ['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : ''
				}"
			>
				{{ item.label }}
			</router-link> <a
				v-else-if="item.route"
				:href="item.route"
				target="_blank"
				class="grow whitespace-nowrap"
				:class="{
					'text-right': ['center-right', 'right', 'right-strong'].includes(align) && (!mini || align === 'right-strong')
				}"
				:style="{
					'margin-left': mini && indent && level && !['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : '',
					'margin-right': mini && indent && level && ['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : ''
				}"
			>
				{{ item.label }}
			</a> <span
				@click="item.open = !item.open"
				v-else=""
				class="grow whitespace-nowrap"
				:class="{
					'text-right': ['center-right', 'right', 'right-strong'].includes(align) && (!mini || align === 'right-strong'),
					'cursor-pointer': item.children?.length
				}"
				:style="{
					'margin-left': mini && indent && level && !['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : '',
					'margin-right': mini && indent && level && ['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : ''
				}"
			>
				{{ item.label }}
			</span> <img
				v-if="item.icon && align === 'right-strong'"
				:src="item.icon"
				@click="item.route ? $router.push(item.route) : ''"
				class="object-center object-contain mr-2.5 h-6 w-6"
				:class="{
					'cursor-pointer': item.route
				}"
				:style="{
					'margin-left': mini && indent && level && !['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : '',
					'margin-right': mini && indent && level && ['right-strong'].includes(align) ? 'calc(' + level + ' * ' + indent + ')' : ''
				}"
			/><svg
				v-if="align !== 'right-strong'"
				@click="item.open = !item.open"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="cursor-pointer mr-2 w-4 h-4 top"
				:class="{
					flat: !item.open
				}"
			>
				<path
					fill-rule="evenodd"
					d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
					clip-rule="evenodd"
				/>
			</svg><svg
				v-if="!['right', 'right-strong', 'center-right'].includes(align)"
				@click="item.open = !item.open"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="cursor-pointer mr-2 w-4 h-4 sub left"
				:class="{
					flipped: item.open
				}"
			>
				<path
					fill-rule="evenodd"
					d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
					clip-rule="evenodd"
				/>
			</svg>
			<Navbar
				v-if="item.children?.length"
				:level="level + 1"
				:indent="indent"
				:menu="item.children"
				:child="true"
				:align="align"
				:minified="mini"
				:color="color"
				:colorHover="colorHover"
				:colorActive="colorActive"
				:fontWeight="fontWeight"
				:fontWeightHover="fontWeightHover"
				:fontWeightActive="fontWeightActive"
				:backgroundColor="backgroundColor"
				:backgroundColorHover="backgroundColorHover"
				:backgroundColorActive="backgroundColorActive"
				:backgroundColorSubmenu="backgroundColorSubmenu"
				:topLeftRadius="topLeftRadius"
				:topRightRadius="topRightRadius"
				:bottomLeftRadius="bottomLeftRadius"
				:bottomRightRadius="bottomRightRadius"
				:paddingX="paddingX"
				:paddingY="paddingY"
				:dividerWidth="dividerWidth"
				:dividerHeight="dividerHeight"
				:dividerBackgroundColor="dividerBackgroundColor"
				:topBorderColor="topBorderColor"
				:topBorderColorActive="topBorderColorActive"
				:topBorderColorHover="topBorderColorHover"
				:topBorderHeight="topBorderHeight"
				:topBorderWidth="topBorderWidth"
				:topBorderWidthActive="topBorderWidthActive"
				:topBorderWidthHover="topBorderWidthHover"
				:bottomBorderColor="bottomBorderColor"
				:bottomBorderColorActive="bottomBorderColorActive"
				:bottomBorderColorHover="bottomBorderColorHover"
				:bottomBorderHeight="bottomBorderHeight"
				:bottomBorderWidth="bottomBorderWidth"
				:bottomBorderWidthActive="bottomBorderWidthActive"
				:bottomBorderWidthHover="bottomBorderWidthHover"
				:leftBorderColor="leftBorderColor"
				:leftBorderColorActive="leftBorderColorActive"
				:leftBorderColorHover="leftBorderColorHover"
				:leftBorderHeight="leftBorderHeight"
				:leftBorderWidth="leftBorderWidth"
				:leftBorderHeightActive="leftBorderHeightActive"
				:leftBorderHeightHover="leftBorderHeightHover"
				:rightBorderColor="rightBorderColor"
				:rightBorderColorActive="rightBorderColorActive"
				:rightBorderColorHover="rightBorderColorHover"
				:rightBorderHeight="rightBorderHeight"
				:rightBorderWidth="rightBorderWidth"
				:rightBorderHeightActive="rightBorderHeightActive"
				:rightBorderHeightHover="rightBorderHeightHover"
				:groupWeight="groupWeight"
				:groupColor="groupColor"
				:groupBackgroundColor="groupBackgroundColor"
				:groupBackgroundColorSubmenu="groupBackgroundColorSubmenu"
				:groupSize="groupSize"
				:groupPaddingTop="groupPaddingTop"
				:groupPaddingBottom="groupPaddingBottom"
				class="grow"
			/>
			<div
				v-if="mini"
				class="left-border"
			/>
			<div
				v-if="mini"
				class="right-border"
			/>
			<div
				v-if="!child && !mini"
				class="bottom-border"
			/>
		</li>
	</ul>
</template>
<script>
	export default {
		name: 'Navbar',
		props: {
			menu: {
				type: Array
			},
			child: {
				type: Boolean,
				hidden: true
			},
			minified: {
				type: Boolean,
				hidden: true
			},
			align: {
				type: String,
				default: 'left',
				options: [{
					label: 'Left',
					value: 'left'
				}, {
					label: 'Center',
					value: 'center'
				}, {
					label: 'Center Right',
					value: 'center-right'
				}, {
					label: 'Right',
					value: 'right'
				}, {
					label: 'Right Strong',
					value: 'right-strong'
				}]
			},
			level: {
				type: Number,
				default: 0,
				hidden: true
			},
			indent: {
				type: String,
				default: '15px',
				unit: 'px',
				controller: 'SLIDER'
			},
			groupWeight: {
				type: Number,
				default: 500,
				controller: 'SLIDER'
			},
			groupColor: {
				type: String,
				default: '#333',
				controller: 'COLOR'
			},
			groupBackgroundColor: {
				type: String,
				default: '#E2E8F0',
				controller: 'COLOR'
			},
			groupBackgroundColorSubmenu: {
				type: String,
				default: '#CBD5E1',
				controller: 'COLOR'
			},
			groupSize: {
				type: String,
				default: '',
				unit: 'px',
				controller: 'SLIDER'
			},
			groupPaddingTop: {
				type: String,
				default: '10px',
				unit: 'px',
				controller: 'SLIDER'
			},
			groupPaddingBottom: {
				type: String,
				default: '10px',
				unit: 'px',
				controller: 'SLIDER'
			},
			fontWeight: {
				type: Number,
				default: 300,
				controller: 'SLIDER'
			},
			fontWeightHover: {
				type: Number,
				default: 300,
				controller: 'SLIDER'
			},
			fontWeightActive: {
				type: Number,
				default: 500,
				controller: 'SLIDER'
			},
			breakpoint: {
				type: Number,
				default: 768,
				controller: 'SLIDER'
			},
			backgroundColor: {
				type: String,
				default: '#E2E8F0',
				controller: 'COLOR'
			},
			backgroundColorHover: {
				type: String,
				default: '#C0D0E0',
				controller: 'COLOR'
			},
			backgroundColorActive: {
				type: String,
				default: '#E9E9F9',
				controller: 'COLOR'
			},
			backgroundColorSubmenu: {
				type: String,
				default: '#CBD5E1',
				controller: 'COLOR'
			},
			color: {
				type: String,
				default: '#000',
				controller: 'COLOR'
			},
			colorHover: {
				type: String,
				default: '#000',
				controller: 'COLOR'
			},
			colorActive: {
				type: String,
				default: '#000',
				controller: 'COLOR'
			},
			topLeftRadius: {
				type: String,
				default: '4px',
				unit: 'px',
				controller: 'SLIDER'
			},
			topRightRadius: {
				type: String,
				default: '4px',
				unit: 'px',
				controller: 'SLIDER'
			},
			bottomLeftRadius: {
				type: String,
				default: '4px',
				unit: 'px',
				controller: 'SLIDER'
			},
			bottomRightRadius: {
				type: String,
				default: '4px',
				unit: 'px',
				controller: 'SLIDER'
			},
			topBorderWidth: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			topBorderWidthHover: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			topBorderWidthActive: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			topBorderHeight: {
				type: String,
				default: '3px',
				unit: '%',
				controller: 'SLIDER'
			},
			topBorderColor: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			topBorderColorHover: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			topBorderColorActive: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			bottomBorderWidth: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			bottomBorderWidthActive: {
				type: String,
				default: '60%',
				unit: '%',
				controller: 'SLIDER'
			},
			bottomBorderWidthHover: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			bottomBorderHeight: {
				type: String,
				default: '3px',
				unit: 'px',
				controller: 'SLIDER'
			},
			bottomBorderColor: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			bottomBorderColorHover: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			bottomBorderColorActive: {
				type: String,
				default: '#555',
				controller: 'COLOR'
			},
			leftBorderHeight: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			leftBorderHeightHover: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			leftBorderHeightActive: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			leftBorderWidth: {
				type: String,
				default: '3px',
				unit: '%',
				controller: 'SLIDER'
			},
			leftBorderColor: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			leftBorderColorHover: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			leftBorderColorActive: {
				type: String,
				default: '#777',
				controller: 'COLOR'
			},
			rightBorderHeight: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			rightBorderHeightActive: {
				type: String,
				default: '60%',
				unit: '%',
				controller: 'SLIDER'
			},
			rightBorderHeightHover: {
				type: String,
				default: '100%',
				unit: '%',
				controller: 'SLIDER'
			},
			rightBorderWidth: {
				type: String,
				default: '3px',
				unit: 'px',
				controller: 'SLIDER'
			},
			rightBorderColor: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			rightBorderColorHover: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			rightBorderColorActive: {
				type: String,
				default: 'transparent',
				controller: 'COLOR'
			},
			paddingX: {
				type: String,
				default: '10px',
				unit: 'px',
				controller: 'SLIDER'
			},
			paddingY: {
				type: String,
				default: '0.5rem',
				unit: 'rem',
				controller: 'SLIDER'
			},
			divider: {
				type: String,
				default: ''
			},
			dividerWidth: {
				type: String,
				default: '0px',
				unit: 'px',
				controller: 'SLIDER'
			},
			dividerHeight: {
				type: String,
				default: '0px',
				unit: 'px',
				controller: 'SLIDER'
			},
			dividerBackgroundColor: {
				type: String,
				default: '#E2E8F0',
				controller: 'COLOR'
			},
			minimize: {
				type: Boolean,
				default: false
			},
			side: {
				type: Boolean,
				default: false
			},
			sidebar: {
				type: Boolean,
				default: false
			},
			float: {
				type: String,
				default: '',
				options: [{
					label: 'Top',
					value: 'top'
				}, {
					label: 'Right',
					value: 'right'
				}, {
					label: 'Bottom',
					value: 'bottom'
				}, {
					label: 'Left',
					value: 'left'
				}]
			},
			buttonWidth: {
				type: String,
				default: '40px',
				unit: 'px',
				controller: 'SLIDER'
			},
			buttonHeight: {
				type: String,
				default: '40px',
				unit: 'px',
				controller: 'SLIDER'
			}
		},
		data: () => ({
			open: false,
			items: [],
			screenWidth: 0,
			mini: false,
			small: false,
			resizeListener: null
		}),
		computed: {
			attributes() {
				const attributes = JSON.parse(JSON.stringify(this.$attrs));
				delete attributes['vx-slotted']; /* TODO - Fix in editor source code */
				/* TODO - Fix in editor source code */
				return attributes;
			},
			leftBorderHeightComputed() {
				return 'calc(' + this.leftBorderHeight + ' - (' + this.dividerHeight + ' / 2))';
			},
			leftBorderHeightActiveComputed() {
				return 'calc(' + this.leftBorderHeightActive + ' - (' + this.dividerHeight + ' / 2))';
			},
			leftBorderHeightHoverComputed() {
				return 'calc(' + this.leftBorderHeightHover + ' - (' + this.dividerHeight + ' / 2))';
			},
			rightBorderHeightComputed() {
				return 'calc(' + this.rightBorderHeight + ' - (' + this.dividerHeight + ' / 2))';
			},
			rightBorderHeightActiveComputed() {
				return 'calc(' + this.rightBorderHeightActive + ' - (' + this.dividerHeight + ' / 2))';
			},
			rightBorderHeightHoverComputed() {
				return 'calc(' + this.rightBorderHeightHover + ' - (' + this.dividerHeight + ' / 2))';
			},
			bottomBorderWidthComputed() {
				return 'calc(' + this.bottomBorderWidth + ' - (' + this.dividerWidth + ' / 2))';
			},
			bottomBorderWidthActiveComputed() {
				return 'calc(' + this.bottomBorderWidthActive + ' - (' + this.dividerWidth + ' / 2))';
			},
			bottomBorderWidthHoverComputed() {
				return 'calc(' + this.bottomBorderWidthHover + ' - (' + this.dividerWidth + ' / 2))';
			},
			topBorderWidthComputed() {
				return 'calc(' + this.topBorderWidth + ' - (' + this.dividerWidth + ' / 2))';
			},
			topBorderWidthActiveComputed() {
				return 'calc(' + this.topBorderWidthActive + ' - (' + this.dividerWidth + ' / 2))';
			},
			topBorderWidthHoverComputed() {
				return 'calc(' + this.topBorderWidthHover + ' - (' + this.dividerWidth + ' / 2))';
			},
			borderLeftComputed() {
				return 'calc(50% - (' + this.dividerWidth + ' / 2))';
			},
			borderTopComputed() {
				return 'calc(50% - (' + this.dividerHeight + ' / 2))';
			},
			dividerWidthMinus() {
				return '-' + this.dividerWidth;
			},
			dividerHeightMinus() {
				return '-' + this.dividerHeight;
			}
		},
		created() {
			this.setItems();
			this.mini = this.minified;
			this.small = this.minified;
			if (!this.child) {
				this.isMini();
				this.resizeListener = window.addEventListener('resize', () => this.isMini());
			}
		},
		watch: {
			minified(val) {
				this.mini = val;
				this.small = val;
			}
		},
		beforeUnmount() {
			if (this.resizeListener) {
				window.removeEventListener('resize', this.resizeListener);
			}
		},
		methods: {
			isMini() {
				this.mini = this.minimize || this.sidebar || this.side || window.innerWidth < this.breakpoint;
				this.small = this.minimize || this.sidebar || window.innerWidth < this.breakpoint;
			},
			setItems() {
				let menu = this.menu ? JSON.parse(JSON.stringify(this.menu)) : null;
				this.items = (menu || [{
						label: 'Home',
						route: '/'
					}, {
						label: 'Vue Play',
						route: 'https://vueplay.com',
						external: true
					}, {
						label: 'More',
						children: [{
							label: 'More 1',
							route: '/more-1'
						}, {
							label: 'More 2',
							route: '/more-2',
							children: [{
								label: 'More',
								route: '/more',
								children: [{
									label: 'Even more 1',
									route: '/even-more-1'
								}, {
									label: 'Even more 2',
									route: '/even-more-2'
								}, {
									label: 'Even more 3',
									route: '/even-more-3'
								}]
							}]
						}, {
							label: 'More 3',
							route: '/more-3'
						}]
					}, {
						label: 'Contact',
						route: '/contact'
					}])
					.map(item => {
						if (typeof item.open !== 'boolean') {
							item.open = false;
						}
						return item;
					});
			}
		}
	};

</script>
<style scoped>
	.outside {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0px;
		bottom: 0px;
		z-index: 100;
	}

	ul:not(.mini) li {
		min-width: max-content;
	}

	button {
		position: relative;
		z-index: 101;
	}

	.root.mini {
		position: relative;
		z-index: 102;
	}

	a,
	span {
		padding-left: v-bind('paddingX');
		padding-right: v-bind('paddingX');
		padding-top: v-bind('paddingY');
		padding-bottom: v-bind('paddingY');
	}

	.root:not(.left):not(.right):not(.mini)>li:hover:not(:last-child)>ul {
		margin-left: v-bind('dividerWidthMinus');
	}

	.root.right:not(.mini)>li:hover:not(:last-child)>ul {
		margin-right: v-bind('dividerWidth');
	}

	.top-border {
		position: absolute;
		top: 0;
		left: v-bind('borderLeftComputed');
		transform: translateX(-50%);
		width: v-bind('topBorderWidthComputed');
		height: v-bind('topBorderHeight');
		background-color: v-bind('topBorderColor');
	}

	li:last-child>.top-border {
		left: 50%;
		width: v-bind('topBorderWidth');
	}

	.root>li:hover>.top-border {
		width: v-bind('topBorderWidthHoverComputed');
		background-color: v-bind('topBorderColorHover');
	}

	.root>li:last-child:hover>.top-border {
		width: v-bind('topBorderWidthHover');
	}

	.root>li.active>.top-border {
		width: v-bind('topBorderWidthActiveComputed');
		background-color: v-bind('topBorderColorActive');
	}

	.root>li:last-child.active>.top-border {
		width: v-bind('topBorderWidthActive');
	}

	.bottom-border {
		position: absolute;
		bottom: 0;
		left: v-bind('borderLeftComputed');
		transform: translateX(-50%);
		width: v-bind('bottomBorderWidthComputed');
		height: v-bind('bottomBorderHeight');
		background-color: v-bind('bottomBorderColor');
	}

	li:last-child>.bottom-border {
		left: 50%;
		width: v-bind('bottomBorderWidth');
	}

	.root>li:hover>.bottom-border {
		width: v-bind('bottomBorderWidthHoverComputed');
		background-color: v-bind('bottomBorderColorHover');
	}

	.root>li:hover:last-child>.bottom-border {
		width: v-bind('bottomBorderWidthHover');
	}

	.root>li.active>.bottom-border {
		width: v-bind('bottomBorderWidthActiveComputed');
		background-color: v-bind('bottomBorderColorActive');
	}

	.root>li:last-child.active>.bottom-border {
		width: v-bind('bottomBorderWidthActive');
	}

	.left-border {
		position: absolute;
		left: 0;
		top: v-bind('borderTopComputed');
		transform: translateY(-50%);
		height: v-bind('leftBorderHeightComputed');
		width: v-bind('leftBorderWidth');
		background-color: v-bind('leftBorderColor');
	}

	li:last-child>.left-border {
		top: 50%;
		height: v-bind('leftBorderHeight');
	}

	ul>li:hover>.left-border {
		height: v-bind('leftBorderHeightHoverComputed');
		background-color: v-bind('leftBorderColorHover');
	}

	ul>li:hover:last-child>.left-border {
		height: v-bind('leftBorderHeightHover');
	}

	ul>li.active>.left-border {
		height: v-bind('leftBorderHeightActiveComputed');
		background-color: v-bind('leftBorderColorActive');
		z-index: 1;
	}

	ul>li:last-child.active>.left-border {
		height: v-bind('leftBorderHeightActive');
	}

	.right-border {
		position: absolute;
		right: 0;
		top: v-bind('borderTopComputed');
		transform: translateY(-50%);
		height: v-bind('rightBorderHeightComputed');
		width: v-bind('rightBorderWidth');
		background-color: v-bind('rightBorderColor');
	}

	li:last-child>.right-border {
		top: 50%;
		height: v-bind('rightBorderHeight');
	}

	ul>li:hover>.right-border {
		height: v-bind('rightBorderHeightHoverComputed');
		background-color: v-bind('rightBorderColorHover');
	}

	ul>li:hover:last-child>.right-border {
		height: v-bind('rightBorderHeightHover');
	}

	ul>li.active>.right-border {
		height: v-bind('rightBorderHeightActiveComputed');
		background-color: v-bind('rightBorderColorActive');
		z-index: 1;
	}

	ul>li:last-child.active>.right-border {
		height: v-bind('rightBorderHeightActive');
	}

	.root:not(.mini)>li:not(:last-child)::after {
		display: flex;
		justify-content: center;
		align-items: center;
		content: attr(divider);
		background-color: v-bind('dividerBackgroundColor');
		width: v-bind('dividerWidth');
		height: 100%;
		z-index: 1;
	}

	button,
	.root:not(.mini)>li:first-child {
		border-top-left-radius: v-bind('topLeftRadius');
		border-bottom-left-radius: v-bind('bottomLeftRadius');
	}

	button,
	.root:not(.mini)>li:last-child {
		border-top-right-radius: v-bind('topRightRadius');
		border-bottom-right-radius: v-bind('bottomRightRadius');
	}

	ul:not(.root):not(.mini)>li:first-child {
		border-top-left-radius: v-bind('topLeftRadius');
		border-top-right-radius: v-bind('topRightRadius');
	}

	ul:not(.root):not(.mini)>li:last-child {
		border-bottom-left-radius: v-bind('bottomLeftRadius');
		border-bottom-right-radius: v-bind('bottomRightRadius');
	}

	button,
	li {
		color: v-bind('color');
		background-color: v-bind('backgroundColor');
		font-weight: v-bind('fontWeight');
	}

	ul li ul li {
		background-color: v-bind('backgroundColorSubmenu');
	}

	button:hover,
	li:hover {
		color: v-bind('colorHover');
		background-color: v-bind('backgroundColorHover');
		font-weight: v-bind('fontWeightHover');
	}

	ul.mini li:hover:has(li:hover) {
		color: v-bind('color');
		background-color: v-bind('backgroundColor');
	}

	ul.mini li ul li:hover:has(li:hover) {
		background-color: v-bind('backgroundColorSubmenu');
	}

	button.active,
	li.active {
		color: v-bind('colorActive');
		background-color: v-bind('backgroundColorActive');
		font-weight: v-bind('fontWeightActive');
	}

	ul:not(.root)>li>svg.top {
		display: none;
	}

	ul.root>li>svg.sub,
	li:not(:has(ul)) svg {
		display: none;
	}

	ul>li>ul {
		display: none !important;
	}

	ul>li:hover>ul {
		display: flex !important;
		z-index: 2;
	}

	ul:not(.root):not(.mini) {
		position: absolute;
		top: 100%;
		flex-direction: column;
		min-width: 100%;
	}

	ul.root:not(.mini) ul ul {
		top: 0px;
		left: 100%;
	}

	ul.root.align-right:not(.mini) ul ul {
		left: auto;
		right: 100%;
	}

	.mini li {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.mini li.open:has(ul) {
		border-color: #d5dce8ff;
	}

	ul.mini {
		flex-direction: column;
		width: 100%;
		display: flex;
	}

	ul.mini>li:not(.open):hover>ul {
		display: none !important;
	}

	ul.mini>li.open>ul {
		display: flex !important;
	}

	ul.mini.root {
		border-bottom-width: 0px;
	}

	.mini svg.flat {
		transform: rotate(-90deg);
	}

	.mini svg.flat.strong {
		transform: rotate(90deg);
	}

	.mini svg.flipped {
		transform: rotate(90deg);
	}

	.mini svg.hidden {
		display: flex;
	}

	.mini.root:not(.open) {
		display: none;
	}

	.mini .sub {
		display: none;
	}

	.mini .top:has(ul) {
		display: flex !important;
	}

	ul.mini:not(.root)>li:has(ul)>svg.top {
		display: flex !important;
	}

	.root.float-right {
		position: fixed;
		top: 0px;
		right: 0px;
		left: v-bind('buttonWidth');
		bottom: 0px;
		width: auto;
		overflow: auto;
	}

	.root.float-left {
		position: fixed;
		top: 0px;
		right: v-bind('buttonWidth');
		left: 0px;
		bottom: 0px;
		width: auto;
		overflow: auto;
	}

	.root.float-top {
		position: fixed;
		top: v-bind('buttonHeight');
		right: 0px;
		left: 0px;
		bottom: 0px;
		width: auto;
		overflow: auto;
	}

	.root.float-bottom {
		position: fixed;
		top: 0px;
		right: 0px;
		left: 0px;
		bottom: v-bind('buttonHeight');
		width: auto;
		overflow: auto;
	}

	li.group-header {
		font-size: v-bind('groupSize');
		font-weight: v-bind('groupWeight');
		color: v-bind('groupColor');
		background-color: v-bind('groupBackgroundColor');
		padding-top: v-bind('groupPaddingTop');
		padding-bottom: v-bind('groupPaddingBottom');
	}

	li.group-header:hover {
		background-color: v-bind('groupBackgroundColor');
	}

	ul li ul li.group-header,
	ul li ul li.group-header:hover {
		background-color: v-bind('groupBackgroundColorSubmenu');
	}

</style>