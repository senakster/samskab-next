import { config } from './config'
import { createClient } from 'next-sanity';
export { filterDataToSingleItem } from './filterDataToSingleItem';


export const client = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET,
});

export const getClient = usePreview =>
    usePreview ? previewClient : client;
export default client;