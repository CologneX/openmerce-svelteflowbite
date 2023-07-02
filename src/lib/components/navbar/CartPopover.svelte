<script lang=ts>
    import {bottom} from '@popperjs/core';
    import {Popover} from 'flowbite-svelte'
    import {slide} from 'svelte/transition';
</script>


<Popover triggeredBy="#CartButtonTrigger" placement={bottom} trigger="hover" class="max-w-md w-full" arrow={false}
         transition={slide} params={{duration: 500}}>
    <div class="grid justify-items-center gap-y-2">
        <img src="/emptycart.png" alt="empat cart" class="max-h-24">
        <p class="font-semibold">Your shopping cart is empty!</p>
        <p class="text-sm">Being idle is no fun. Let's fill it with your dream items!</p>
    </div>
</Popover>