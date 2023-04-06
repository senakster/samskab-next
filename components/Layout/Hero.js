
const Hero = (props) => {
    const {title} = props
    console.log({props})
    return (
    <div className="__HERO min-h-screen lg:min-h-[500px] flex justify-center items-center">
        <h1 className="heading-l">{title}</h1>
    </div>
    )
}

export default Hero