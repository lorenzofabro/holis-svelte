<script lang="ts">
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import FaRegGrinWink from 'svelte-icons/fa/FaRegGrinWink.svelte';
	import FaRegGrinHearts from 'svelte-icons/fa/FaRegGrinHearts.svelte';
	import FaRegGrinSquintTears from 'svelte-icons/fa/FaRegGrinSquintTears.svelte';
	import FaCog from 'svelte-icons/fa/FaCog.svelte';
	import SidebarIcon from './SidebarIcon.svelte';
	import ThemeIcon from './ThemeIcon.svelte';
</script>

<div class="sidebar">
	<SidebarIcon tooltip={'home 🏡'} component={FaHome} route="/" />
	<hr class="sidebar-hr" />
	<SidebarIcon tooltip={'hearts 😍'} component={FaRegGrinHearts} route="/channel/hearts" />
	<SidebarIcon tooltip={'winky 😉'} component={FaRegGrinWink} route="/channel/winky" />
	<SidebarIcon tooltip={'laugh 🤣'} component={FaRegGrinSquintTears} route="/channel/laugh" />
	<hr class="sidebar-hr" />
	<ThemeIcon />
	<SidebarIcon tooltip={'settings ⚙️'} component={FaCog} route="/settings" />
</div>

<style></style>
