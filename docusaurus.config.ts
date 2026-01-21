import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DataStage Anywhere',
  tagline: 'Execute data pipelines as close to your data as possible',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mwdobson3.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/datastage-docs-testing/',

  // GitHub pages deployment config.
  organizationName: 'mwdobson3', // Your GitHub username
  projectName: 'datastage-docs-testing', // Repo name

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit URL for personal GitHub
          editUrl:
            'https://github.com/mwdobson3/datastage-docs-testing/tree/main/',
        },
        blog: false, // Disable blog functionality
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card for link previews
    image: 'img/datastage-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Announcement bar
    announcementBar: {
      id: 'welcome',
      content:
        '📚 Welcome to DataStage Anywhere Documentation! <a href="/datastage-docs-testing/docs/tutorials">Explore Tutorials</a>',
      backgroundColor: '#0f62fe',
      textColor: '#ffffff',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'DataStage Anywhere',
      logo: {
        alt: 'DataStage Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/mwdobson3/datastage-docs-testing',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/datastage-docs-testing/docs/intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'IBM DataStage',
              href: 'https://www.ibm.com/products/datastage',
            },
            {
              label: 'IBM Documentation',
              href: 'https://www.ibm.com/docs/en/cloud-paks/cp-data',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mwdobson3/datastage-docs-testing',
            },
            {
              label: 'IBM Cloud',
              href: 'https://cloud.ibm.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IBM Corporation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
