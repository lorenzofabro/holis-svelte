<script context="module" lang="ts">
	import { page } from '$app/stores';
	import { getSeed, getRandomName } from '../../utils';
	import FaSlackHash from 'svelte-icons/fa/FaSlackHash.svelte';
	import { goto } from '$app/navigation';

	export const prerender = true;
</script>

<section class="content-container">
	<div class="channel-block">
		<div>
			<h1 class="channel-block-title">
				welcome to <div class="channel-block-hashtag"><FaSlackHash /></div>
				{$page.params.slug}
			</h1>
		</div>

		<div class="card-row">
			<div
				class="card"
				on:click={() => {
					goto(`/channel/${$page.params.slug}/text`);
				}}
			>
				<h5 class="card-title">text channel</h5>
				<p class="card-content">👉 chat with everyone overhere (don't forget to send emojis!)</p>
				<div class="avatar-row">
					{#each { length: 3 } as _}
						<div class="group">
							<div>
								<img
									src={`https://avatars.dicebear.com/api/open-peeps/${getSeed()}.svg`}
									alt=""
									class="avatar"
								/>
							</div>
							<span class="avatar-tooltip group-hover:scale-100">{getRandomName()}</span>
						</div>
					{/each}
				</div>
			</div>
			<div
				class="card"
				on:click={() => {
					goto(`/channel/${$page.params.slug}/voice`);
				}}
			>
				<h5 class="card-title">voice channel</h5>
				<p class="card-content">👉 hello? are you there? turn on your mic!</p>
				<div class="avatar-row">
					{#each { length: 5 } as _}
						<div class="group">
							<div class="avatar-wrapper">
								<img
									src={`https://avatars.dicebear.com/api/open-peeps/${getSeed()}.svg`}
									alt=""
									class="avatar"
								/>
							</div>
							<span class="avatar-tooltip group-hover:scale-100">{getRandomName()}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
