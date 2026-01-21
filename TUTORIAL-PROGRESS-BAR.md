# Tutorial Progress Bar System

## Overview

The DataStage Anywhere documentation now features a **horizontal progress bar** at the top of each tutorial step page. This provides users with:

- Visual progress tracking across all tutorial steps
- Easy navigation between steps
- Automatic completion tracking
- Persistent progress saved in browser localStorage

## Features

### 1. Horizontal Layout
- **Position**: Top of the page, above the main content
- **Design**: Spans the full width with individual step cards
- **No Overlap**: Does not interfere with Docusaurus's right sidebar (table of contents)

### 2. Visual Indicators
- **Progress Percentage**: Shows overall completion (e.g., "40% Complete")
- **Step Counter**: Displays current position (e.g., "Step 2 of 6")
- **Step Cards**: Each step shown as a clickable card with:
  - Step number or checkmark (✓) when completed
  - Step title
  - Visual highlighting for current step
  - Green background for completed steps

### 3. Navigation
- **Previous Button**: Navigate to the previous step
- **Next Button**: Navigate to the next step
- **Completion Badge**: Shows "🎉 Tutorial Complete!" on the last step

### 4. Automatic Progress Tracking
- Steps are automatically marked as complete when you visit them
- Progress is saved in browser localStorage
- Progress persists across browser sessions
- Each tutorial has independent progress tracking

## Implementation

### Component Structure

```
src/components/TutorialProgressBar/
├── index.tsx       # Main React component
└── styles.css      # Styling for the progress bar
```

### Usage in Tutorial Pages

Each tutorial step page includes the progress bar at the top:

```mdx
---
sidebar_position: 1
title: Step Title
---

import TutorialProgressBar from '@site/src/components/TutorialProgressBar';

<TutorialProgressBar
  tutorialId="tutorial-name"
  currentStepId="step-id"
  steps={[
    { id: 'step-1', title: 'Step 1 Title', path: '/path/to/step-1' },
    { id: 'step-2', title: 'Step 2 Title', path: '/path/to/step-2' },
    // ... more steps
  ]}
/>

# Step Title

Your content here...
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `tutorialId` | string | Unique identifier for the tutorial (used for localStorage key) |
| `currentStepId` | string | ID of the current step being viewed |
| `steps` | Array<Step> | Array of all steps in the tutorial |

**Step Object:**
```typescript
{
  id: string;        // Unique step identifier
  title: string;     // Display title for the step
  path: string;      // Full path to the step page
}
```

## Current Tutorials

### 1. Getting Started (5 steps)
- Tutorial ID: `get-started`
- Steps: Install Prerequisites → Deploy Engine → Connect to Cloud Pak → Run First Job → Monitor & Troubleshoot

### 2. AWS Docker Engine (6 steps)
- Tutorial ID: `aws-docker-engine`
- Steps: Prerequisites → Launch EC2 → Install Docker → Generate Keys → Deploy Engine → Verify & Configure

### 3. AWS EKS Kubernetes (6 steps)
- Tutorial ID: `aws-eks-kubernetes`
- Steps: Prerequisites → Provision EKS → Configure kubectl → Prepare Config → Deploy Engine → Monitor & Verify

## Adding Progress Bar to New Tutorials

### Option 1: Manual Addition

1. Add the import at the top of your MDX file (after frontmatter):
```mdx
import TutorialProgressBar from '@site/src/components/TutorialProgressBar';
```

2. Add the component before your main heading:
```mdx
<TutorialProgressBar
  tutorialId="your-tutorial-id"
  currentStepId="current-step-id"
  steps={[
    // Define all steps here
  ]}
/>
```

### Option 2: Using the Script

We've created a helper script (`add-progress-bars.js`) that can automatically add progress bars to all tutorial pages.

**To use the script:**

1. Edit `add-progress-bars.js` and add your tutorial configuration:
```javascript
const tutorials = {
  'your-tutorial-name': {
    tutorialId: 'your-tutorial-id',
    steps: [
      { id: 'step-1', title: 'Step 1 Title', file: 'step-1.mdx' },
      { id: 'step-2', title: 'Step 2 Title', file: 'step-2.mdx' },
      // ... more steps
    ]
  }
};
```

2. Run the script:
```bash
node add-progress-bars.js
```

The script will:
- Check if progress bar already exists (won't duplicate)
- Add the import statement
- Insert the progress bar component
- Preserve all existing content

## Design Principles

### 1. Non-Intrusive
- Positioned at the top, doesn't block content
- Compact design that doesn't take up too much space
- Scrolls with the page naturally

### 2. User-Friendly
- Clear visual feedback on progress
- Easy navigation between steps
- Intuitive design with familiar patterns

### 3. Responsive
- Works on desktop and mobile devices
- Horizontal scrolling on small screens
- Touch-friendly navigation buttons

### 4. Accessible
- Proper color contrast
- Keyboard navigation support
- Screen reader friendly

## Technical Details

### localStorage Keys
Progress is stored with keys in the format:
```
tutorial_progress_{tutorialId}
```

Example: `tutorial_progress_get-started`

### Data Structure
```json
["step-1", "step-2", "step-3"]
```

An array of completed step IDs.

### SSR Compatibility
The component uses `ExecutionEnvironment.canUseDOM` to ensure it only renders on the client side, preventing SSR errors with localStorage.

## Styling

The progress bar uses:
- **IBM Design Language colors** for consistency
- **Gradient backgrounds** for visual appeal
- **Smooth transitions** for interactions
- **Dark mode support** via Docusaurus theme variables

### Key CSS Classes
- `.tutorial-progress-bar-container` - Main container
- `.tutorial-progress-track` - Step cards container
- `.tutorial-progress-step` - Individual step card
- `.tutorial-progress-step.current` - Current step styling
- `.tutorial-progress-step.completed` - Completed step styling
- `.tutorial-nav-button` - Navigation buttons

## Browser Support

Works in all modern browsers that support:
- ES6 JavaScript
- CSS Grid and Flexbox
- localStorage API
- React 18+

## Future Enhancements

Potential improvements:
- [ ] Add "Reset Progress" button
- [ ] Export/import progress
- [ ] Analytics integration
- [ ] Estimated time remaining
- [ ] Step dependencies (unlock steps sequentially)
- [ ] Tutorial completion certificates

## Troubleshooting

### Progress Not Saving
- Check browser localStorage is enabled
- Clear localStorage and try again: `localStorage.clear()`
- Check browser console for errors

### Progress Bar Not Showing
- Verify the component is imported correctly
- Check that all required props are provided
- Ensure the build completed successfully

### Styling Issues
- Clear browser cache
- Check for CSS conflicts
- Verify dark mode compatibility

## Related Files

- `src/components/TutorialProgressBar/index.tsx` - Main component
- `src/components/TutorialProgressBar/styles.css` - Styling
- `add-progress-bars.js` - Helper script for bulk updates
- Tutorial step files in `docs/tutorials/*/`

---

**Last Updated**: January 21, 2026  
**Component Version**: 1.0.0  
**Status**: ✅ Production Ready