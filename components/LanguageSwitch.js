import Globe from '@/assets/svgr/Globe' 
import logo from '@/assets/Logo 1 Hvid SAMSKAB transparent.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const LanguageSwitch = (props) => {
    const router = useRouter()
    const {locale} = router || {}
    const otherLocales = router.locales.filter(l => l !== locale)
    return (
        <span className="__LANGUAGESWITCH h-full min-w-[40px] p-2 flex gap-x-2 relative group">
            <Globe className="object-contain w-6" />
            {/* <span>{locale}</span> */}
            {otherLocales?.map && 
                // <ul className='flex gap-x-2 transition-all opacity-100 -bottom-0 absolute group-hover:-bottom-5 group-hover:opacity-100'>
                    <ul className=''>
                {
                otherLocales.map((l,i) => {
                return (
                    <li key={i} className='bg-white'><Link href={l === 'da' ? '/' : `/${l}`} locale={l}>
                        {l}
                    </Link></li>)})
                }
                </ul>
            }
        </span>
    )
}

export default LanguageSwitch