<script>
	import Slider from '$lib/components/sliders/slider.svelte';

	const partnersImages = [
		{
			name: 'Logoipsum',
			image: '/images/partners/logoipsum-391.png'
		},
		{
			name: 'Logoipsum',
			image: '/images/partners/logoipsum-406.png'
		},
		{
			name: 'Logoipsum',
			image: '/images/partners/logoipsum-391.png'
		},
		{
			name: 'Logoipsum',
			image: '/images/partners/logoipsum-406.png'
		},
		{
			name: 'Logoipsum',
			image: '/images/partners/logoipsum-391.png'
		},
		{
			name: 'Logoipsum',
			image: '/images/partners/logoipsum-391.png'
		},
		{
			name: 'Logoipsum',
			image: '/images/partners/logoipsum-406.png'
		},
		{
			name: 'Logoipsum',
			image: '/images/partners/logoipsum-391.png'
		}
	];
</script>

<div class="container space-y-10">
	<Slider items={partnersImages} quantity={partnersImages.length} width={300} height={60} />

	<Slider
		items={partnersImages}
		quantity={partnersImages.length}
		reverse={true}
		width={200}
		height={50}
	/>
</div>
