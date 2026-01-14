# DataStage Anywhere Documentation - Implementation Guide

## Overview

This documentation site is built with Docusaurus and features:
- ✅ IBM Design Language theme (IBM Blue colors, IBM Plex fonts)
- ✅ HashiCorp-style tutorial collections with progress tracking
- ✅ Video embeds (YouTube/Vimeo)
- ✅ localStorage-based progress tracking (no backend required)
- ✅ Mobile-responsive design
- ✅ Dark mode support

## Architecture

### Components

1. **TutorialChecklist** (`src/components/TutorialChecklist/index.tsx`)
   - Displays tutorial list with checkboxes
   - Tracks completion in localStorage
   - Shows progress bar
   - Displays completion badge

2. **VideoEmbed** (`src/components/VideoEmbed/index.tsx`)
   - Embeds YouTube or Vimeo videos
   - Responsive 16:9 aspect ratio
   - Accessible iframe implementation

3. **Custom CSS** (`src/css/custom.css`)
   - IBM Design Language colors
   - IBM Plex Sans and Mono fonts
   - Tutorial-specific styles
   - Dark mode support

### File Structure

```
datastage-docs-testing/
├── docs/
│   ├── intro.md
│   └── tutorials/
│       ├── get-started.mdx              # Tutorial collection landing page
│       └── get-started/
│           ├── install-prerequisites.mdx
│           ├── deploy-engine.mdx
│           ├── connect-cloud-pak.mdx
│           ├── run-first-job.mdx
│           └── monitor-troubleshoot.mdx
├── src/
│   ├── components/
│   │   ├── TutorialChecklist/
│   │   │   └── index.tsx
│   │   └── VideoEmbed/
│   │       └── index.tsx
│   └── css/
│       └── custom.css
└── docusaurus.config.ts
```

## How It Works

### Progress Tracking

Progress is stored in browser localStorage with the key pattern:
```
tutorial-progress-{collectionId}
```

Example:
```javascript
localStorage.getItem('tutorial-progress-get-started')
// Returns: ["install-prerequisites", "deploy-engine"]
```

**Benefits:**
- No backend required
- Works offline
- Privacy-friendly
- Persists across sessions

**Limitations:**
- Doesn't sync across devices
- Lost if user clears browser data
- Per-browser storage

### Tutorial Collection Page

Example: `docs/tutorials/get-started.mdx`

```mdx
---
title: Get Started with DataStage Anywhere
---

import TutorialChecklist from '@site/src/components/TutorialChecklist';

# Get Started

<TutorialChecklist 
  collectionId="get-started"
  tutorials={[
    {
      id: 'install-prerequisites',
      title: 'Install Prerequisites',
      duration: '5 min',
      path: '/docs/tutorials/get-started/install-prerequisites'
    },
    // ... more tutorials
  ]}
/>
```

### Individual Tutorial Page

Example: `docs/tutorials/get-started/install-prerequisites.mdx`

```mdx
---
sidebar_position: 1
title: Install Prerequisites
---

import VideoEmbed from '@site/src/components/VideoEmbed';

# Install Prerequisites

⏱️ **Duration:** 5 minutes

<VideoEmbed 
  videoId="YOUR_VIDEO_ID" 
  platform="youtube"
  title="Tutorial Video"
/>

## Step 1: Install kubectl

\`\`\`bash
brew install kubectl
\`\`\`
```

## Customization Guide

### Change Colors

Edit `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #YOUR_COLOR;
  --ifm-color-primary-dark: #YOUR_DARK_COLOR;
  /* ... */
}
```

### Add New Tutorial Collection

1. Create directory: `docs/tutorials/your-collection/`
2. Create landing page: `docs/tutorials/your-collection.mdx`
3. Add tutorial pages in the directory
4. Use TutorialChecklist component with unique `collectionId`

### Change Video Platform

VideoEmbed supports YouTube and Vimeo:

```tsx
// YouTube (default)
<VideoEmbed videoId="dQw4w9WgXcQ" />

// Vimeo
<VideoEmbed videoId="123456789" platform="vimeo" />
```

### Modify Progress Tracking

To add features like:
- Reset progress button
- Export/import progress
- Sync across devices

Edit `src/components/TutorialChecklist/index.tsx`

Example - Add reset button:

```tsx
const resetProgress = () => {
  setCompletedTutorials(new Set());
  localStorage.removeItem(`tutorial-progress-${collectionId}`);
};

// In JSX:
<button onClick={resetProgress}>Reset Progress</button>
```

## Deployment

### Local Development

```bash
cd datastage-docs-testing
npm install
npm start
```

Site runs at: http://localhost:3000

### Build for Production

```bash
npm run build
npm run serve
```

### Deploy to GitHub Pages

1. Update `docusaurus.config.ts`:
   - Replace `YOUR-GITHUB-USERNAME` with your GitHub username
   - Verify `baseUrl` is `/datastage-docs-testing/`

2. Create GitHub repository named `datastage-docs-testing`

3. Push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/datastage-docs-testing.git
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Wait for deployment (2-3 minutes)

5. Access site:
   ```
   https://YOUR-USERNAME.github.io/datastage-docs-testing/
   ```

## Adding Content

### Create New Tutorial

1. Create MDX file in appropriate directory
2. Add frontmatter:
   ```yaml
   ---
   sidebar_position: 1
   title: Your Tutorial Title
   description: Brief description
   ---
   ```
3. Add to TutorialChecklist in collection page

### Add Images

1. Place images in `static/img/tutorials/`
2. Reference in markdown:
   ```markdown
   ![Alt text](/img/tutorials/your-image.png)
   ```

### Add Code Blocks

Use fenced code blocks with language:

````markdown
```bash
kubectl get pods
```

```yaml title="config.yaml"
apiVersion: v1
kind: Pod
```
````

### Add Admonitions

```markdown
:::tip
This is a helpful tip!
:::

:::warning
Be careful with this!
:::

:::info
Additional information
:::

:::success
You did it!
:::
```

## Troubleshooting

### Components Not Rendering

**Issue:** TutorialChecklist or VideoEmbed not showing

**Solution:** Verify import path uses `@site`:
```tsx
import TutorialChecklist from '@site/src/components/TutorialChecklist';
```

### Progress Not Saving

**Issue:** Checkboxes don't persist

**Solution:** Check browser console for localStorage errors. Ensure:
- localStorage is enabled
- No browser extensions blocking it
- Correct `collectionId` is used

### Videos Not Loading

**Issue:** Video embed shows blank

**Solution:**
- Verify video ID is correct
- Check video is public/embeddable
- Test video URL directly

### Build Errors

**Issue:** `npm run build` fails

**Solution:**
```bash
# Clear cache
npm run clear

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

## Future Enhancements

### Add Backend Sync (Optional)

To sync progress across devices:

1. Set up Firebase/Supabase
2. Add authentication
3. Modify TutorialChecklist to use cloud storage
4. Keep localStorage as fallback

### Add Quizzes

Install quiz plugin:
```bash
npm install @docusaurus/plugin-content-docs
```

### Add Search

Enable Algolia DocSearch or local search plugin.

### Add Analytics

Add Google Analytics or Plausible in `docusaurus.config.ts`:

```typescript
gtag: {
  trackingID: 'G-XXXXXXXXXX',
},
```

## Support

- **Documentation:** https://docusaurus.io/docs
- **IBM Design Language:** https://www.ibm.com/design/language/
- **Issues:** Create issue in GitHub repository

## License

Copyright © 2024 IBM Corporation. Built with Docusaurus.