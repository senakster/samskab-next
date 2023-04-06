const Container = (props) => {
    const {children, grid} = props
    return (
        <div className={`__CONTAINER max-w-[1280px] mx-auto px-4 xl:px-0 ${grid ? '': 'grid grid-cols-12'}`}>
            {children}
        </div>
    )
}

export default Container