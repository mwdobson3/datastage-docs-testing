# Deployment Guide for DataStage Anywhere Documentation

## Current Status
✅ Docusaurus site configured and ready to deploy
✅ GitHub Actions workflow created
✅ All files ready for commit

## Quick Deployment Steps

### 1. Commit All Files (Using GitHub Desktop)

1. Open GitHub Desktop
2. You should see all the new Docusaurus files listed
3. Add a commit message: "Initial Docusaurus setup for DataStage Anywhere docs"
4. Click "Commit to main"
5. Click "Push origin" to push to GitHub

### 2. Enable GitHub Actions (REQUIRED FIRST!)

**IMPORTANT:** GitHub Actions must be enabled before GitHub Pages will work.

1. Go to: https://github.ibm.com/Michael-Dobson/datastage-anywhere-docs/settings/actions
2. Under "Actions permissions":
   - Select **"Allow all actions and reusable workflows"**
   - OR select **"Allow [organization] actions and reusable workflows"**
3. Click "Save"

### 3. Enable GitHub Pages

1. Go to: https://github.ibm.com/Michael-Dobson/datastage-anywhere-docs/settings/pages
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
3. Click "Save"

**Note:** The site will be visible to all authenticated IBM users (repository is private).

### 4. Monitor Deployment

1. Go to: https://github.ibm.com/Michael-Dobson/datastage-anywhere-docs/actions
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Look for a green checkmark ✅

### 5. Access Your Site

Once deployment is complete, your site will be live at:
```
https://pages.github.ibm.com/Michael-Dobson/datastage-anywhere-docs/
```

## What Happens Next

After the basic site is deployed and verified:

1. **Phase 2: Content Creation**
   - Create documentation structure (Getting Started, Tutorials, Reference)
   - Build EKS Quick Start tutorial (<15 min)
   - Transform existing README into HashiCorp-style tutorials
   - Add configuration reference
   - Add troubleshooting guide

2. **Phase 3: Enhancements**
   - Add video embedding capability
   - Customize theme/styling
   - Add search functionality
   - Add version control for docs

## Future Updates

After initial deployment, any push to the `main` branch will automatically trigger a rebuild and deployment:

```bash
# Make changes to documentation
git add .
git commit -m "Update documentation"
git push
```

The site will automatically update within 2-3 minutes.

## Troubleshooting

### If GitHub Actions fails:
1. Check the Actions tab for error messages
2. Verify that GitHub Pages is enabled in repository settings
3. Ensure the workflow has proper permissions (should be automatic)

### If the site doesn't load:
1. Verify the baseUrl in `docusaurus.config.ts` matches: `/Michael-Dobson/datastage-anywhere-docs/`
2. Check that the URL is correct: `https://pages.github.ibm.com/Michael-Dobson/datastage-anywhere-docs/`
3. Clear your browser cache
4. Wait a few minutes - initial deployment can take up to 5 minutes

### If you need to rebuild manually:
1. Go to: https://github.ibm.com/Michael-Dobson/datastage-anywhere-docs/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button

## Local Development

To run the site locally for testing:

```bash
cd RemoteEngineDocumentation/datastage-anywhere-docs
npm start
```

The site will be available at: http://localhost:3000

To build the site locally (same as GitHub Actions does):

```bash
npm run build
npm run serve
```

This will build the static site and serve it locally for testing.

## Site Configuration

Key configuration files:
- `docusaurus.config.ts` - Main site configuration
- `sidebars.ts` - Navigation structure
- `.github/workflows/deploy.yml` - Deployment automation
- `docs/` - All documentation content
- `static/` - Images, videos, and other static assets

## Next Steps After Deployment

Once the site is live and verified:
1. Confirm the site loads correctly
2. Check that navigation works
3. Verify the IBM branding appears correctly
4. Then we'll start adding the actual DataStage documentation content