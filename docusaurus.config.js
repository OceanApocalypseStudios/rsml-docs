// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Red Sea Markup Language',
  tagline: 'The official documentation for the language that dynamically evaluates logic paths.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://oceanapocalypsestudios.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rsml-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OceanApocalypseStudios', // Usually your GitHub org/user name.
  projectName: 'rsml-docs', // Usually your repo name.

  onBrokenLinks: 'warn', // TODO: set to throw in prod

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-PT'],
  },

  markdown: {
    format: 'detect'
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OceanApocalypseStudios/rsml-docs/tree/docs/',
          /*
          lastVersion: '2.0',
          versions: {
            current: {
              banner: 'unreleased',
              label: 'Pre-release'
            },
            '2.0': {
              label: '2.0.x'
            },
            '1.0': {
              banner: 'unmaintained',
              label: '1.0.x'
            }
          }*/
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OceanApocalypseStudios/rsml-docs/tree/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Red Sea Markup Language',
        logo: {
          alt: 'RSML Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'languageSidebar',
            position: 'left',
            label: 'Language',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'bindingSidebar',
            position: 'left',
            label: 'Bindings',
          },
          {
            type: 'docSidebar',
            sidebarId: 'nativeSidebar',
            position: 'left',
            label: 'Native',
          },
          {
            type: 'docSidebar',
            sidebarId: 'toolSidebar',
            position: 'left',
            label: 'CLI & Tools',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          /*
          {
            type: 'docsVersionDropdown',
            versions: ['current', '2.0', '1.0'],
            position: 'right'
          },
          */
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/OceanApocalypseStudios/RedSeaMarkupLanguage',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'CLI',
                to: '/docs/tools/cli/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              /*
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
              */
              {
                label: 'BlueSky',
                href: 'https://bsky.app/profile/oceanapocalypse.bsky.social',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/OceanApocalypseStudios/RedSeaMarkupLanguage',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OceanApocalypseStudios. CC0 1.0 Universal.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
