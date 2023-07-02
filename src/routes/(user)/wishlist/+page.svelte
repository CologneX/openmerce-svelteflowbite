<script lang="ts">
    import ProductCardWishlist from "$lib/components/main/ProductCardWishlist.svelte";
    import Select from "svelte-select";
    import Search from "$lib/icons/Search.svelte";
    import {TextInput} from "@svelteuidev/core";

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
    let sortOptions: Array<{ value: string; label: string }> = [
        {value: 'newest_added', label: 'Newest Added'},
        {value: 'last_added', label: 'Last Added'},
        {value: 'count_of_reviews', label: 'Review Count'},
        {value: 'highest_price', label: 'Highest Price'},
        {value: 'lowest_price', label: 'Lowest Price'},
        {value: 'sold', label: 'Sold Count'},
    ];
</script>

<svelte:head>
    <title>Wishlist | OpenMerce</title>
</svelte:head>


<div class="space-y-8">
    <div class="space-y-2">
        <div class="title">Wishlist</div>
        <TextInput icon={Search} placeholder="Search wishlist" class="w-full"/>
        <div class="flex justify-between items-center">
            <div>
                <p><span class="font-semibold">10</span> Items</p>
            </div>
            <div class="flex items-center">
                <div class="font-bold text-sm pr-2">Sort by</div>
                <div class="w-max max-w-[10rem]">
                    <Select items={sortOptions} value="newest_added" clearable={false} searchable={false} showChevron={true} listAutoWidth={false} class="bg-current text-current"/>
                </div>
            </div>
        </div>
    </div>

    <ProductCardWishlist {products}/>
</div>