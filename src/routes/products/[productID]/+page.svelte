<script lang="ts">
    import StarMini from "$lib/icons/StarMini.svelte";
    import {Anchor, Badge, Button, Card, CheckboxGroup, Divider, Progress, Skeleton} from "@svelteuidev/core";
    import HeartMini from "$lib/icons/HeartMini.svelte";
    import ShareMini from "$lib/icons/ShareMini.svelte";
    import PlusSmall from "$lib/icons/PlusSmall.svelte";
    import Truck from "$lib/icons/Truck.svelte";
    import {screenWidthStore} from "$lib/utils/stores";

    let SelectedFilterRating;
    export let data;
</script>

<svelte:head>
    <title>Barang 1 | OpenMerce</title>
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-3 md:gap-x-4">
    <div class="col-span-1 -mx-4 md:mx-4">
        <swiper-container
                navigation={true}
                pagination={true}
                class="rounded-md sticky top-14"
        >
            <swiper-slide class="aspect-square">
                <img src="/emptycart.png" alt="{data}" class="aspect-square w-full h-full object-contain">
            </swiper-slide>
            <swiper-slide class="aspect-square">
                <img src="/emptycart.png" alt="{data}" class="aspect-square w-full h-full object-contain">
            </swiper-slide>
            <swiper-slide class="aspect-square">
                <img src="/emptycart.png" alt="{data}" class="aspect-square w-full h-full object-contain">
            </swiper-slide>
        </swiper-container>
    </div>

    <div class="col-span-2">
        <div class="font-bold text-base md:text-lg">HarmonyHaven TranquilSleep Pillow: A heavenly blend of soothing
            aromas and plush comfort for peaceful nights and rejuvenated mornings.
        </div>
        <div class="text-xs md:text-sm flex items-center pt-2"><span class="text-neutral-500">100+</span>&nbsp;Sold&nbsp;•&nbsp;<span><StarMini/></span>&nbsp;5.0
        </div>
        <div class="text-2xl md:text-3xl font-bold pt-4"> Rp. 150.000</div>
        <Divider class="my-8"/>
        <div class="card p-3 space-y-2">
            <div class="md:flex gap-2 hidden">
                <Button>Buy Now</Button>
                <button class="btn variant-filled-primary font-bold flex-1"
                ><span class="text-white flex items-center"> <PlusSmall/>Add to cart</span>
                </button>
            </div>

            <div class="flex">
                <button class="btn btn-sm flex-1"
                ><span><HeartMini/></span><span>Wishlist</span></button

                >
                <Divider/>
                <button class="btn btn-sm flex-1"><span><ShareMini/></span><span>Share</span></button>
            </div>
        </div>

        <div class="space-y-6">
            <h4 class="font-semibold text-lg md:text-lg">Details</h4>
            <p>Introducing LuminaGlo, the ultimate solution for your lighting needs. With its cutting-edge technology
                and sleek design, LuminaGlo brings a new level of illumination to any space. Whether you're looking to
                brighten up your living room, office, or outdoor area, LuminaGlo has got you covered.<br/>

                Featuring adjustable brightness settings, LuminaGlo allows you to create the perfect ambiance for any
                occasion. From cozy evenings at home to vibrant gatherings with friends, this versatile lighting
                solution caters to your every mood and preference. Its energy-efficient LED bulbs ensure long-lasting
                performance, saving you both money and the hassle of frequent replacements.<br/>

                LuminaGlo is not just about functionality; it's also a stylish addition to your décor. Its sleek and
                modern design seamlessly integrates into any setting, enhancing the aesthetic appeal of your space.
                Whether mounted on the wall or placed on a table, LuminaGlo exudes sophistication and elegance. <br/>

                Experience the brilliance of LuminaGlo and transform your environment with its exceptional lighting
                capabilities. Illuminate your world and embrace the beauty of well-lit spaces with LuminaGlo - where
                innovation meets illumination.<br/></p>

            <p>
                <span class="text-neutral-500">Weight: </span> 12 kg
                <br>
                <span class=" text-neutral-500">Dimension: </span> 12 x 12 x 12 cm
                <br>
                <span class=" text-neutral-500">Category: </span>
                <Anchor href="/category/1" class="no-underline text-xs md:text-sm font-semibold">Home</Anchor>
            </p>
            <Divider/>
            <div class="font-semibold text-lg">Delivery</div>
            <!--            <Skeleton class="h-10 rounded-md"/>-->
            <div class="flex flex-row gap-x-2">
                <Truck/>
                <div class="w-full">
                    <p>Regular Delivery Rp15.000 - Rp250.000</p>
                    <p class="text-neutral-500">Arrive expected 23 Jun - 26 Jun</p>
                    <p>Other Couriers:
                        <Badge size="sm" radius="sm">
                            SiCepat
                        </Badge>
                        <Badge size="sm" radius="sm">
                            JNE
                        </Badge>
                        <Badge size="sm" radius="sm">
                            Ninja
                        </Badge>
                    </p>
                    <p class="font-semibold text-blue-400 text-xs md:text-sm">See Couriers</p>
                    <!--                    <Anchor class="no-underline text-xs md:text-sm font-bold">See Couriers</Anchor>-->
                </div>
            </div>
            <Divider/>
        </div>
    </div>
