<script lang="ts">
    import {screenWidthStore} from "$lib/utils/stores.ts";
    import {goto} from "$app/navigation";
    import Logo from "$lib/icons/Logo.svelte";
    import {Button, Search} from "flowbite-svelte";
    import ShoppingCart from "$lib/icons/ShoppingCart.svelte";
    import Settings from "$lib/icons/Settings.svelte";
    import SettingsPopover from "$lib/components/navbar/SettingsPopover.svelte";
    import CartPopover from "$lib/components/navbar/CartPopover.svelte";
    import MobileOptionDrawer from "$lib/components/mobile/MobileOptionDrawer.svelte";
    import {page} from "$app/stores";
    import Back from "$lib/icons/Back.svelte";

    let varOptionMobileDrawer: boolean = true;
</script>

<nav class="bg-white border-b dark:bg-gray-800 flex justify-between gap-x-4 md:gap-x-14 sticky top-0 p-2 z-50">
    {#if $screenWidthStore > 400}
        <button on:click={()=>goto('/')}>
            <Logo/>
        </button>
    {/if}
    {#if $screenWidthStore < 400 && $page.url.pathname !== '/'}
        <button on:click={()=>history.back() || goto('/')}>
            <Back/>
        </button>
    {/if}

    <div class="justify-self-center max-w-4xl w-full">
        <Search size="md" placeholder="Search in OpenMerce" class="truncate"></Search>
    </div>

    <div class="flex gap-x-2">
        <Button class="!p-2 border-none" color="alternative" id="CartButtonTrigger" on:click={()=>goto('/cart')}>
            <ShoppingCart/>
        </Button>
        {#if $screenWidthStore > 400}
            <div class="divider"></div>
            <Button on:click={()=>goto('/register')} size="sm">Register</Button>
            <Button outline on:click={()=>goto('/login')} size="sm">Login</Button>
        {/if}
        <div class="divider"></div>
        <Button class="!p-2 border-none" color="alternative" id="SettingsButtonTrigger"
                on:click={()=>varOptionMobileDrawer=!varOptionMobileDrawer}
        >
            <Settings/>
        </Button>
    </div>
    <SettingsPopover/>
    <CartPopover/>
</nav>
{#if $screenWidthStore < 400}
    <MobileOptionDrawer bind:varOptionMobileDrawer/>
{/if}