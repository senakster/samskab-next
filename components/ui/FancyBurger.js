

const barCommonClasses = 'transition-all duration-200 h-[3px] rounded-full w-full bg-black relative overflow-hidden \
after:content-[""] after:absolute after:h-[3px] after:rounded-full \
after:w-full after:bg-green after:top-0 after:-left-full after:transition-all easy-in-out after:duration-200 \
group-hover:after:left-0'

const FancyBurger = (props) => {
    const {className, active, onClick} = props
    return (
        <div className={`${active ? `fixed right-11 top-4` : `absolute right-1 top-0`} `}>

        <button onClick={onClick} className={`__FANCYBURGER flex items-center justify-center w-10 h-10 group ${className} `}>
            <span className={`flex flex-col justify-evenly items-center w-8 h-8`}>
                    <span className={`origin-left ${active ? 'rotate-45 -translate-y-1' : 'rotate-0'} ${barCommonClasses} after:delay-0 delay-200`}></span>
                <span className={`${active ? 'scale-0' : 'scale-100'} ${barCommonClasses} after:delay-100 delay-300`}></span>
                <span className={`origin-left ${active ? '-rotate-45' : 'rotate-0'} ${barCommonClasses} after:delay-200 delay-400`}></span>
            </span>
        </button>
        </div>
    )
}

export default FancyBurger