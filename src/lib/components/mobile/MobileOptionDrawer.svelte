<script lang="ts">
    import {sineIn} from "svelte/easing";
    import {A, Accordion, AccordionItem, Avatar, Button, CloseButton, Drawer, Heading, P} from "flowbite-svelte";
    import Settings from "$lib/icons/Settings.svelte";
    import {afterNavigate, goto} from "$app/navigation";
    import Newspaper from "$lib/icons/Newspaper.svelte";
    import Heart from "$lib/icons/Heart.svelte";
    import Star from "$lib/icons/Star.svelte";
    import FireMini from "$lib/icons/FireMini.svelte";

    export let varOptionMobileDrawer: boolean;
    let transitionParamsBottom = {
        y: 320,
        duration: 500,
        easing: sineIn
    };
    afterNavigate(() => {
        varOptionMobileDrawer = true
    })
</script>

<Drawer placement='bottom' width='w-full h-full' transitionType="fly" transitionParams={transitionParamsBottom}
        bind:hidden={varOptionMobileDrawer} id='mobileOptionDrawer' class="p-0 no-scrollbar">
    <div class='flex items-center sticky top-0 bg-white dark:bg-gray-800 border-b p-4 mb-2 z-10'>
        <Heading tag="h6"
                 id="drawer-label"
                 class="inline-flex items-center gap-x-2">
            <Settings/>
            Settings
        </Heading>
        <CloseButton on:click={() => (varOptionMobileDrawer = true)} class='dark:text-white p-0'/>
    </div>
    <div class="px-4 space-y-4">
        <div class="grid grid-cols-2 space-x-3">
            <Button size="sm" class="font-bold" on:click={()=>{
            goto("/login")
        }}>Login
            </Button>
            <Button size="sm" class="font-bold" outline on:click={()=>{
            goto("/register")
        }}>Register
            </Button>
            <!--        <Button size="xs">Register</Button>-->
        </div>
        <!--{#if $isLoggedInStore}-->
        <div class="flex items-center">
            <Avatar class="mr-4"/>
            <FireMini/>
            &nbsp;
            <P class="font-bold">Kyrell Siauw</P>
            <button class="border-none ml-auto" on:click={()=>goto('/profile')}>
                <Settings/>
            </button>
        </div>

        <!--{/if}-->
        <div class="divider-horizontal"></div>
        <!--    <Heading tag="h6">My Activity</Heading>-->
        <Accordion flush multiple>
            <AccordionItem open>
                <span slot="header" class="text-lg font-bold">My Activity</span>
                <!--            <Button color="alternative" class="w-full border-none text-start">Transaction List</Button>-->
                <div class="flex flex-col space-y-4">
                    <A on:click={()=>goto('/transaction-list')}>
                        <Newspaper/>
                        &nbsp;
                        <P>Transaction List</P></A>
                    <A on:click={()=>goto('/wishlist')}>
                        <Heart/>
                        &nbsp;
                        <P>Wishlist</P></A>
                    <A on:click={()=>goto('/reviews')}>
                        <Star/>
                        &nbsp;
                        <P>Reviews</P></A>
                </div>
            </AccordionItem>
            <AccordionItem open>
                <span slot="header" class="text-lg font-bold">Others</span>
                <div class="flex flex-col space-y-4">
                    <A on:click={()=>goto('/categories')}>
                        <Star/>
                        &nbsp;
                        <P>All Categories</P></A>
                    <A on:click={()=>goto('/reviews')}>
                        <Star/>
                        &nbsp;
                        <P>Contact OpenMerce Help</P></A>
                </div>
            </AccordionItem>
        </Accordion>
    </div>

</Drawer>