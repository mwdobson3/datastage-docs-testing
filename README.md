# DataStage Anywhere Documentation

A modern documentation site for IBM DataStage Anywhere, built with Docusaurus and featuring IBM Design Language theming with HashiCorp-style interactive tutorials.

## 🚀 Features

- **IBM Design Language** - IBM Blue color scheme and IBM Plex fonts
- **Interactive Tutorials** - Progress tracking with localStorage
- **Video Embeds** - YouTube and Vimeo support
- **Responsive Design** - Mobile-friendly with dark mode
- **Tutorial Checklist** - Track your learning progress across sessions

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn

## 🛠️ Installation

```bash
npm install
```

## 🏃 Local Development

```bash
npm start
```

This starts a local development server at `http://localhost:3000`. Most changes are reflected live without restarting the server.

## 🏗️ Build

```bash
npm run build
```

Generates static content into the `build` directory that can be served using any static hosting service.

## 📦 Deployment

### GitHub Pages

1. Update `docusaurus.config.ts`:
   - Set `organizationName` to your GitHub username
   - Set `projectName` to your repository name
   - Set `baseUrl` to `/your-repo-name/`

2. Deploy:
```bash
npm run deploy
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📚 Documentation Structure

```
docs/
├── intro.md                    # Getting started
└── tutorials/
    ├── get-started.mdx         # Tutorial collection landing page
    └── get-started/
        ├── install-prerequisites.mdx
        ├── deploy-engine.mdx
        ├── connect-cloud-pak.mdx
        ├── run-first-job.mdx
        └── monitor-troubleshoot.mdx
```

## 🎨 Customization

### Theme Colors

Edit `src/css/custom.css` to customize the IBM Blue theme:

```css
:root {
  --ifm-color-primary: #0f62fe;  /* IBM Blue */
  --ifm-color-primary-dark: #0353e9;
  /* ... */
}
```

### Tutorial Progress Tracking

The `TutorialChecklist` component automatically saves progress to localStorage. Each tutorial collection has a unique ID for tracking.

## 🧩 Components

### TutorialChecklist

Interactive checklist with progress tracking:

```tsx
import TutorialChecklist from '@site/src/components/TutorialChecklist';

<TutorialChecklist
  tutorials={[
    { id: 'prereqs', title: 'Install Prerequisites', duration: '10 min', path: '/docs/tutorials/get-started/install-prerequisites' }
  ]}
  collectionId="get-started"
/>
```

### VideoEmbed

Responsive video player:

```tsx
import VideoEmbed from '@site/src/components/VideoEmbed';

<VideoEmbed
  videoId="dQw4w9WgXcQ"
  platform="youtube"
  title="Tutorial Video"
/>
```

## 📖 Implementation Guide

For detailed information about the architecture and customization options, see [IMPLEMENTATION-GUIDE.md](./IMPLEMENTATION-GUIDE.md).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm start`
5. Build to verify: `npm run build`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Docusaurus Documentation](https://docusaurus.io/)
- [IBM Design Language](https://www.ibm.com/design/language/)
- [DataStage Documentation](https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=services-datastage)

## 🆘 Support

For issues or questions:
- Check the [IMPLEMENTATION-GUIDE.md](./IMPLEMENTATION-GUIDE.md) for troubleshooting
- Review [Docusaurus documentation](https://docusaurus.io/docs)
- Open an issue in this repository