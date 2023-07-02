<script lang="ts">
    import Prev from "$lib/icons/Prev.svelte";
    import Next from "$lib/icons/Next.svelte";
</script>

<div class="relative group">
    <button
            class="z-10 absolute bg-primary-500 p-2 top-1/2 rounded-full transform transition-all duration-300 -translate-y-1/2 left-1 opacity-0 group-hover:opacity-100 group-hover:-left-5"
            on:click={() => {
					const swiper = document.querySelector('.swiper-container')['swiper'];
					swiper.slidePrev();
				}}
    >
        <Prev/>
    </button>

    <button
            class="z-10 absolute bg-primary-500 p-2 top-1/2 rounded-full transform transition-all duration-300 -translate-y-1/2 right-1  opacity-0 group-hover:opacity-100 group-hover:-right-5"
            on:click={() => {
					const swiper = document.querySelector('.swiper-container')['swiper'];
					swiper.slideNext();
				}}
    >
        <Next/>
    </button>
    <swiper-container
            slides-per-view={1}
            pagination={true}
            loop={true}
            space-between={10}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            class="rounded-md relative swiper-container"
    >
        <swiper-slide>
            <img src="/asu.webp" alt="asu" class="object-contain w-full h-full aspect-[4/1] "/>
        </swiper-slide>
        <swiper-slide>
            <img src="/coding%20picture.jpg" alt="asu" class="object-contain w-full h-full aspect-[4/1] rounded-md"/>
        </swiper-slide>
        <swiper-slide>
            <img src="/asu.webp" alt="asu" class="object-contain w-full h-full aspect-[4/1]"/>
        </swiper-slide>
    </swiper-container>
</div>

