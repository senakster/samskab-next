import Link from "next/link"

const CLink = (props) => {
    const {href, children, active} = props
    return (
        <Link href={href}>
            <span className="group overflow-hidden inline-flex flex-col justify-center min-h-[40px]">
            <span className="block">{children}</span>
                <span className={`group-hover:scale-x-100 ${active ? 'scale-x-100' : 'scale-x-0'} h-[3px] -translate-y-1 bg-current w-full  transition-all duration-500 origin-center `}></span>
            </span>
        </Link>
    )
}

export default CLink