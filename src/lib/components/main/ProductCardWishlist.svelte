<script lang="ts">
    import StarMini from "$lib/icons/StarMini.svelte";
    import Trash from "$lib/icons/Trash.svelte";
    import {ActionIcon, Button} from "@svelteuidev/core";
    import {goto} from "$app/navigation";
    import PlusSmall from "$lib/icons/PlusSmall.svelte";

    export let products;
</script>


<div class="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {#each products as product}
        <div
                class="rounded-md shadow-md"
        >
            <div on:click={() => goto(`/products/${product}`)} class="cursor-pointer">
                <img src="/emptycart.png" alt="pic" class="aspect-square object-contain"/>

                <div class="p-3">
                    <p class="text-md md:text-base">   {product}</p>
                    <p class=" text-md md:text-base font-bold">Rp. 0</p>
                    <div class="flex items-center">
                        <StarMini/>
                        <p class="text-neutral-500">&nbsp;5 | 69 Sold</p>
                    </div>
                </div>
            </div>
            <div class="flex gap-x-2 p-3 items-center">
                <ActionIcon color="red" size="lg" variant="light" class="basis-1/4">
                    <Trash/>
                </ActionIcon>
                <Button ripple variant="outline" class="basis-3/4 text-xs md:text-sm p-0">
                    <PlusSmall/>
                    Cart
                </Button>
            </div>
        </div>
    {/each}
</div>