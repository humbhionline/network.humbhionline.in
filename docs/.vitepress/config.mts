import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: " ",

    description: "An Inclusive Beckn Network",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: {
            light: "/images/logo.svg",
            dark: "/images/logo-white.svg",
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Team', link: '/team' },
        ],

        /*
        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],
        */

        socialLinks: [
            //{ icon: 'twitter', link: 'https://x.com/humbhionline' }
        ],
        footer: {
            message: "<a href='/team'>Team</a>",
            copyright: "Copyright © 2019-present Humbhionline ",
        }

    },

})
