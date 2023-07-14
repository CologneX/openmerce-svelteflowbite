<script lang="ts">
    import StarMini from "$lib/icons/StarMini.svelte";
    import {goto} from "$app/navigation";
    import PlusSmall from "$lib/icons/PlusSmall.svelte";
    import {Button, Card} from "flowbite-svelte";
    import TrashSmall from "$lib/icons/TrashSmall.svelte";

    export let products;
</script>


<div class="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {#each products as product}
        <Card class="dark:bg-gray-700 cursor-pointer p-4" padding="none" on:click={() => goto(`/products/${product}`)}>
            <div>
                <img src="/emptycart.png" alt="pic" class="aspect-square object-contain"/>
                <div class="h-2"></div>
                <p class="text-sm md:text-base">   {product}</p>
                <p class=" text-sm md:text-base font-bold">Rp. 0</p>
                <div class="flex items-center">
                    <StarMini/>
                    <p class="text-neutral-500">&nbsp;5 | 69 Sold</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex gap-x-2 items-center">
                <Button size="xs" color="red" outline>
                    <TrashSmall/>
                </Button>
                <Button size="xs" class="w-full">
                    <PlusSmall/>
                    Cart
                </Button>
            </div>
        </Card>
    {/each}
</div>