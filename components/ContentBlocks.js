
import Blocks from "./blocks"

const blockTypes = { // groq._ref-> Expanded / altered _type - check
}

const ContentBlocks = (props) => {
    const {content} = props
    console.log({Blocks})
    return (
        <section className="__CONTENTBLOCKS">
            {
                content?.map && content.map((b, i) => {
                    const blocktype = blockTypes[b._type] || `${b?._type?.charAt(0).toUpperCase()}${b?._type?.slice(1)}`
                    const Block = Blocks.hasOwnProperty(blocktype) && Blocks[blocktype]
                    return <div key={i} className={`${i === 0 ? 'mt-8 mb-16' : 'my-16'}`}>
                        {
                            Block ? <Block {...b} />
                                : <p>Missing Block {b._type}</p>
                        }

                    </div>
                })
            }
        </section>
    )
}

export default ContentBlocks