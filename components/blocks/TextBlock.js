import PortableText from "@/components/PortableText"
import Container from '@/components/Layout/Container'

const TextBlock = (props) => {
    const {value} = props
    console.log({value})
    return (
    <div className="__TEXTBLOCK">
        <Container grid={false}>
                <PortableText {...{ value }} />
        </Container>
    </div>
    )
}

export default TextBlock