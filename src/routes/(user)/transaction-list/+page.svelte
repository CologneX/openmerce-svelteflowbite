<script lang="ts">
    import Search from "$lib/icons/Search.svelte";
    import {screenWidthStore} from "$lib/utils/stores";
    import CalendarMini from "$lib/icons/CalendarMini.svelte";
    import ClockMini from "$lib/icons/ClockMini.svelte";
    import Next from "$lib/icons/Next.svelte";
    import CancelMini from "$lib/icons/CancelMini.svelte";
    import {Badge, Button, Input} from "flowbite-svelte";

    let products = [
        {name: 'Product 1', status: 'pending'},
        {name: 'Product 2', status: 'success'},
        {name: 'Product 3', status: 'cancelled'},
        {name: 'Product 4', status: 'pending'},
        {name: 'Product 5', status: 'success'},
        {name: 'Product 6', status: 'cancelled'},
        {name: 'Product 7', status: 'pending'},
        {name: 'Product 8', status: 'success'},
        {name: 'Product 9', status: 'cancelled'},
        {name: 'Product 10', status: 'pending'},
    ];
    let selectedFilter: string | null = null;
</script>

<svelte:head>
    <title>Transactions | OpenMerce</title>
</svelte:head>

<div class="space-y-8">
    <div class="space-y-2">
        <h4>Transaction List</h4>
        <div class="flex flex-row gap-x-2">
            <Input icon={Search} placeholder="Search transactions" class="w-full flex-1"/>
            <Button variant="outline" ripple>
                <CalendarMini/>
                <div class="hidden xs:block">&nbsp; Filter by date</div>
            </Button>
        </div>
        <div class="flex flex-row overflow-x-auto no-scrollbar gap-x-2 py-1">
            <p class="text-sm md:text-base font-semibold my-auto">Filter</p>
            <Button variant="subtle" size={$screenWidthStore < 400? 'xs': 'sm'}>
                <CancelMini/>
            </Button>
            <Button outline size={$screenWidthStore < 400? 'xs': 'sm'} class="aspect-[10/1]">
                1 June 2021 - 30 June 2021
            </Button>

            <Button outline={selectedFilter !== 'all'} size={$screenWidthStore < 400? 'xs': 'sm'}
                    on:click={()=>selectedFilter = 'all'}
            >
                All
            </Button>
            <Button outline={selectedFilter !== 'pending'}
                    size={$screenWidthStore < 400? 'xs': 'sm'} ripple
                    on:click={()=>selectedFilter = 'pending'}
            >
                Pending
            </Button>
            <Button outline={selectedFilter !== 'success'}
                    size={$screenWidthStore < 400? 'xs': 'sm'} ripple
                    on:click={()=>selectedFilter = 'success'}
            >
                Success
            </Button>
            <Button outline={selectedFilter !== 'cancelled'}
                    size={$screenWidthStore < 400? 'xs': 'sm'} ripple
                    on:click={()=>selectedFilter = 'cancelled'}
            >
                Cancelled
            </Button>
        </div>
        <Button class="w-full grid grid-cols-2" outline>
            <div class="flex justify-start">
                <ClockMini/>
                <span class="text-xs md:text-sm">&nbsp; Pending Payment</span>
            </div>
            <div class="flex justify-end">
                <Next/>
            </div>
        </Button>
    </div>
    <div class="flex flex-col space-y-4">
        {#each products as mantap}
            <div class="shadow-md rounded-md p-4">
                <p class="truncate flex justify-between sm:justify-start text-xs md:text-sm pb-2">
                    <span class="font-bold pr-4">16 Oct 2022</span>

                    <Badge size={$screenWidthStore < 400? 'xs': 'sm'} radius="sm"
                           color={mantap.status === 'pending'?'yellow': mantap.status==='cancelled'?'red':'blue'}>
                        {mantap.status}
                    </Badge>
                </p>
                <div class="flex flex-row gap-x-4">
                    <img src="/emptycart.png" alt="gambar" class="object-contain aspect-square h-full max-h-20">

                    <div class="truncate grid grid-flow-col w-full">
                        <div class="truncate">
                            <p class="truncate text-sm md:text-base">
                                {mantap.name} awdojahdiagduadadaweawarer earsef
                            </p>
                            <p class="text-xs md:text-sm">Rp. 69</p>
                        </div>
                        <div class="justify-self-end sm:pr-10 pl-2 hidden sm:block">
                            <span class=" text-xs md:text-sm text-neutral-500">Total Price</span>
                            <p class="font-bold text-sm md:text-base">Rp. 0</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-1 ">
                    <div class="sm:pr-10 pl-2 sm:hidden">
                        <p class="text-neutral-500">Total Price</p>
                        <p class="font-bold text-sm md:text-base">Rp. 0</p>
                    </div>

                    <div class="justify-end flex items-center {$screenWidthStore > 1024 ? 'gap-x-5' : 'gap-x-2'}">
                        {#if mantap.status === 'pending'}
                            <Button size={$screenWidthStore < 400? 'xs': 'sm'} class="none h-fit" outline>
                                Pay
                            </Button>
                        {:else if mantap.status === 'success'}
                            <Button size={$screenWidthStore < 400? 'xs': 'sm'} class="none h-fit">
                                Review
                            </Button>
                        {/if}
                        <Button size={$screenWidthStore < 400? 'xs': 'sm'}  class="border-none h-fit" outline>
                            Detail
                        </Button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>