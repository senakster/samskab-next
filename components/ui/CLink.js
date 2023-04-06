import Link from "next/link"

const CLink = (props) => {
    const {href, children} = props
    return (
        <Link href={href}>
            <span className="group overflow-hidden inline-flex flex-col min-h-[40px]">
            <span className="block">{children}</span>
            <span className="h-[1px] bg-current w-full scale-x-0 transition-all duration-500 origin-center group-hover:scale-x-100"></span>
            </span>
        </Link>
    )
}

export default CLink