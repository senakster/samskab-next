import Image from "next/image"
import { urlFor } from "../../lib/sanity/sanity"
import CImage from "@/components/CImage"

const Hero = (props) => {
    const {title, image} = props
    return (
    <div className="__HERO -z-10 min-h-screen lg:min-h-[500px] flex justify-center items-center bg-white relative">
        {image?.asset?._ref && <div className="__IMG absolute w-full h-full justify-center items-center">
                {/* <Image className={`w-auto h-auto object-contain`} fill src={urlFor(image.asset._ref).url()} alt={image.altText} /> */}
            <CImage {...image} />
        </div>}
    </div>
    )
}

export default Hero