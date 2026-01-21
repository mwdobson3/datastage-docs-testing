import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import './styles.css';

interface Step {
  id: string;
  title: string;
  link: string;
}

interface TutorialSidebarProps {
  tutorialId: string;
  currentStepId: string;
  steps: Step[];
}

export default function TutorialSidebar({ tutorialId, currentStepId, steps }: TutorialSidebarProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [isClient, setIsClient] = useState(false);

  // Load progress and mark current step as complete
  useEffect(() => {
    setIsClient(true);
    if (ExecutionEnvironment.canUseDOM) {
      const saved = localStorage.getItem(`tutorial-progress-${tutorialId}`);
      const completed = saved ? new Set<string>(JSON.parse(saved)) : new Set<string>();
      
      // Auto-mark current step as completed
      if (!completed.has(currentStepId)) {
        completed.add(currentStepId);
        localStorage.setItem(`tutorial-progress-${tutorialId}`, JSON.stringify([...completed]));
      }
      
      setCompletedSteps(completed);
    }
  }, [tutorialId, currentStepId]);

  const progress = steps.length > 0 ? (completedSteps.size / steps.length) * 100 : 0;
  const currentIndex = steps.findIndex(step => step.id === currentStepId);

  if (!isClient) {
    return null; // Don't render during SSR
  }

  return (
    <div className="tutorial-sidebar-compact">
      <div className="tutorial-sidebar-header">
        <h4>Tutorial Progress</h4>
        <span className="progress-text">{completedSteps.size}/{steps.length}</span>
      </div>

      <div className="progress-bar-track">
        <div 
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ul className="tutorial-sidebar-steps">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(step.id);
          const isCurrent = step.id === currentStepId;
          
          return (
            <li 
              key={step.id} 
              className={`tutorial-sidebar-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
            >
              <Link to={step.link} className="tutorial-sidebar-link">
                <div className="step-indicator">
                  {isCompleted ? '✓' : index + 1}
                </div>
                <span className="step-title">{step.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {currentIndex < steps.length - 1 && (
        <Link 
          to={steps[currentIndex + 1].link}
          className="tutorial-sidebar-next"
        >
          Next: {steps[currentIndex + 1].title} →
        </Link>
      )}

      {completedSteps.size === steps.length && (
        <div className="tutorial-sidebar-complete">
          🎉 Complete!
        </div>
      )}
    </div>
  );
}

// Made with Bob