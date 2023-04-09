import ContentBlocks from "../ContentBlocks"

const Frontpage = (props) => {
    const {page, content} = props
    return (
        <div>
            <ContentBlocks {...{content}} />
        </div>
    )
}

export default Frontpage