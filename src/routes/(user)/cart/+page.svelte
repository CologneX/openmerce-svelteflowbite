<script lang="ts" xmlns="http://www.w3.org/1999/html">
    import PlusCircle from "$lib/icons/PlusCircle.svelte";
    import MinusCircle from "$lib/icons/MinusCircle.svelte";
    import Trash from "$lib/icons/Trash.svelte";
    import {screenWidthStore} from "$lib/utils/stores";
    import {Button, Card, Checkbox, FloatingLabelInput, Heading, P} from "flowbite-svelte";
</script>

<svelte:head>
    <title>Cart | OpenMerce</title>
</svelte:head>

<div class="grid grid-cols-3 sm:grid-cols-6 space-x-8">
    <div class="col-span-4 space-y-4">
        <Heading tag="h4">Cart</Heading>
        <div class="bg-white dark:bg-gray-800 sticky top-12 pt-4 z-10">
            <Checkbox>Select all</Checkbox>
            <div class="divider"></div>
        </div>
        <div class="flex flex-col">
            {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as mantap}
                <div class="pt-2">
                    <div class="flex flex-row gap-x-4 items-center">
                        <Checkbox></Checkbox>
                        <img src="/emptycart.png" alt="gambar" class="object-contain aspect-square h-full max-h-20">
                        <div>
                            <P class="line-clamp-2 text-sm md:text-base">{mantap}</P>
                            <P class="font-semibold text-sm md:text-base">Rp. 69</P>
                        </div>
                    </div>
                    <div class="flex">
                        <button class="flex-1 text-start">
                            <P class="text-xs md:text-sm">
                                Move to Wishlist
                            </P>
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
                                <FloatingLabelInput
                                        value="0"
                                        type="text"
                                        size="sm"
                                        classInput="w-12 text-center px-0"
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
        <Heading tag="h5">Shopping summary</Heading>
        <div class="grid grid-cols-2">
            <P class="text-slate-500 text-sm">Total Price</P>
            <P class="text-slate-500 text-sm text-end">Rp 0</P>
        </div>
        <div class="divider"></div>
        <Heading tag="h5">Grand Total</Heading>
        <Button class="font-bold text-lg h-12" fullSize ripple variant="filled">Checkout</Button>
    </Card>
</div>
<!--<Card class="w-screen sticky bottom-0 block sm:hidden">-->
<!--    <Button class="w-full">Checkout</Button>-->
<!--</Card>-->
<div class="sticky bottom-0 sm:hidden -mx-4 p-4 bg-white dark:bg-gray-800 shadow-md grid grid-cols-2 gap-x-4">
    <div>
        <P class="text-xs">Total Harga</P>
        <P class="font-semibold">Rp. 33.098</P>
    </div>
    <Button class="w-full">Checkout</Button>
</div>
