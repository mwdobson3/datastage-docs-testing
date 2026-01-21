import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import './styles.css';

interface Step {
  id: string;
  title: string;
  path: string;
}

interface TutorialProgressBarProps {
  tutorialId: string;
  currentStepId: string;
  steps: Step[];
}

const TutorialProgressBar: React.FC<TutorialProgressBarProps> = ({
  tutorialId,
  currentStepId,
  steps,
}) => {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    // Load completed steps from localStorage
    const storageKey = `tutorial_progress_${tutorialId}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedSteps(new Set(parsed));
      } catch (e) {
        console.error('Failed to parse tutorial progress:', e);
      }
    }

    // Mark current step as complete
    const savedSteps: string[] = saved ? JSON.parse(saved) : [];
    const newCompleted = new Set<string>(savedSteps);
    newCompleted.add(currentStepId);
    setCompletedSteps(newCompleted);
    localStorage.setItem(storageKey, JSON.stringify([...newCompleted]));
  }, [tutorialId, currentStepId]);

  if (!isClient) {
    return null; // Don't render on server
  }

  const currentIndex = steps.findIndex(step => step.id === currentStepId);
  const nextStep = currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;
  const prevStep = currentIndex > 0 ? steps[currentIndex - 1] : null;
  const progress = ((completedSteps.size / steps.length) * 100).toFixed(0);

  return (
    <div className="tutorial-progress-bar-container">
      <div className="tutorial-progress-bar-header">
        <div className="tutorial-progress-info">
          <span className="tutorial-progress-label">Tutorial Progress</span>
          <span className="tutorial-progress-percentage">{progress}% Complete</span>
        </div>
        <div className="tutorial-progress-steps-count">
          Step {currentIndex + 1} of {steps.length}
        </div>
      </div>

      <div className="tutorial-progress-track">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(step.id);
          const isCurrent = step.id === currentStepId;
          const stepNumber = index + 1;

          return (
            <Link
              key={step.id}
              to={step.path}
              className={`tutorial-progress-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
              title={`${stepNumber}. ${step.title}`}
            >
              <div className="tutorial-progress-step-indicator">
                {isCompleted ? '✓' : stepNumber}
              </div>
              <div className="tutorial-progress-step-title">{step.title}</div>
            </Link>
          );
        })}
      </div>

      <div className="tutorial-progress-navigation">
        {prevStep && (
          <Link to={prevStep.path} className="tutorial-nav-button tutorial-nav-prev">
            ← Previous: {prevStep.title}
          </Link>
        )}
        {nextStep && (
          <Link to={nextStep.path} className="tutorial-nav-button tutorial-nav-next">
            Next: {nextStep.title} →
          </Link>
        )}
        {!nextStep && (
          <div className="tutorial-complete-badge">
            🎉 Tutorial Complete!
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialProgressBar;

// Made with Bob
