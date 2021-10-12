<script context="module">
	// export async function load({ page, fetch, session, context }) {
	// 	const response = await fetch('$lib/images/beach.jpeg');
	// 	const result = await response.json();
	// 	const backgroundUrl = result;
	// 	return {
	// 		props: { backgroundUrl }
	// 	};
	// }
</script>

<script>
	// export let backgroundUrl;
</script>

<section class="hero relative z-10 bg-hero-back-to-t">
	<div class="flex mx-0 my-auto pl-5 py-5 min-h-screen w-full items-center justify-start">
		<div>
			<h1 class="animate-text_reveal_1 relative w-max text-transparent">
				Hello
				<span class="absolute top-0 left-0 h-full w-0 bg-green-300 animate-text_reaveal_box_1" />
			</h1>
			<h1 class="animate-text_reveal_2 relative w-max text-transparent">
				My Name is<span
					class="absolute top-0 left-0 h-full w-0 bg-green-300 animate-text_reaveal_box_2"
				/>
			</h1>
			<h1 class="animate-text_reveal_name relative w-max text-transparent">
				Doyun <span
					class="absolute top-0 left-0 h-full w-0 bg-green-300 animate-text_reveal_box_3"
				/>
			</h1>
			<a
				href="/"
				type="button"
				class="border-2 border-green-300 text-gray-50 px-4 mt-10 hover:bg-green-300 ">Portfolio</a
			>
		</div>
	</div>
</section>
