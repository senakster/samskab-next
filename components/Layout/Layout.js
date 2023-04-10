import Container from "./Container"
import Footer from "./Footer"
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
        <div className="__LAYOUT pt-20 flex flex-col justify-between min-h-screen">
            <Menu {...settings.find(s => s?.__i18n_lang === router.locale)}/>
            {hero && <Hero {...hero} />}
            <Container>
            {children}
            </Container>
            <Footer {...{content: settings.find(s => s?.__i18n_lang === router.locale).footer}} />
        </div>
    )
}

export default Layout