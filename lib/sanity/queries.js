import { groq } from "next-sanity";

export const getFrontpage = groq`*[_type == 'frontpage' && __i18n_lang == $locale]{
    ...
}`

export const getSettings = groq`*[_type == 'settings'] {
    ...,
    menu[]->{
    title,
    "slug": slug.current,
    __i18n_lang,
    __i18n_ref,
    __i18n_base
    }
}`

export const getAllPagePaths = groq`*[_type == 'page' && defined(slug.current)]{
    title,
    _type,
    'slug': slug.current
}`

export const getPageBySlug = groq`*[_type == 'page' && defined(slug.current) && slug.current == $slug]{
    ...
}`