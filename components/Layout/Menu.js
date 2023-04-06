import Container from "./Container"
import FancyBurger from "@/components/ui/FancyBurger"
import LanguageSwitch from "@/components/LanguageSwitch"
import CLink from "../ui/CLink"
import {useState} from 'react'
const Menu = (props) => {
    const {menu} = props
    const [active, setActive] = useState(false)
    const toggleActive = () => {
        setActive(!active)
    }
    return (
        <div className="__Menu fixed py-4 top-0 left-0 h-10 w-full bg-transparent">
            <Container className="relative">
                <nav className="col-span-full flex justify-between">
                    <LanguageSwitch />
                    {menu?.map && <ul className="hidden lg:flex h-full gap-4 items-center">
                        {menu.map((m,i) => (
                            <li key={i} className="">
                                <CLink href={`/${m.slug}` || '/'}>{m.title}</CLink>
                            </li>
                        ))}
                    </ul> }
                    <div>
                    <div className={`transition-all fixed top-0 ${active ? 'right-0 opacity-100' : '-right-full opacity-0'} w-screen h-screen flex gap-y-4 justify-center items-center`}>
                        <div className="absolute inset-0 bg-white opacity-90"></div>
                        {menu?.map && <ul className="flex flex-col gap-y-2 text-center">
                            {menu.map((m, i) => (
                                <li key={i} className="">
                                    <CLink href={`/${m.slug}` || '/'}>{m.title}</CLink>
                                </li>
                            ))}
                        </ul>}
                    </div>
                        <FancyBurger active={active} onClick={toggleActive} className={`${active ? 'z-50 fixed' : 'lg:hidden'}`} />
                    </div>  
                </nav>
            </Container>
        </div>
    )
}

export default Menu