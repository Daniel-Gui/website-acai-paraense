<script lang="ts">
	interface Props {
		reverse?: boolean;
		quantity?: number;
		items?:
			| {
					alt: string;
					imagePath: string;
			  }[]
			| null;
		width?: number;
		height?: number;
	}

	let { reverse = false, quantity = 10, items = null, width = 200, height = 50 }: Props = $props();
</script>

<div
	{reverse}
	class="slider"
	style="--width: {width}px; --height: {height}px; --quantity: {quantity};"
>
	<div class="list">
		{#if items !== null}
			{#each items as item, index}
				<div class="item" style="--position: {index + 1};">
					<img src={item.imagePath} alt={item.alt} />
				</div>
			{/each}
		{:else}
			{#each Array(quantity) as item, index}
				<div class="item" style="--position: {index + 1};">
					<img src="/images/partners/logoipsum-406.png" alt="" />
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.slider {
		width: 100%;
		/* border: 1px solid red; */
		height: var(--height);
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
	}
	.slider .list {
		display: flex;
		width: 100%;
		min-width: calc(var(--width) * var(--quantity));
		position: relative;
	}
	.slider .list .item {
		display: flex;
		align-items: center;
		width: var(--width);
		height: var(--height);
		position: absolute;
		left: 100%;
		animation: autoRun 10s linear infinite;
		animation-delay: calc((10s / var(--quantity)) * (var(--position) * -1)) !important;
		transition: filter 0.5s;
	}
	.slider .list .item img {
		width: 100%;
	}

	@keyframes autoRun {
		from {
			left: 100%;
		}
		to {
			left: calc(var(--width) * -1);
		}
	}
	.slider:hover .item {
		animation-play-state: paused !important;
		filter: grayscale(1);
	}
	.slider:hover .item:hover {
		filter: grayscale(0);
	}
	.slider[reverse='true'] .item {
		animation: reversePlay 10s linear infinite;
	}
	@keyframes reversePlay {
		from {
			left: calc(var(--width) * -1);
		}
		to {
			left: 100%;
		}
	}
</style>
