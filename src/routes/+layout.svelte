<script>
    import '../app.postcss';
    import Navbar from '$lib/components/navbar/Navbar.svelte';
    import {register} from 'swiper/element/bundle';
    import {screenWidthStore} from "$lib/utils/stores.ts";
    register();
</script>
<svelte:window bind:outerWidth={ $screenWidthStore}/>
<div class="relative">
    <Navbar/>
    <div class="h-6"></div>
    <main class="md:container mx-auto px-4">
        <slot/>
    </main>
</div>

