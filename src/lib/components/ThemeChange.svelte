<script>
    import {colorScheme, NativeSelect} from "@svelteuidev/core";
    import Sun from "$lib/icons/Sun.svelte";
    import Moon from "$lib/icons/Moon.svelte";

    $: localStorage.setItem('prefTheme', $colorScheme);
</script>


<NativeSelect data="{[{
    label: 'Dark',
    value: 'dark'
}, {
    label: 'Light',
    value: 'light'
},  {
    label: 'System',
    value: 'system'
}
]}"
              size="xs"
              bind:value={$colorScheme}
              icon={$colorScheme === 'dark' ? Moon : Sun}
/>