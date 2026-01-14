import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';

interface Tutorial {
  id: string;
  title: string;
  duration: string;
  path: string;
}

interface TutorialChecklistProps {
  tutorials: Tutorial[];
  collectionId: string;
}

export default function TutorialChecklist({ tutorials, collectionId }: TutorialChecklistProps) {
  const [completedTutorials, setCompletedTutorials] = useState<Set<string>>(new Set());

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`tutorial-progress-${collectionId}`);
    if (saved) {
      try {
        setCompletedTutorials(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error('Failed to load tutorial progress:', e);
      }
    }
  }, [collectionId]);

  // Save progress to localStorage
  const toggleTutorial = (tutorialId: string) => {
    setCompletedTutorials(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tutorialId)) {
        newSet.delete(tutorialId);
      } else {
        newSet.add(tutorialId);
      }
      localStorage.setItem(`tutorial-progress-${collectionId}`, JSON.stringify([...newSet]));
      return newSet;
    });
  };

  const progress = tutorials.length > 0 ? (completedTutorials.size / tutorials.length) * 100 : 0;

  return (
    <div className="tutorial-progress">
      <div style={{ marginBottom: '1rem' }}>
        <div className="progress-bar-container">
          <span className="progress-bar-label">Progress</span>
          <span>{completedTutorials.size} of {tutorials.length} completed</span>
        </div>
        <div className="progress-bar-track">
          <div 
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ul className="tutorial-checklist">
        {tutorials.map((tutorial, index) => {
          const isCompleted = completedTutorials.has(tutorial.id);
          return (
            <li 
              key={tutorial.id} 
              className={`tutorial-item ${isCompleted ? 'completed' : ''}`}
            >
              <div 
                className={`tutorial-checkbox ${isCompleted ? 'checked' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleTutorial(tutorial.id);
                }}
                role="checkbox"
                aria-checked={isCompleted}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTutorial(tutorial.id);
                  }
                }}
              >
                {isCompleted && '✓'}
              </div>
              <div className="tutorial-info">
                <Link to={tutorial.path} className="tutorial-title">
                  {index + 1}. {tutorial.title}
                </Link>
                <div className="tutorial-duration">⏱️ {tutorial.duration}</div>
              </div>
            </li>
          );
        })}
      </ul>

      {completedTutorials.size === tutorials.length && tutorials.length > 0 && (
        <div className="completion-badge">
          🎉 Congratulations! You've completed all tutorials in this collection!
        </div>
      )}
    </div>
  );
}

// Made with Bob
