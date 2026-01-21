import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

interface Step {
  id: string;
  title: string;
  description: string;
  duration: string;
  link: string;
}

interface TutorialChecklistProps {
  tutorialId: string;
  steps: Step[];
}

export default function TutorialChecklist({ tutorialId, steps }: TutorialChecklistProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [isClient, setIsClient] = useState(false);

  // Only run on client side
  useEffect(() => {
    setIsClient(true);
    if (ExecutionEnvironment.canUseDOM) {
      const saved = localStorage.getItem(`tutorial-progress-${tutorialId}`);
      if (saved) {
        try {
          setCompletedSteps(new Set(JSON.parse(saved)));
        } catch (e) {
          console.error('Failed to load tutorial progress:', e);
        }
      }
    }
  }, [tutorialId]);

  // Save progress to localStorage
  const toggleStep = (stepId: string) => {
    if (!ExecutionEnvironment.canUseDOM) return;
    
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      localStorage.setItem(`tutorial-progress-${tutorialId}`, JSON.stringify([...newSet]));
      return newSet;
    });
  };

  const progress = steps.length > 0 ? (completedSteps.size / steps.length) * 100 : 0;

  // Render placeholder during SSR
  if (!isClient) {
    return (
      <div className="tutorial-progress">
        <div style={{ marginBottom: '1rem' }}>
          <div className="progress-bar-container">
            <span className="progress-bar-label">Progress</span>
            <span>0 of {steps.length} completed</span>
          </div>
          <div className="progress-bar-track">
            <div 
              className="progress-bar-fill"
              style={{ width: '0%' }}
            />
          </div>
        </div>

        <ul className="tutorial-checklist">
          {steps.map((step, index) => (
            <li 
              key={step.id} 
              className="tutorial-item"
            >
              <div className="tutorial-checkbox" />
              <div className="tutorial-info">
                <Link to={step.link} className="tutorial-title">
                  {index + 1}. {step.title}
                </Link>
                <div className="tutorial-duration">⏱️ {step.duration}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="tutorial-progress">
      <div style={{ marginBottom: '1rem' }}>
        <div className="progress-bar-container">
          <span className="progress-bar-label">Progress</span>
          <span>{completedSteps.size} of {steps.length} completed</span>
        </div>
        <div className="progress-bar-track">
          <div 
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ul className="tutorial-checklist">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(step.id);
          return (
            <li 
              key={step.id} 
              className={`tutorial-item ${isCompleted ? 'completed' : ''}`}
            >
              <div 
                className={`tutorial-checkbox ${isCompleted ? 'checked' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleStep(step.id);
                }}
                role="checkbox"
                aria-checked={isCompleted}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleStep(step.id);
                  }
                }}
              >
                {isCompleted && '✓'}
              </div>
              <div className="tutorial-info">
                <Link to={step.link} className="tutorial-title">
                  {index + 1}. {step.title}
                </Link>
                <div className="tutorial-duration">⏱️ {step.duration}</div>
              </div>
            </li>
          );
        })}
      </ul>

      {completedSteps.size === steps.length && steps.length > 0 && (
        <div className="completion-badge">
          🎉 Congratulations! You've completed all steps in this tutorial!
        </div>
      )}
    </div>
  );
}

// Made with Bob
