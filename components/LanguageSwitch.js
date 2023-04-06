import Globe from '@/assets/svgr/Globe' 
import Link from 'next/link'
import { useRouter } from 'next/router'

const LanguageSwitch = (props) => {
    const router = useRouter()
    const {locale} = router || {}
    // console.log({props})
    const otherLocales = router.locales.filter(l => l !== locale)
    return (
        <span className="__LANGUAGESWITCH h-full min-w-[40px] p-2 flex gap-x-2 relative group">
            <Globe className="object-contain w-6"/>
            <span>{locale}</span>
            {otherLocales?.map && 
                <ul className='flex gap-x-2 transition-all opacity-0 -bottom-0 absolute group-hover:-bottom-5 group-hover:opacity-100'>
                {
                otherLocales.map((l,i) => {
                return (
                    <li key={i}><Link href={l === 'da' ? '/' : `/${l}`} locale={l}>
                        {l}
                    </Link></li>)})
                }
                </ul>
            }
        </span>
    )
}

export default LanguageSwitch