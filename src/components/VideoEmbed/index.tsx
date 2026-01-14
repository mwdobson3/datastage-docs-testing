import React from 'react';

interface VideoEmbedProps {
  videoId: string;
  platform?: 'youtube' | 'vimeo';
  title?: string;
}

export default function VideoEmbed({ 
  videoId, 
  platform = 'youtube',
  title = 'Tutorial Video'
}: VideoEmbedProps) {
  const embedUrl = platform === 'youtube' 
    ? `https://www.youtube.com/embed/${videoId}`
    : `https://player.vimeo.com/video/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

// Made with Bob
