import Container from "./Container"
import Hero from "./Hero"
import Menu from "./Menu"
import { useRouter } from "next/router"
const Layout = (props) => {
    const router = useRouter()
    const {
        settings,
        hero,
        children,
    } = props
    return (
        <div className="__LAYOUT">
            <Menu {...settings.find(s => s?.__i18n_lang === router.locale)}/>
            <Hero {...hero} />
            <Container>
            {children}
            </Container>
        </div>
    )
}

export default Layout