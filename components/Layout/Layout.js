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
    // console.log({props})
    return (
        <div className="__LAYOUT pt-20">
            <Menu {...settings.find(s => s?.__i18n_lang === router.locale)}/>
            {hero && <Hero {...hero} />}
            <Container>
            {children}
            </Container>
        </div>
    )
}

export default Layout