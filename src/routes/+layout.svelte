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
<!--<div class="relative">-->
<!--    <Navbar/>-->
<!--    <div class="h-6"></div>-->
<!--    <main class="md:container mx-auto px-4">-->
<!--        <slot/>-->
<!--    </main>-->
<!--    {#if varIsMobileBottomNavigationVisible}-->
<!--        <MobileBottomNavigation/>-->
<!--    {/if}-->
<!--</div>-->
<!--<div class="relative min-h-screen">-->
<!--    <Navbar/>-->
<!--    <main class="md:container mx-auto px-4 pb-16 ">-->
<!--        <slot/>-->
<!--    </main>-->
<!--    {#if varIsMobileBottomNavigationVisible}-->
<!--        <MobileBottomNavigation/>-->
<!--    {/if}-->
<!--</div>-->


<Navbar/>
<main class="md:container mx-auto px-4 h-full">
    <slot/>
</main>
{#if $screenWidthStore < 400 && varIsMobileBottomNavigationVisible}
    <MobileBottomNavigation/>
{/if}



