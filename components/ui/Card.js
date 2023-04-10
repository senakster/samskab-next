import PortableText from '@/components/PortableText'
const Card = (props) => {
    const {
        title,
        webSite,
        description,
        logo,
        organisationColor,
        variant
    } = props
    console.log({props})
    return (
        <div className={`__CARD z-10 w-[290px] max-w-full overflow-hidden relative p-6 \
        ${variant === 'collab' ? 'rounded': 'border'} \
        `}>
            <div style={{ backgroundColor: organisationColor?.hex || `transparent`}} 
            className='absolute top-0 left-0 h-full w-full -z-10 \
            rounded bg-gradient-to-tr from-transparent via-transparent via-70& to-white
            '></div>
            {/* {JSON.stringify(logo)} */}
            <div className={`z-10 ${variant === 'collab' ? 'text-white text-shadow font-medium': ''}`}>
                <h3>{title}</h3>
                <a href={webSite} target="_blank" rel="noreferrer">{webSite}</a>
                <div className={`__EXPAND`}>
                    <PortableText value={description} />
                </div> 
            </div>

        </div>
    )
}

export default Card