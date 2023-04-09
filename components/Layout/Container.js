const Container = (props) => {
    const {children, grid, className} = props
    return (
        <div className={`__CONTAINER max-w-[1280px] mx-auto px-4 xl:px-0 ${!grid ? '': typeof grid === 'string' ? grid : 'grid grid-cols-12'} ${className}`}>
            {children}
        </div>
    )
}

export default Container