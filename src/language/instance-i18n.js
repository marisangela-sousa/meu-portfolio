import {createI18n} from "vue-i18n";
import {pt} from "./pt.js";
import {en} from "./en.js";

const languages = {
    pt,
    en
}
export const i18n = createI18n({
    locale: "pt",
    fallbackLocale: "en",
    messages: languages,
});