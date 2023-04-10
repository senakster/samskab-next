import Container from "./Container"
import ContentBlocks from '@/components/ContentBlocks'
import { useRouter } from "next/router"

const Footer = (props) => {
    const router = useRouter()
    const {locale} = router
    const content = props?.content?.find(f => f.__i18n_lang === locale)
    return (
        <div className={`__FOOTER bg-gradient-to-tr from-blue via-blue via-80% to-white`}>
            <ContentBlocks {...content} />
        </div>
    )
}

export default Footer