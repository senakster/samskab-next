import Page from '@/components/pages/Page'
import { getAllPagePaths, getPageBySlug } from '@/lib/sanity/queries'
import { getClient, filterDataToSingleItem } from '@/lib/sanity'

const Slug = (props) => {
    console.log('SLUG: ', {props})
    return (
        <Page />
    )
}

export default Slug

export async function getStaticPaths(context) {
    const { params, preview } = context
    const query = getAllPagePaths
    const paths = await getClient(preview).fetch(query);
    return {
        paths: paths.map(path => ({ params: { slug: [path?.slug] } })),
        fallback: false,
    };
}

export async function getStaticProps(props) {
    const { params, preview = false } = props;

    const query = getPageBySlug
    const queryParams = { ...params };
    const data = await getClient(preview).fetch(query, queryParams);
    const page = filterDataToSingleItem(data, preview);

    return {
        props: {
            params,
            preview,
            page
        }
    };
}