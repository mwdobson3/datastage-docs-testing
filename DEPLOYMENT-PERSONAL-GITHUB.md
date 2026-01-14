# Deployment Guide for Personal GitHub (github.com)

## Overview
Since IBM GitHub Enterprise has Actions disabled, we'll deploy to your personal GitHub account as a demonstration.

## Prerequisites
- Personal GitHub account (github.com)
- GitHub Desktop or git CLI

## Step 1: Update Configuration with Your Username

**IMPORTANT:** Before committing, replace `YOUR-GITHUB-USERNAME` in `docusaurus.config.ts` with your actual GitHub username.

Open `docusaurus.config.ts` and find/replace all instances of `YOUR-GITHUB-USERNAME` with your username.

For example, if your username is `johndoe`, change:
```typescript
url: 'https://YOUR-GITHUB-USERNAME.github.io',
```
to:
```typescript
url: 'https://johndoe.github.io',
```

Do this for all 4 occurrences in the file.

## Step 2: Create Repository on Personal GitHub

1. Go to: https://github.com/new
2. Repository name: `datastage-anywhere-docs`
3. Description: "DataStage Anywhere Remote Engine Documentation"
4. Visibility: **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 3: Connect Local Repository to GitHub

```bash
cd RemoteEngineDocumentation/datastage-anywhere-docs

# If git is not initialized yet
git init

# Add all files
git add .

# Commit
git commit -m "Initial Docusaurus setup for DataStage Anywhere docs"

# Add remote (replace YOUR-GITHUB-USERNAME with your username)
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/datastage-anywhere-docs.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR-GITHUB-USERNAME/datastage-anywhere-docs`
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. The page will auto-save

## Step 5: Monitor Deployment

1. Go to the "Actions" tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (green checkmark) - usually 2-3 minutes
4. If it fails, click on the workflow run to see error details

## Step 6: Access Your Site

Once deployment is complete, your site will be live at:
```
https://YOUR-GITHUB-USERNAME.github.io/datastage-anywhere-docs/
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

## Troubleshooting

### If the workflow fails:
1. Check the Actions tab for error messages
2. Verify that your `docusaurus.config.ts` has the correct username (no `YOUR-GITHUB-USERNAME` placeholders)
3. Ensure the repository is public
4. Check that GitHub Pages is enabled in Settings

### If the site shows 404:
1. Wait a few more minutes - initial deployment can take up to 5 minutes
2. Verify the URL matches your username and repo name
3. Check that the baseUrl in `docusaurus.config.ts` is `/datastage-anywhere-docs/`
4. Clear your browser cache

### If you see "There isn't a GitHub Pages site here":
1. Go to Settings → Pages
2. Verify Source is set to "GitHub Actions"
3. Check that the workflow completed successfully in the Actions tab

## Future Updates

After initial deployment, any push to `main` will automatically rebuild and deploy:

```bash
# Make changes
git add .
git commit -m "Update documentation"
git push
```

The site updates automatically within 2-3 minutes.

## Local Development

To test locally before pushing:

```bash
cd RemoteEngineDocumentation/datastage-anywhere-docs
npm start
```

Site will be at: http://localhost:3000

## Next Steps

Once the site is live and verified:
1. Show it to stakeholders as a proof of concept
2. Discuss with IBM IT about enabling GitHub Actions on enterprise GitHub
3. If Actions can't be enabled, consider alternative deployment methods:
   - Manual deployment to IBM Cloud
   - Deploy to Netlify/Vercel (free alternatives)
   - Self-hosted solution

## Alternative: Deploy to Netlify (If GitHub Pages Doesn't Work)

If you have issues with GitHub Pages, Netlify is a free alternative:

1. Go to: https://www.netlify.com
2. Sign up with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

Your site will be live at: `https://random-name.netlify.app` (you can customize the subdomain)