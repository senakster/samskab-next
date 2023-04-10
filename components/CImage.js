import Image from "next/image"
import { urlFor } from "@/lib/sanity/sanity"
const CImage = (image) => {
    const {asset, altText, className} = image
    // console.log({image})
    return (
        <Image className={`w-auto h-auto ${className ? className : 'object-contain'}`} fill src={urlFor(asset._ref).url()} alt={altText} />
    )
}

export default CImage