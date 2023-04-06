import Container from "./Container"

const Menu = (props) => {
    const {} = props
    console.log('Menu: ', {props})
    return (
        <div className="__Menu">
            <Container>
                <nav>
                    Menu
                </nav>
            </Container>
        </div>
    )
}

export default Menu