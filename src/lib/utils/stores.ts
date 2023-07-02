import {writable} from "svelte/store";

export const isLoggedInStore = writable(false);
export const preferredThemeStore = writable('')
export const screenWidthStore = writable(0);
export const isWishlistedStore = writable(false);
export const subTotalStore = writable(0);
export const cartCountStore = writable(0);
export const totalItemsStore = writable(0);
export const product_codeStore = writable('');

export const overlayVisibleStateStore = writable(false);