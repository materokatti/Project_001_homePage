<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';
	import aboutImg from '$lib/data/aboutImg';
	let isDescOn: Boolean = false;
	$: selectedInfo = {};
	const descToggle = (img) => {
		selectedInfo = img;
		isDescOn = !isDescOn;
		console.log(img);
	};
</script>

<section>
	<div class="relative flex flex-col min-h-screen w-full items-center justify-center">
		<div class="service-top">
			<h1>Who Am I?</h1>
		</div>
		<div class="grid grid-cols-2 gap-5 mt-4">
			{#each aboutImg as img, index}
				<img
					class="transform-gpu p-5 w-24 shadow-xl hover:scale-125 transition-all"
					src={img.src}
					alt="about me icon"
					on:click={() => {
						descToggle(img);
					}}
				/>
			{/each}
			{#if isDescOn}
				<div
					class="flex flex-col justify-center items-center fixed top-0 left-0 h-screen w-full bg-gray-900 z-50 text-gray-50 "
					in:fly={{ duration: 500, x: 500, easing: quartInOut }}
					out:fly={{ duration: 500, x: 500, easing: quartInOut }}
					on:click={() => {
						isDescOn = !isDescOn;
					}}
				>
					안녕하세요
					<img src={selectedInfo.src} alt="about me description" />
					<title>{selectedInfo.title}</title>
					<p>{selectedInfo.desc}</p>
				</div>
			{/if}
		</div>
	</div>
</section>
