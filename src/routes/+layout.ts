// export const prerender = true;
export const ssr = false;
//
//
import type {LayoutLoad} from './$types';
// import {isLoggedInStore} from "$lib/utils/stores";
//
export const load = (async () => {
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? window.document.documentElement.classList.add('dark')
        : window.document.documentElement.classList.remove('dark');
}) satisfies LayoutLoad;