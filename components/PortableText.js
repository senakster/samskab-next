import Link from 'next/link';
import { PortableText as PortableTextBase } from '@portabletext/react';

const pageTypesBaseUrl = {
    symptom: '/symptom/',
    page: '/',
    frontpage: '/',
}

const baseSerializers = {
    block: {
        h2: props => (
            <h2 className='heading-xl mb-4 mt-8'>{props?.children}</h2>
        ),
        h3: props => (
            <h3 className='heading-l mb-4 mt-8'>{props?.children}</h3>
        ),
        h4: props => (
            <h4 className='heading-m mb-4 mt-8'>{props?.children}</h4>
        ),
        h5: props => (
            <h5 className='heading-s mb-4 mt-6'>{props?.children}</h5>
        ),
        normal: props => (
            <p className='body-lr mb-4'>{props?.children}</p>
        ),
        label: props => (
            <p className='body-lr mb-2 mt-4'>{props?.children}</p>
        ),
        smaller: props => (
            <p className='body-r mb-4'>{props?.children}</p>
        ),
    },
    marks: {
        color: (props) => {
            const { value, children } = props
            return <span style={{color: `${value.hex}`}}>{children}</span>
        },
        internalLink: (props) => {
            const { value, children } = props
            const { blank, anchor, slug, buttonStyle } = value

            const type = slug?._type
            const pageslug = slug?.current

            const href = `${pageTypesBaseUrl.hasOwnProperty(type) ? pageTypesBaseUrl[type] : '/'}${pageslug}`
            return (
                <Link href={href || '/'}>
                    <a>
                        <div className={`${buttonStyle ? '_h-button' : '_h-button'} mb-4`}>
                            {children}
                        </div>
                    </a>
                </Link>
            );
        },
        externalLink: (props) => {
            const { value, children } = props
            const { blank, anchor, href, buttonStyle } = value
            return blank ? (
                <a href={href} target="_blank" rel="noopener noreferrer" >
                    <div className={buttonStyle ? `_h-button flex items-center gap-x-3 justify-center md:!justify-start mb-4` : 'mb-4'}>
                        {buttonStyle ? <><span>{children}</span><div className="w-4">
                            {/* <ExternalLink /> */}
                        </div></> : <span className="underline hover:opacity-80">{children}</span>}
                    </div>
                </a>
            ) : anchor ? (
                <a href={href} data-scroll-to>
                    <div className={`${buttonStyle ? '' : ''}`} >
                        {children}
                    </div>
                </a>
            ) : (
                <a href={href} className={`${buttonStyle ? '' : ''}`}>
                    <span className={buttonStyle ? `mb-4` : 'underline hover:opacity-80 mb-4'}>{children}</span>
                </a>
            );
        },
    },
    list: {
        bullet: (props) => {
            const { children, value, index } = props;
            return <ul className="list-disc pl-6 mb-4">{children}</ul>;
        },
        number: (props) => {
            const { children } = props;
            return <ul className="list-dec pl-6 mb-4">{children}</ul>;
        }
    }
};



export const PortableText = ({ value, gap }) => {
    return <div className={`__PORTABLETEXT flex flex-col ${gap || 'gap-y-0'}`}>
        <PortableTextBase value={value} components={baseSerializers} />
    </div>
}

export default PortableText;