import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DataStage Anywhere',
  tagline: 'Deploy Remote Engines on Kubernetes',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // UPDATED FOR PERSONAL GITHUB: Change 'YOUR-GITHUB-USERNAME' to your actual username
  url: 'https://YOUR-GITHUB-USERNAME.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/datastage-docs-testing/',

  // GitHub pages deployment config.
  // UPDATED FOR PERSONAL GITHUB: Change 'YOUR-GITHUB-USERNAME' to your actual username
  organizationName: 'YOUR-GITHUB-USERNAME', // Your GitHub username
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
          // UPDATED: Change 'YOUR-GITHUB-USERNAME' to your actual username
          editUrl:
            'https://github.com/YOUR-GITHUB-USERNAME/datastage-docs-testing/tree/main/',
        },
        blog: false, // Disable blog functionality
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Announcement bar for new tutorials
    announcementBar: {
      id: 'new_tutorials',
      content:
        '🎉 New tutorial series available! <a href="/docs/tutorials/get-started">Get Started with DataStage Anywhere</a>',
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
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          // UPDATED: Change 'YOUR-GITHUB-USERNAME' to your actual username
          href: 'https://github.com/YOUR-GITHUB-USERNAME/datastage-docs-testing',
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
              to: '/docs/intro',
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
              // UPDATED: Change 'YOUR-GITHUB-USERNAME' to your actual username
              label: 'GitHub',
              href: 'https://github.com/YOUR-GITHUB-USERNAME/datastage-docs-testing',
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
