// @ts-check
// Note: type annotations allow type checking and IDEs to assist you in writing Docusaurus config.

const config = {
  title: 'Physical AI & Humanoid Robotics', // Your Book Title
  tagline: 'ROS 2 and NVIDIA Isaac Sim Capstone Guide',
  favicon: 'img/favicon.ico', // Placeholder, you can add a favicon later

  // Set the production url of your site here
  url: 'https://your-domain.com', 
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/', 

  organizationName: 'YourName', // Usually your GitHub org/user name.
  projectName: 'docusourus-book', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set useful defaults.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Tells Docusaurus to look for your sidebar file
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', 
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Tells Docusaurus to look for a custom CSS file
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI Book',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Modules',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} AI/Spec-Driven Book.`,
      },
      // You can define other visual settings here
    }),
};

module.exports = config;