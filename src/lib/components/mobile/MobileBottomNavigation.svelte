<script>
    import {BottomNav, BottomNavItem} from "flowbite-svelte";
    import Home from "$lib/icons/Home.svelte";
    import HeartMini from "$lib/icons/HeartMini.svelte";
    import Newspaper from "$lib/icons/Newspaper.svelte";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import ShoppingCart from "$lib/icons/ShoppingCart.svelte";
</script>

<BottomNav position="absolute" classInner="grid-cols-4">
    <BottomNavItem btnName="Home" active={$page.url.pathname=== '/'} on:click={()=>goto('/')}>
        <Home/>
    </BottomNavItem>
    <BottomNavItem btnName="Wishlist" active={$page.url.pathname=== '/wishlist'} on:click={()=>goto('/wishlist')}>
        <HeartMini/>
    </BottomNavItem>
    <BottomNavItem btnName="Transactions" active={$page.url.pathname=== '/transaction-list'}
                   on:click={()=>goto('/transaction-list')}>
        <Newspaper/>
    </BottomNavItem>
    <BottomNavItem btnName="Cart" active={$page.url.pathname=== '/cart'}
                   on:click={()=>goto('/cart')}>
        <ShoppingCart/>
    </BottomNavItem>
</BottomNav>