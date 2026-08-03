import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Red Sea Markup Language',
  tagline: 'The official documentation for the language that dynamically evaluates logic paths.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://oceanapocalypse.org/',
  baseUrl: '/rsml-docs/',

  // GitHub pages deployment config.
  organizationName: 'OceanApocalypse',
  projectName: 'rsml-docs',

  onBrokenLinks: 'warn', // xxx: ignore broken anchors for now

  i18n: {
    defaultLocale: 'en',
    locales: ['en'] // , 'pt-PT'],
  },

  markdown: {
    format: 'detect'
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OceanApocalypse/rsml-docs/tree/docs/',
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
            'https://github.com/OceanApocalypse/rsml-docs/tree/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }) satisfies Preset.Options,
    ],
  ],

  themeConfig:
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
            href: 'https://github.com/OceanApocalypse/RedSeaMarkupLanguage',
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
                label: 'Bluesky',
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
                href: 'https://github.com/OceanApocalypse/RedSeaMarkupLanguage',
              },
            ],
          },
        ],
        copyright: `Copyright © 2025-${new Date().getFullYear()} OceanApocalypse. CC0 1.0 Universal.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }) satisfies Preset.ThemeConfig,
};

export default config;
