<script>
	import projectsData from '$lib/data/projectsData';
	import { slide } from 'svelte/transition';
	import { quartInOut } from 'svelte/easing';
	let projectInfoOn = 0;
</script>

<section id="projects">
	<div class="flex-col py-10 max-w-6xl container">
		<h1 class="mb-3 title">Projects</h1>
		<div class="flexBoxCenter min-w-full flex-col">
			{#each projectsData as project, index}
				<div
					class=" w-4/5 relative my-3 mx-auto"
					on:click={() => {
						projectInfoOn = projectInfoOn === project.id ? 0 : project.id;
						console.log(project.projects, projectInfoOn);
					}}
				>
					<div class="flex  items-center justify-center bg-gray-100 p-3">
						<img class="absolute top-0 left-0 w-10" src={project.src} alt={project.name} />
						<p>{project.name}</p>
					</div>
					{#if project.id === projectInfoOn}
						<div
							class=" w-full absolute z-10 bg-gray-100 shadow-xl pb-3"
							in:slide={{ duration: 300, easing: quartInOut }}
							out:slide={{ duration: 300, easing: quartInOut }}
						>
							{#each project.projects as eachProject, index}
								<a href={eachProject.link} class="block text-center text-base font-light py-1"
									>{eachProject.title}</a
								>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
