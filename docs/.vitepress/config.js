import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nex-cli by Codetanna",
  description: "The next generation of cli tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Cli Documentation',
        items: [
          { text: 'Introduction', link: '/introduction'},
          { text: 'Installation', link: '/installation'},
          { text: 'Quick Start', link: '/markdown-examples' },
          { text: 'Commands', link: '/api-examples' },
          { text: 'Models', link: '/model' },
          { text: 'Controllers and Services', link: '/logic'},
          { text: 'Routes', link: '/route' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ripeplantain/nex-cli' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@codetanna/nex-cli?activeTab=dependencies'},
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/emmanuel-gyang/'}
    ]
  }
})
