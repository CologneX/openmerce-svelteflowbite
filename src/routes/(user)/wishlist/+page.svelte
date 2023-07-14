<script lang="ts">
    import ProductCardWishlist from "$lib/components/main/ProductCardWishlist.svelte";
    import Search from "$lib/icons/Search.svelte";
    import {Heading, Input, P, Select} from "flowbite-svelte";

    let products = [
        'Product 1',
        'Product 2',
        'Product 3',
        'Product 4',
        'Product 5',
        'Product 6',
        'Product 7',
        'Product 8',
    ];
    let sortOptions: Array<{ value: string; name: string }> = [
        {value: 'newest_added', name: 'Newest Added'},
        {value: 'last_added', name: 'Last Added'},
        {value: 'count_of_reviews', name: 'Review Count'},
        {value: 'highest_price', name: 'Highest Price'},
        {value: 'lowest_price', name: 'Lowest Price'},
        {value: 'sold', name: 'Sold Count'},
    ];
</script>

<svelte:head>
    <title>Wishlist | OpenMerce</title>
</svelte:head>


<div class="mb-4">
    <Heading tag="h4">Wishlist</Heading>
    <div class="h-2"></div>
        <Input placeholder="Search wishlist" class="w-full">
            <Search slot="left"/>
        </Input>

    <div class="h-2"></div>
    <div class="flex justify-between items-center">
        <div>
            <P><span class="font-semibold">10</span> Items</P>
        </div>
        <div class="flex items-center">
            <P class="font-bold text-sm w-full max-w-fit pr-4">Sort by</P>
            <Select items={sortOptions}/>
        </div>
    </div>
    <div class="h-8"></div>


    <ProductCardWishlist {products}/>
</div>