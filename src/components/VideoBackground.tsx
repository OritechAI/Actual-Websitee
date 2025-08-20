import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const VideoBackground = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      {isMobile ? (
        /* Mobile: Static background image */
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          }}
        />
      ) : (
        /* Desktop: Video background */
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          preload="metadata"
          poster="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        >
          <source src="/Robot Website.mp4" type="video/mp4" />
        </video>
      )}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>
  );
};

export default VideoBackground;