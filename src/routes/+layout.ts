// export const prerender = true;
export const ssr = false;


import type {LayoutLoad} from './$types';
import {isLoggedInStore} from "$lib/utils/stores";

export const load = (async () => {
    if (localStorage.getItem('first_name')) {
        isLoggedInStore.set(true);
    }
}) satisfies LayoutLoad;