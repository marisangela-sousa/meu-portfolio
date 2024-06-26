import "vuetify/styles"
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const darkTheme = {
    dark: true,
    colors: {
        background: "#23253A",
        primary: "#FC4B51",
        secondary: "#FFFFFF",
        tertiary: "#A7A8B0",
    }
}

const lightTheme = {
    dark: false,
    colors: {
        background: "#FFFFFF",
        primary: "#FC4B51",
        secondary: "#23253A",
        tertiary: "#393A4D"
    }
}

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'darkTheme',
        themes: {
            darkTheme,
            lightTheme
        }
    },
})