</div>
<div class="font-bold text-lg py-6">User Reviews</div>
<div class="flex flex-col md:flex-row gap-6">
    <div class="basis-2/5">
        <div class="sticky top-14">
            <div class="flex flex-col items-center">
                <div class="flex items-end">
            <span class="flex items-center">
                <StarMini/>
                <span class="text-4xl md:text-7xl">5.0</span>
            </span>
                    <span class="text-neutral-500 text-lg md:text-xl">/5.0</span>
                </div>
                <p class="text-neutral-500">10 Ratings&nbsp;•&nbsp;5 Reviews</p>
                <div class="flex flex-col w-full max-w-xs px-4">
                    {#each [5, 4, 3, 2, 1] as rating}
                        <div class="flex items-center gap-x-2">
                            <StarMini/>
                            <p class="font-semibold">{rating}</p>
                            <Progress
                                    value={55}
                                    class="w-full"
                                    size='sm'
                            />
                        </div>
                    {/each}
                </div>
            </div>

            <Card>
                <p class="font-bold text-sm md:text-base">Filter Review</p>
                <Divider class="-mx-4"/>
                <p class="font-bold text-sm md:text-base">Rating</p>
                {SelectedFilterRating}
                <CheckboxGroup
                        direction="column"
                        size={$screenWidthStore < 400? 'xs': 'sm'}

                        bind:value={SelectedFilterRating}
                        items={[{ label: 5, value: 5 },
                            { label: 4, value: 4 },
                            { label: 3, value: 3 },
                            { label: 2, value: 2 },
                            { label: 1, value: 1 }
                        ]}
                />
            </Card>
        </div>
    </div>
    <div class="basis-3/5 space-y-2">
        {#each Array(25) as _, i}
            <div class="p-4 rounded md shadow-md space-y-2">
                <div class="flex items-center">
                    {#each Array(5) as _}
                        <StarMini/>
                    {/each}
                    <p class="text-neutral-500">
                        &nbsp;
                        2 days ago
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <Skeleton class="w-10 h-10 rounded-full" animate={false}/>
                    <p class="font-semibold font-base md:font-lg">Jeffri Kusnaidi</p>
                </div>
                <p>
                    BARANGNYA BAGUS BANGET DEH, TOP, MAU BELI LAGI
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque, cupiditate, est et impedit,
                    in necessitatibus nisi quae quam qui quibusdam quidem repellat sequi suscipit vitae. Adipisci
                    architecto autem esse ex explicabo iusto magnam nobis tenetur? Eaque, officia, sint. Ab alias
                    aliquid animi architecto autem culpa cum debitis delectus deleniti dolor eum facilis fugiat ipsa
                    ipsum itaque iure laborum maxime mollitia natus nisi nostrum numquam odio, omnis pariatur quae quam,
                    quasi repellat rerum similique soluta tempore vel vero voluptate? Blanditiis enim expedita ipsam
                    iste laborum modi quis veniam vitae. Autem deleniti facilis illo odio perspiciatis, possimus quis
                    ratione sed vitae.
                </p>
            </div>
        {/each}
    </div>
</div>
