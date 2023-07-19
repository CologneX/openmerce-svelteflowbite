<script lang="ts">
    import Banner from "$lib/components/main/Banner.svelte";
    import ProductCardCarousel from "$lib/components/main/ProductCardCarousel.svelte";
    import Prev from "$lib/icons/Prev.svelte";
    import Next from "$lib/icons/Next.svelte";
    import {screenWidthStore} from "$lib/utils/stores";
</script>
<svelte:head>
    <title>Main | OpenMerce</title>
</svelte:head>
<div>
    <Banner/>
    <div class="h-6"></div>
    <div class="relative group">
        <button
                class="z-10 absolute bg-primary-500 p-2 top-1/2 rounded-full transform transition-all duration-300 -translate-y-1/2 left-1 opacity-0 group-hover:opacity-100 group-hover:-left-5"
                on:click={() => {
					const swiper = document.getElementById("1")['swiper'];
					swiper.slidePrev();
				}}
        >
            <Prev/>
        </button>

        <button
                class="z-10 absolute bg-primary-500 p-2 top-1/2 rounded-full transform transition-all duration-300 -translate-y-1/2 right-1 opacity-0 group-hover:opacity-100 group-hover:-right-5"
                on:click={() => {
					const swiper = document.getElementById("1")['swiper'];
					swiper.slideNext();
				}}
        >
            <Next/>
        </button>

        <swiper-container
                slides-per-view={$screenWidthStore < 640
								? 2
								: $screenWidthStore < 768
								? 4
								: $screenWidthStore < 1024
								? 5
								: 6}
                slides-per-group={$screenWidthStore < 640
								? 2
								: $screenWidthStore < 768
								? 4
								: $screenWidthStore < 1024
								? 5
								: 6}
                space-between={10}
                id="1"
                class="px-0.5 py-1"
        >

            {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as item}
                <ProductCardCarousel product={item}/>
            {/each}
        </swiper-container>
    </div>
</div>