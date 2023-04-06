import Image from "next/image"
import { urlFor } from "@/lib/sanity/sanity"
const CImage = (image) => {
    const {asset, altText} = image
    return (
        <Image className={`w-auto h-auto object-contain`} fill src={urlFor(asset._ref).url()} alt={altText} />
    )
}

export default CImage