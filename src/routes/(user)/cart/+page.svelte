<script lang="ts" xmlns="http://www.w3.org/1999/html">
    import PlusCircle from "$lib/icons/PlusCircle.svelte";
    import MinusCircle from "$lib/icons/MinusCircle.svelte";
    import Trash from "$lib/icons/Trash.svelte";
    import {screenWidthStore} from "$lib/utils/stores";
    import {Button, Card, Checkbox, Input} from "flowbite-svelte";
</script>

<svelte:head>
    <title>Cart | OpenMerce</title>
</svelte:head>

<div class="grid grid-cols-3 sm:grid-cols-6 space-x-8">
    <div class="col-span-4 space-y-4">
        <h4 class="text-current">Cart</h4>
        <div class="bg-white dark:bg-inherit sticky top-12 pt-4 z-10">
            <Checkbox>Select all</Checkbox>
            <div class="divider"></div>
        </div>
        <div class="flex flex-col">
            {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as mantap}
                <div class="pt-2">
                    <div class="flex flex-row gap-x-4 items-center">
                        <Checkbox></Checkbox>
                        <img src="/emptycart.png" alt="gambar" class="object-contain aspect-square h-full max-h-20">
                        <div class="truncate">
                            <p class="truncate text-sm md:text-base">{mantap}</p>
                            <p class="font-semibold text-sm md:text-base">Rp. 69</p>
                        </div>
                    </div>
                    <div class="flex">
                        <button class="text-xs md:text-sm flex-1 text-start">
                            Move to Wishlist
                        </button>
                        <div class="justify-end flex {$screenWidthStore > 1024 ? 'gap-x-5' : 'gap-x-2'}">
                            <button
                                    class="btn-icon btn-icon-sm {$screenWidthStore > 1024 ? 'w-8' : 'w-6'}"
                                    type="button"
                                    aria-label="Delete Product">
                                <Trash/>
                            </button>
                            <div class="divider"></div>
                            <div class="grid grid-cols-[auto_1fr_auto] w-fit">
                                <button
                                        class="btn btn-sm text-primary-500 p-0">
                                    <span><MinusCircle/></span>
                                </button>
                                <Input

                                        class="text-center w-16 border-none focus:border-2 border-primary-500 focus:ring-0"
                                        size="sm" value="0"
                                        on:keypress={(e) => {
											if (e.key.match(/[^0-9]/g)) {
												e.preventDefault();
											}
										}}
                                />
                                <button
                                        class="btn btn-sm text-primary-500 p-0"

                                >
                                    <span><PlusCircle/></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
            {/each}
        </div>
    </div>
    <Card class="col-span-2 hidden sm:grid grid-flow-row p-4 space-y-4 h-fit sticky top-24 text-current">
        <h5>Shopping summary</h5>
        <div class="grid grid-cols-2">
            <p class="text-slate-500 text-sm">Total Price</p>
            <p class="text-slate-500 text-sm text-end">Rp 0</p>
        </div>
        <div class="divider"></div>
        <h5>Grand Total</h5>
        <Button class="font-bold text-lg h-12" fullSize ripple variant="filled">Checkout</Button>
    </Card>
</div>
<Card class="w-full sticky bottom-0 block sm:hidden max-w-full">
    <Button class="w-full">Checkout</Button>
</Card>
