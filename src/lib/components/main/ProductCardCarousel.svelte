<script lang="ts">
    import {goto} from "$app/navigation";
    export let product;
</script>

<swiper-slide class="rounded-md shadow-md aspect-[4/2] w-full h-full cursor-pointer"
              on:click={()=>goto(`/products/${product}`)}>
    <img src="/emptycart.png" alt="pic"
         class="aspect-square object-contain">
    <div class=p-3>
        {product}
    </div>
</swiper-slide>