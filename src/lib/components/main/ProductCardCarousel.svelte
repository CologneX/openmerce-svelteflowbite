<script lang="ts">
    import {goto} from "$app/navigation";
    import {P} from "flowbite-svelte";

    export let product;
</script>

<swiper-slide class="rounded-md shadow-md aspect-[4/2] w-full h-full cursor-pointer dark:bg-gray-700"
              on:click={()=>goto(`/products/${product}`)}>
    <img src="/emptycart.png" alt="pic"
         class="aspect-square object-contain">
    <div class="p-3">
        <P class="line-clamp-2">
            {product}
        </P>
        <P class="font-semibold">
            Rp. 360.000
        </P>
    </div>

</swiper-slide>