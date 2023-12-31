import type {PageLoad} from './$types';

export const load = (async ({params, fetch}) => {
    let products = [
        'Product 1',
        'Product 2',
        'Product 3',
        'Product 4',
        'Product 5',
        'Product 6',
        'Product 7',
        'Product 8',
    ];
    return {
        productID: params.productID,
    }
}) satisfies PageLoad;