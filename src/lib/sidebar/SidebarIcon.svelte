<script lang="ts">
	import { goto } from '$app/navigation';

	export let tooltip = 'tooltip 💡';
	export let component: any;
	export let route: string | undefined = undefined;
</script>

<div
	class="sidebar-icon group"
	on:click={() => {
		if (route) {
			goto(route);
		}
	}}
>
	<div class="sidebar-icon-component">
		<svelte:component this={component} />
	</div>

	<span class="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
</div>

<style></style>
