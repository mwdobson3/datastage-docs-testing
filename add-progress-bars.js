#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define tutorial configurations
const tutorials = {
  'get-started': {
    tutorialId: 'get-started',
    steps: [
      { id: 'install-prerequisites', title: 'Install Prerequisites', file: 'install-prerequisites.mdx' },
      { id: 'deploy-engine', title: 'Deploy Engine', file: 'deploy-engine.mdx' },
      { id: 'connect-cloud-pak', title: 'Connect to Cloud Pak', file: 'connect-cloud-pak.mdx' },
      { id: 'run-first-job', title: 'Run First Job', file: 'run-first-job.mdx' },
      { id: 'monitor-troubleshoot', title: 'Monitor & Troubleshoot', file: 'monitor-troubleshoot.mdx' },
    ]
  },
  'aws-docker-engine': {
    tutorialId: 'aws-docker-engine',
    steps: [
      { id: 'prerequisites', title: 'Prerequisites', file: 'prerequisites.mdx' },
      { id: 'launch-ec2', title: 'Launch EC2', file: 'launch-ec2.mdx' },
      { id: 'install-docker', title: 'Install Docker', file: 'install-docker.mdx' },
      { id: 'generate-keys', title: 'Generate Keys', file: 'generate-keys.mdx' },
      { id: 'deploy-engine', title: 'Deploy Engine', file: 'deploy-engine.mdx' },
      { id: 'verify-configure', title: 'Verify & Configure', file: 'verify-configure.mdx' },
    ]
  },
  'aws-eks-kubernetes': {
    tutorialId: 'aws-eks-kubernetes',
    steps: [
      { id: 'prerequisites', title: 'Prerequisites', file: 'prerequisites.mdx' },
      { id: 'provision-eks', title: 'Provision EKS', file: 'provision-eks.mdx' },
      { id: 'configure-kubectl', title: 'Configure kubectl', file: 'configure-kubectl.mdx' },
      { id: 'prepare-config', title: 'Prepare Config', file: 'prepare-config.mdx' },
      { id: 'deploy-engine', title: 'Deploy Engine', file: 'deploy-engine.mdx' },
      { id: 'monitor-verify', title: 'Monitor & Verify', file: 'monitor-verify.mdx' },
    ]
  }
};

function generateProgressBarComponent(tutorialId, currentStepId, steps) {
  const stepsArray = steps.map(step => 
    `    { id: '${step.id}', title: '${step.title}', path: '/datastage-docs-testing/docs/tutorials/${tutorialId}/${step.file.replace('.mdx', '')}' }`
  ).join(',\n');

  return `import TutorialProgressBar from '@site/src/components/TutorialProgressBar';

<TutorialProgressBar
  tutorialId="${tutorialId}"
  currentStepId="${currentStepId}"
  steps={[
${stepsArray},
  ]}
/>

`;
}

function addProgressBarToFile(tutorialName, step) {
  const filePath = path.join(__dirname, 'docs', 'tutorials', tutorialName, step.file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if progress bar already exists
  if (content.includes('TutorialProgressBar')) {
    console.log(`✓ Progress bar already exists in ${tutorialName}/${step.file}`);
    return;
  }

  // Find the end of frontmatter
  const frontmatterMatch = content.match(/^---\n[\s\S]*?\n---\n/);
  if (!frontmatterMatch) {
    console.log(`⚠️  No frontmatter found in ${tutorialName}/${step.file}`);
    return;
  }

  const frontmatter = frontmatterMatch[0];
  const restOfContent = content.substring(frontmatter.length);

  // Generate progress bar component
  const tutorial = tutorials[tutorialName];
  const progressBar = generateProgressBarComponent(tutorial.tutorialId, step.id, tutorial.steps);

  // Combine everything
  const newContent = frontmatter + '\n' + progressBar + restOfContent;

  // Write back to file
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✓ Added progress bar to ${tutorialName}/${step.file}`);
}

// Main execution
console.log('Adding progress bars to tutorial pages...\n');

Object.entries(tutorials).forEach(([tutorialName, config]) => {
  console.log(`\nProcessing ${tutorialName} tutorial:`);
  config.steps.forEach(step => {
    addProgressBarToFile(tutorialName, step);
  });
});

console.log('\n✅ Done! All progress bars have been added.');

// Made with Bob
