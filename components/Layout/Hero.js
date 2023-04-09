import Image from "next/image"
import { urlFor } from "../../lib/sanity/sanity"
import CImage from "@/components/CImage"
import PortableText from "../PortableText"

const lmFilter = {
    light: 'opacity-80 bg-white text-dark',
    dark: 'opacity-80 bg-black text-white',
    none: 'text-current'
}
const lmText = {
    light: 'text-dark',
    dark: 'text-white',
    none: 'text-current'
}
const Hero = (props) => {
    const {page, image, heroText, lightMode, objectPosition} = props
    const lf = lmFilter[lightMode || 'none']
    const lt = lmText[lightMode || 'none']
    return (
    <div className="__HERO -z-10 min-h-screen lg:min-h-[500px] flex justify-center items-center bg-white relative">
        
        {image?.asset?._ref && 
                <div className="__IMG absolute w-full h-full flex justify-center items-center">
                {/* <Image className={`w-auto h-auto object-contain`} fill src={urlFor(image.asset._ref).url()} alt={image.altText} /> */}
                    <CImage {...image} className={`${objectPosition === 'cover' ? 'object-cover' : 'object-contain'}`} />
                    <div className={`__FILTER absolute inset-0 ${lf}`}></div>
                <div className={`m-auto text-center drop-shadow-xl ${lt}`}>
                    <div className="max-w-[60%] m-auto">
                        {page?.title && <h1>{page.title}</h1> }
                        {heroText && <PortableText value={heroText} />}
                    </div>
                </div>
        </div>}
    </div>
    )
}

export default Hero