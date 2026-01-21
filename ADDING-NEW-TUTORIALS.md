# Adding New Tutorials Guide

This guide explains how to add new tutorials to the DataStage Anywhere documentation site.

## Overview

The site has two types of tutorial content:
1. **Tutorial Introduction Pages** - Overview with progress tracking checklist
2. **Tutorial Step Pages** - Individual steps with sidebar progress tracker

## File Structure

```
docs/
├── tutorials/
│   ├── tutorials.mdx                    # Main "Getting Started" page
│   ├── your-tutorial-name.mdx           # Tutorial intro page
│   └── your-tutorial-name/              # Tutorial steps directory
│       ├── step-1.mdx
│       ├── step-2.mdx
│       └── step-3.mdx
```

## Step 1: Create Tutorial Introduction Page

Create `docs/tutorials/your-tutorial-name.mdx`:

```mdx
---
sidebar_position: 3
title: Your Tutorial Name
description: Brief description of what this tutorial covers
---

import TutorialChecklist from '@site/src/components/TutorialChecklist';

# Your Tutorial Title

Brief introduction explaining what users will learn.

## Tutorial Progress

<TutorialChecklist 
  tutorialId="your-tutorial-name"
  steps={[
    {
      id: 'step-1',
      title: 'Step 1 Title',
      description: 'Brief description',
      duration: '10 min',
      link: '/datastage-docs-testing/docs/tutorials/your-tutorial-name/step-1'
    },
    {
      id: 'step-2',
      title: 'Step 2 Title',
      description: 'Brief description',
      duration: '15 min',
      link: '/datastage-docs-testing/docs/tutorials/your-tutorial-name/step-2'
    }
  ]}
/>

## Why This Tutorial?

Explain the benefits and use cases.

## What You'll Learn

- ✅ First thing
- ✅ Second thing
- ✅ Third thing

## Architecture Overview

<div style={{textAlign: 'center', margin: '2rem 0'}}>
  <img 
    src="/datastage-docs-testing/img/your-architecture-diagram.png" 
    alt="Architecture Diagram" 
    style={{maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}
  />
</div>

## Prerequisites

Before starting, ensure you have:
- Requirement 1
- Requirement 2
- Requirement 3

## Time Estimate

⏱️ **Total Time**: 45-60 minutes

---

<div style={{textAlign: 'center', margin: '3rem 0'}}>
  <a 
    href="/datastage-docs-testing/docs/tutorials/your-tutorial-name/step-1" 
    className="button button--primary button--lg"
  >
    Start Tutorial →
  </a>
</div>
```

## Step 2: Create Tutorial Step Pages

Create `docs/tutorials/your-tutorial-name/step-1.mdx`:

```mdx
---
sidebar_position: 1
title: Step 1 Title
---

import TutorialSidebar from '@site/src/components/TutorialSidebar';

<div style={{display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'start'}}>
<div>

# Step 1 Title

⏱️ **Duration:** 10 minutes

Brief introduction to this step.

## What You'll Do

1. First task
2. Second task
3. Third task

## Instructions

### Substep 1

Detailed instructions...

```bash
# Example command
echo "Hello World"
```

### Substep 2

More instructions...

:::tip Pro Tip
Helpful tip for users
:::

:::warning Important
Critical information
:::

## Verification

How to verify this step was successful:

```bash
# Verification command
kubectl get pods
```

Expected output:
```
NAME                     READY   STATUS    RESTARTS   AGE
datastage-engine-xxx     1/1     Running   0          2m
```

## Troubleshooting

**Problem:** Common issue

**Solution:** How to fix it

## Next Steps

Brief preview of what's coming in the next step.

</div>

<TutorialSidebar 
  tutorialId="your-tutorial-name"
  currentStepId="step-1"
  steps={[
    { id: 'step-1', title: 'Step 1 Title', link: '/datastage-docs-testing/docs/tutorials/your-tutorial-name/step-1' },
    { id: 'step-2', title: 'Step 2 Title', link: '/datastage-docs-testing/docs/tutorials/your-tutorial-name/step-2' },
    { id: 'step-3', title: 'Step 3 Title', link: '/datastage-docs-testing/docs/tutorials/your-tutorial-name/step-3' }
  ]}
/>

</div>
```

