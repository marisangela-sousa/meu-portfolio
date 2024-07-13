import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue'
import router from './router'

import vuetify from "@/plugins/vuetify.js";

import {createI18n} from "vue-i18n";
import {pt} from "@/language/pt.js";
import {en} from "@/language/en.js";

const languages = {
    pt,
    en
}
export const i18n = createI18n({
    locale: "pt",
    fallbackLocale: "en",
    messages: languages,
});

const pinia = createPinia();

const app = createApp(App)
    .use(i18n)
    .use(pinia)
    .use(router)
    .use(vuetify)

app.mount('#app')
