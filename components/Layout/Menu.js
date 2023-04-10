import Container from "./Container"
import FancyBurger from "@/components/ui/FancyBurger"
import LanguageSwitch from "@/components/LanguageSwitch"
import CLink from "../ui/CLink"
import {useState} from 'react'
import { useRouter } from "next/router"
import Link from "next/link"
import CImage from '@/components/CImage'
// import logo from '@/assets/Logo 1 Hvid SAMSKAB transparent.png'
import Image from 'next/image'

const Menu = (props) => {
    const {menu, logo} = props
    const [active, setActive] = useState(false)
    const toggleActive = () => {
        setActive(!active)
    }
    const router = useRouter()
    // console.log({props})
    return (
        <div className="__Menu absolute top-0 left-0 h-20 w-full">
            <div className="absolute __BGCOLOR h-full -w-full w-full bg-white lg:bg-transparent"></div>
            <Container className="relative">
                <nav className="col-span-full flex justify-between items-center mt-4">
                    <div className="w-32"></div>
                    <Link href="/" className="w-32 fixed top-0 left-0 h-20"><div className="w-32"><div className="sr-only">Forsidelink</div>
                    <CImage {...logo} altText="Samskab Logo"/>
                    {/* <Image className="object-contain" fill src={logo} alt="Samskab Logo" /> */}
                    </div></Link>
                    {menu?.map && <ul className="hidden lg:flex h-full pt-3 gap-4 items-center">
                        {menu.map((m,i) => (
                            <li key={i} className={`${router.asPath.toLowerCase() === `/${m.slug.toLowerCase()}` ? 'text-red': ''}`}>
                                <CLink active={router.asPath.toLowerCase() === `/${m.slug.toLowerCase()}`} href={`/${m.slug.toLowerCase()}` || '/'}>{m.title}</CLink>
                            </li>
                        ))}
                    </ul> }
                    <div className="hidden lg:block"><LanguageSwitch /></div>
                    <div>
                    <div className={`transition-all fixed top-0 ${active ? 'right-0 opacity-100' : '-right-full opacity-0'} w-screen h-screen flex gap-y-4 justify-center items-center`}>
                        <div className="absolute inset-0 bg-white opacity-90 -z-10"></div>
                        {menu?.map && <ul className="flex flex-col gap-y-2 text-center">
                            {menu.map((m, i) => (
                                <li key={i} className={`heading-l ${router.asPath.toLowerCase() === `/${m.slug.toLowerCase()}` ? 'text-red' : ''}`}>
                                    <CLink active={router.asPath.toLowerCase() === `/${m.slug.toLowerCase()}`} href={`/${m.slug.toLowerCase()}` || '/'}>{m.title}</CLink>
                                </li>
                            ))}
                                <li className="flex justify-center"><LanguageSwitch /></li>
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