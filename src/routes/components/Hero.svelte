<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';
</script>

<section class="relative z-10" id="hero">
	<div class="flex mx-0 my-auto pl-5 py-5 min-h-screen w-full items-center justify-start">
		<div
			in:fly={{ duration: 2000, x: 200, easing: quartInOut }}
			out:fly={{ duration: 2000, x: 200, easing: quartInOut }}
		>
			<h1 in:fly={{ duration: 2000, x: 200, easing: quartInOut }}>Hello</h1>
			<h1>My Name is</h1>
			<h1>Doyun</h1>
			<a
				href="/"
				type="button"
				class="border-2 border-green-300 px-4 mt-10 hover:bg-green-300 hover:text-gray-50"
				>Portfolio</a
			>
		</div>
	</div>
</section>
