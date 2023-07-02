import type {LayoutLoad} from './$types';
import {isLoggedInStore} from "$lib/utils/stores";
import {get} from "svelte/store";
import {redirect} from '@sveltejs/kit';

export const load = (async () => {
    // if (!get(isLoggedInStore)) {
    //     throw redirect(308, "/login");
    // }
}) satisfies LayoutLoad;