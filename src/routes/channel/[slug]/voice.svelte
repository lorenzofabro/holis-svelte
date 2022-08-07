<script context="module" lang="ts">
	import { page } from '$app/stores';
	import { getSeed, getRandomName } from '../../../utils';
	import TopNavigation from '$lib/header/TopNavigation.svelte';
	import FaMicrophone from 'svelte-icons/fa/FaMicrophone.svelte';
	import FaVolumeUp from 'svelte-icons/fa/FaVolumeUp.svelte';
	import FaPhoneSlash from 'svelte-icons/fa/FaPhoneSlash.svelte';
	export const prerender = true;
</script>

<section class="content-container">
	<TopNavigation name={$page.params.slug} />
	<div class="channel-block">
		<div class="bottom-bar-voice">
			<div class="sidebar-icon mr-4 ml-0">
				<div class="sidebar-icon-component">
					<FaMicrophone />
				</div>
			</div>
			<div class="sidebar-icon mr-4 ml-0">
				<div class="sidebar-icon-component mt-1">
					<FaVolumeUp />
				</div>
			</div>
			<div class="sidebar-icon m-0">
				<div class="sidebar-icon-component mt-1">
					<FaPhoneSlash />
				</div>
			</div>
		</div>
	</div>
</section>
