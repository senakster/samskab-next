import ContentBlocks from '../ContentBlocks'
const Page = ({page}) => {
    const {title, content} = page
    // console.log({page})
    return (
        <div className="__PAGE">
            <header>
                <h1 className="text-4xl uppercase">{title}</h1>
            </header>
            <div>
                <ContentBlocks blocks={content}/>
            </div>
        </div>
    )
}

export default Page