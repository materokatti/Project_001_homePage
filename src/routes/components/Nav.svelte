<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { quartInOut } from 'svelte/easing';
	import navList from '$lib/data/navList.json';
	import { list } from 'postcss';
	let isNavOn: boolean = false;
	const navToggle = () => {
		isNavOn = !isNavOn;
	};
	$: console.log('isNavOn', isNavOn);
</script>

<header class="fixed left-0 top-0 w-screen h-auto z-50 ">
	<div class="container min-h-full transition-all">
		<div class="flex items-center justify-end w-full height-full p-1">
			<div class="nav-list ">
				<div
					class="h-10 w-10 border border-gray-400 rounded-full relative flex items-center justify-center cursor-pointer transform scale-75 md:scale-100 m-1 md:m-7"
					on:click={navToggle}
				>
					<i class="fas fa-bars text-gray-400" />
					<div class="h-10 w-10 border border-gray-400 rounded-full absolute animate-ping" />
				</div>

				{#if isNavOn}
					<ul
						class="absolute bg-gray-900 w-screen h-screen left-0 top-0 flex flex-col text-gray-50 justify-center items-center z-10 overflow-x-hidden transition"
						in:fly={{ x: 1000, duration: 500, easing: quartInOut }}
						out:fly={{ duration: 500, x: 1000, easing: quartInOut }}
					>
						{#each navList as list}
							<li>
								<a on:click={navToggle} href={list.href} data-after={list.title}>
									{list.title}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</div>
</header>
