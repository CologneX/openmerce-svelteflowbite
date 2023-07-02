<script lang=ts>
    import {goto} from '$app/navigation';
    import {bottom} from '@popperjs/core';
    import {Button, Card, DarkMode, Popover} from 'flowbite-svelte'
    import {slide} from 'svelte/transition';
</script>


<Popover triggeredBy="#SettingsButtonTrigger" placement={bottom} trigger="hover" arrow={false} transition={slide}
         params={{duration: 500}}>
    <div class="flex flex-row gap-x-2">
        <div class="flex-1">
            <Card class=" shadow-none border-none "
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs">
                <h4 class="text-primary-500 font-bold">OMPLUS</h4>
            </Card>

            <DarkMode class="w-full justify-center"/>
        </div>
        <div class="divider"></div>

        <div class="flex-1 flex flex-col">
            <Button color="alternative" class="justify-start border-none" size="xs" on:click={()=>goto('/profile')}>
                Profile
            </Button>
            <Button color="alternative" class="justify-start border-none" size="xs" on:click={()=>goto('/wishlist')}>
                Wishlist
            </Button>
            <Button color="alternative" class="justify-start border-none" size="xs"
                    on:click={()=>goto('/transaction-list')}>Transaction
            </Button>
            <Button color="alternative" class="justify-start border-none" size="xs" on:click={()=>goto('/cart')}>Cart
            </Button>
        </div>
    </div>

</Popover>