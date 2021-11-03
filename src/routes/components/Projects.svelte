<script>
	import projectsData from '$lib/data/projectsData';
	import { each } from 'svelte/internal';
	let projectInfoOn = 0;
</script>

<section id="projects">
	<div class="flex-col py-10 max-w-6xl container">
		<h1 class="mb-10">Projects</h1>
		<div class="flexBoxCenter min-w-full flex-col">
			{#each projectsData as project, index}
				<div
					class=" w-4/5 my-3 mx-auto"
					on:click={() => {
						projectInfoOn = projectInfoOn === project.id ? 0 : project.id;
						console.log(project.projects, projectInfoOn);
					}}
				>
					<div class="flex relative items-center justify-center bg-gray-100 p-3">
						<img class="absolute top-0 left-0 w-10" src={project.src} alt={project.name} />
						<p>{project.name}</p>
					</div>
					{#if project.id === projectInfoOn}
						<div class="block absolute z-10 bg-gray-100">
							<h1>hi there</h1>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
