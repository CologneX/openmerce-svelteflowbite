<script lang="ts">
    import '../app.postcss';
    import Navbar from '$lib/components/navbar/Navbar.svelte';
    import {register} from 'swiper/element/bundle';
    import {screenWidthStore} from "$lib/utils/stores.ts";
    import {page} from "$app/stores";
    import MobileBottomNavigation from "$lib/components/mobile/MobileBottomNavigation.svelte";

    let varIsMobileBottomNavigationVisible: boolean;
    $: varIsMobileBottomNavigationVisible = $page.url.pathname === '/' || $page.url.pathname === '/wishlist' || $page.url.pathname === '/cart' || $page.url.pathname === '/profile' || $page.url.pathname === '/search' || $page.url.pathname === '/category' || $page.url.pathname === '/transaction-list';
    register();
</script>
<svelte:window bind:innerWidth={$screenWidthStore}/>
<main class="flex flex-col min-h-screen">
    <Navbar/>
    <div class="mx-auto px-5 flex-grow max-w-7xl w-full h-full pt-4">
        <slot/>
    </div>
    {#if $screenWidthStore < 640 && varIsMobileBottomNavigationVisible}
        <MobileBottomNavigation/>
    {/if}
</main>





