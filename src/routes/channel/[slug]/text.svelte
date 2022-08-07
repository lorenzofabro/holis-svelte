<script context="module" lang="ts">
	import { page } from '$app/stores';
	import { getSeed, getRandomName } from '../../../utils';
	import TopNavigation from '$lib/header/TopNavigation.svelte';
	import FaRegArrowAltCircleRight from 'svelte-icons/fa/FaRegArrowAltCircleRight.svelte';
	export const prerender = true;

	let inputField: HTMLInputElement;
	let inputValue = '';

	const sendMessage = () => {
		inputField.value = '';
	};
</script>

<section class="content-container">
	<TopNavigation name={$page.params.slug} />
	<div class="channel-block">
		{#each { length: 3 } as _}
			<div class="post">
				<div class="mr-4 w-24">
					<img
						src={`https://avatars.dicebear.com/api/open-peeps/${getSeed()}.svg`}
						alt=""
						class="avatar"
					/>
				</div>
				<div class="post-content">
					<p class="post-owner">
						{getRandomName()}
						<small class="timestamp">just now</small>
					</p>
					<p class="post-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
				</div>
			</div>
		{/each}

		<div class="bottom-bar">
			<input
				class="bottom-bar-input"
				placeholder="your message, over here 👋"
				bind:this={inputField}
				on:keydown={(event) => {
					if (event.key !== 'Enter') return;
					sendMessage();
				}}
				bind:value={inputValue}
			/>
			<div
				class="bottom-bar-send"
				on:click={() => {
					sendMessage();
				}}
			>
				<FaRegArrowAltCircleRight />
			</div>
		</div>
	</div>
</section>
