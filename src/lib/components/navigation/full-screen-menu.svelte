<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { mobileMenuState } from './mobile-menu-state.svelte';
	interface Props {
		navigation: {
			name: string;
			link: string;
		}[];
	}
	let { navigation = [] }: Props = $props();
</script>

{#if mobileMenuState.isMenuOpen}
	<div
		in:fly={{ y: 100 }}
		out:fade={{ duration: 300 }}
		class="absolute top-0 right-0 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-gray-400 transition-all duration-300 ease-in-out lg:hidden"
	>
		<ul class="flex flex-col items-center justify-center gap-5">
			{#each navigation as { name, link }}
				<li class="text-xl">
					<a href={link}>{name}</a>
				</li>
			{/each}
		</ul>
		<button onclick={mobileMenuState.toggleMenu} class="rounded-full bg-white p-5">
			CloseMenu
		</button>
	</div>
{/if}
