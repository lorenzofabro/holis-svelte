<script lang="ts">
	import '../app.css';
	import Sidebar from '../lib/sidebar/Sidebar.svelte';
	import { darkTheme } from '../store.js';
	$: dark = $darkTheme;
</script>

<svelte:head>
	<title>holis</title>
</svelte:head>

<main class:dark>
	<div class="flex">
		<Sidebar />
		<slot />
	</div>
</main>

<footer />
