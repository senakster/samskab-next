import { groq } from "next-sanity";

export const getFrontpage = groq`*[_type == 'frontpage' && __i18n_lang == $locale]{
    ...
}`

export const getSettings = groq`*[_type == 'settings'] {
    ...
}`