import {colorScheme} from "@svelteuidev/core";


// get the current theme on page load
export const getTheme = () => {
    if (localStorage.getItem('prefTheme') === 'light') {
        colorScheme.set('light');
    } else {
        colorScheme.set('dark');
    }
}