**Important Notes:**
- The `<div>` wrapper creates a 2-column layout (content + sidebar)
- Update `currentStepId` for each step page
- The sidebar automatically marks steps as complete when visited
- Progress persists in browser localStorage

## Step 3: Update Sidebar Navigation

Edit `sidebars.ts` to add your tutorial to the navigation:

```typescript
{
  type: 'category',
  label: 'Examples',
  collapsed: false,
  items: [
    // ... existing tutorials ...
    {
      type: 'category',
      label: 'Your Tutorial Name',
      link: {
        type: 'doc',
        id: 'tutorials/your-tutorial-name',
      },
      items: [
        'tutorials/your-tutorial-name/step-1',
        'tutorials/your-tutorial-name/step-2',
        'tutorials/your-tutorial-name/step-3',
      ],
    },
  ],
},
```

## Step 4: Update Getting Started Page

Edit `docs/tutorials.mdx` to add a card for your tutorial:

```mdx
### Your Tutorial Name

Deploy DataStage on [platform/technology].

<div className="tutorial-card">
  <h3>🎯 Your Tutorial Name</h3>
  <p>Brief description of what this tutorial covers.</p>
  <ul>
    <li>Key feature 1</li>
    <li>Key feature 2</li>
    <li>Key feature 3</li>
  </ul>
  <a href="/datastage-docs-testing/docs/tutorials/your-tutorial-name" className="button button--primary">
    Start Tutorial →
  </a>
</div>
```

## Components Reference

### TutorialChecklist Component

Shows progress on tutorial intro pages.

**Props:**
- `tutorialId` (string): Unique ID for this tutorial
- `steps` (array): Array of step objects with:
  - `id` (string): Unique step ID
  - `title` (string): Step title
  - `description` (string): Brief description
  - `duration` (string): Time estimate
  - `link` (string): Full path to step page

### TutorialSidebar Component

Shows progress tracker on individual step pages.

**Props:**
- `tutorialId` (string): Same ID as intro page
- `currentStepId` (string): ID of current step
- `steps` (array): Array of step objects with:
  - `id` (string): Unique step ID
  - `title` (string): Step title
  - `link` (string): Full path to step page

## Best Practices

### Content Guidelines

1. **Be Concise**: Keep steps focused on one main task
2. **Use Code Blocks**: Always include copy-pasteable commands
3. **Add Verification**: Show users how to verify success
4. **Include Troubleshooting**: Address common issues
5. **Use Admonitions**: Highlight tips, warnings, and important info

### Admonition Types

```mdx
:::tip
Helpful tip
:::

:::info
General information
:::

:::warning
Important warning
:::

:::danger
Critical warning
:::
```

### Link Format

Always use full paths with base URL:
```
/datastage-docs-testing/docs/tutorials/your-tutorial-name/step-1
```

### Duration Estimates

Be realistic with time estimates:
- Simple configuration: 5-10 min
- Installation/setup: 10-15 min
- Complex deployment: 15-30 min

## Testing Your Tutorial

1. **Build the site:**
   ```bash
   cd datastage-docs-testing
   npm run build
   ```

2. **Test locally:**
   ```bash
   npm run serve
   ```

3. **Check:**
   - All links work
   - Progress tracking works
   - Sidebar appears on step pages
   - Images load correctly
   - Code blocks are formatted properly

## Deployment

After testing, deploy your changes:

```bash
git add .
git commit -m "Add [Your Tutorial Name] tutorial"
git push origin main
```

GitHub Actions will automatically build and deploy to:
https://mwdobson3.github.io/datastage-docs-testing/

## Example Tutorials

Reference these existing tutorials for examples:
- **AWS EKS (Kubernetes)**: `docs/tutorials/aws-eks-kubernetes/`
- **AWS Docker**: `docs/tutorials/aws-docker-engine/`
- **Get Started**: `docs/tutorials/get-started/`

## Need Help?

- Check existing tutorials for examples
- Review Docusaurus documentation: https://docusaurus.io/docs
- Test locally before deploying

---

**Made with Bob** 🤖