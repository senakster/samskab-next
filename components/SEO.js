import Head from "next/head";

const Seo = (props) => {
    const { seo } = props
    return (
        <>
            <Head>
                <title>{seo?.title ? `${seo?.title} | Samskab` : `Samskab`}</title>
                {seo?.description && <meta property='og:description' content={seo?.description}></meta>}
                {seo?.description && <meta name="description" content={seo?.description} />}
            </Head>
        </>
    )
}

export default Seo