<script lang="ts">
	import FullScreenMenu from './full-screen-menu.svelte';
	import { mobileMenuState } from './mobile-menu-state.svelte';

	interface Navigation {
		name: string;
		link: string;
	}
	const navigation: Navigation[] = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Sobre',
			link: '/sobre'
		},
		{
			name: 'Blog',
			link: '/blog'
		},
		{
			name: 'Produtos',
			link: '/produtos'
		}
	];
</script>

<nav class="relative bg-gray-400">
	<div class="container flex items-center justify-between py-5">
		<div>
			<a href="/"> logomarca </a>
		</div>
		<div class="hidden lg:block">
			<ul class="flex items-center gap-3">
				{#each navigation as { name, link }}
					<li>
						<a href={link}>{name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="lg:hidden">
			<button onclick={mobileMenuState.toggleMenu}> MobileMenu </button>
		</div>
	</div>
	{#if mobileMenuState.isMenuOpen}
		<FullScreenMenu {navigation} />
	{/if}
</nav>
