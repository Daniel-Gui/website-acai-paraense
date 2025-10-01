<script>
	import Slider from '$lib/components/sliders/slider.svelte';

	const partnersImages = [
		{
			alt: 'Logoipsum',
			imagePath: '/images/partners/logoipsum-391.png'
		},
		{
			alt: 'Logoipsum',
			imagePath: '/images/partners/logoipsum-406.png'
		},
		{
			alt: 'Logoipsum',
			imagePath: '/images/partners/logoipsum-391.png'
		},
		{
			alt: 'Logoipsum',
			imagePath: '/images/partners/logoipsum-406.png'
		},
		{
			alt: 'Logoipsum',
			imagePath: '/images/partners/logoipsum-391.png'
		},
		{
			alt: 'Logoipsum',
			imagePath: '/images/partners/logoipsum-391.png'
		},
		{
			alt: 'Logoipsum',
			imagePath: '/images/partners/logoipsum-406.png'
		},
		{
			alt: 'Logoipsum',
			imagePath: '/images/partners/logoipsum-391.png'
		}
	];
</script>

<div class="container space-y-10">
	<Slider
		items={partnersImages}
		quantity={partnersImages.length}
		reverse={false}
		width={200}
		height={50}
	/>
</div>
