<script>
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	import FaSlackHash from 'svelte-icons/fa/FaSlackHash.svelte';
	export let name = 'name';
</script>

<div class="top-navigation">
	<div
		class="top-navigation-icon top-navigation-icon"
		on:click={() => {
			history.back();
		}}
	>
		<FaArrowLeft />
	</div>
	<div class="top-navigation-title">
		<div class="top-navigation-hashtag">
			<FaSlackHash />
		</div>
		{name}
	</div>
	<div />
</div>
