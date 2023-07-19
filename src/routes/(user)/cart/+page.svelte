<script lang="ts" xmlns="http://www.w3.org/1999/html">
    import PlusCircle from "$lib/icons/PlusCircle.svelte";
    import MinusCircle from "$lib/icons/MinusCircle.svelte";
    import Trash from "$lib/icons/Trash.svelte";
    import {screenWidthStore} from "$lib/utils/stores";
    import {Button, Card, Checkbox, FloatingLabelInput, Heading, Hr, P} from "flowbite-svelte";
</script>

<svelte:head>
    <title>Cart | OpenMerce</title>
</svelte:head>

<div class="flex flex-row justify-between space-x-12">
    <div class="w-full sm:basis-3/5 space-y-4 flex-grow">
        <Heading tag="h4">Cart</Heading>
        <div class="bg-white dark:bg-gray-800 sticky top-12 z-10 border-b-4 py-4">
            <Checkbox>Select all</Checkbox>
        </div>
        <div class="flex flex-col">
            {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as mantap}
                <div class="py-2 border-b ">
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
                                <span class="text-primary-500">
                                          <Trash/>
                                </span>
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
            {/each}
        </div>
    </div>
    <Card class="max-w-xs basis-2/5 hidden sm:grid grid-flow-row p-4 space-y-4 h-fit sticky top-24 text-current">
        <Heading tag="h6">Shopping Summary</Heading>
        <div class="grid grid-cols-2">
            <P class="text-slate-500 text-sm">Total Price</P>
            <P class="text-slate-500 text-sm text-end">Rp 0</P>
        </div>
        <Hr/>
        <Heading tag="h6">Grand Total</Heading>
        <Button class="font-bold text-lg h-12" fullSize ripple variant="filled">Checkout</Button>
    </Card>
</div>
<div class="sticky bottom-16 -mx-4 sm:hidden p-4 bg-white dark:bg-gray-800 grid grid-cols-2 gap-x-4">
    <div>
        <P class="text-xs">Total Harga</P>
        <P class="font-semibold">Rp. 33.098</P>
    </div>
    <Button class="w-full">Checkout</Button>
</div>
