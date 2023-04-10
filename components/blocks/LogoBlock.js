import Container from "../Layout/Container"
import Card from "../ui/Card"

const LogoBlock = (props) => {
    console.log({props})
    const {logos} = props
    console.log({logos})
    return (
        <div className="__LOGOBLOCK">
            <Container>
                <ul className="flex flex-wrap gap-6 justify-center">
                {logos?.map && logos.map((l, i) => {
                    return (<li key={i}>
                        <Card {...l} variant='collab'/>
                    </li>)
                })}
            </ul>
            </Container>
        </div>
    )
}

export default LogoBlock