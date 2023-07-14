// export const prerender = true;

//
//
// import type {LayoutLoad} from './$types';
// import {isLoggedInStore} from "$lib/utils/stores";
//
// export const load = (async () => {
//     localStorage.getItem('color-theme') === 'dark' ||
//     (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
//         ? window.document.documentElement.classList.add('dark')
//         : window.document.documentElement.classList.remove('dark');
//
//     if (localStorage.getItem('first_name')) {
//         isLoggedInStore.set(true);
//     }
// }) satisfies LayoutLoad;