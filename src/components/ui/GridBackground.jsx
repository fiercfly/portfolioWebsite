import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg/50 to-bg"></div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default GridBackground;
