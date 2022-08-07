<script lang="ts">
	import FaRegLightbulb from 'svelte-icons/fa/FaRegLightbulb.svelte';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import SidebarIcon from './SidebarIcon.svelte';

	import { darkTheme } from '../../store.js';
</script>

<span
	on:click={() => {
		darkTheme.set(!$darkTheme);
	}}
>
	{#if $darkTheme}
		<SidebarIcon tooltip={'turn on the lights 💡'} component={FaRegLightbulb} />
	{:else}
		<SidebarIcon tooltip={'go dark 🌒'} component={FaMoon} />
	{/if}
</span>
