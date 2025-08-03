import PortfolioProfile from '@/components/PortfolioProfile';
import DinoGame from '@/components/DinoGame';
import DarkModeToggle from '@/components/DarkModeToggle';
import backgroundImage from '@/assets/background.png';
import { useState, useEffect } from 'react';

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleGameEnd = () => {
    setShowPreloader(false);
    setTimeout(() => setShowContent(true), 100);
  };

  const toggleDarkMode = (dark: boolean) => {
    setIsDarkMode(dark);
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (!showPreloader && showContent) {
      // Trigger animations for content sections
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, index * 200);
      });
    }
  }, [showPreloader, showContent]);

  if (showPreloader) {
    return <DinoGame onGameEnd={handleGameEnd} />;
  }

  return (
    <div 
      className={`min-h-screen bg-cover bg-center bg-fixed relative transition-all duration-500 ${
        isDarkMode ? 'dark' : ''
      }`}
      style={{ 
        backgroundImage: isDarkMode 
          ? 'linear-gradient(45deg, hsl(var(--dark-bg-primary)) 25%, hsl(var(--dark-bg-secondary)) 25%, hsl(var(--dark-bg-secondary)) 50%, hsl(var(--dark-bg-primary)) 50%, hsl(var(--dark-bg-primary)) 75%, hsl(var(--dark-bg-secondary)) 75%), linear-gradient(45deg, hsl(var(--dark-bg-primary)) 25%, hsl(var(--dark-bg-secondary)) 25%, hsl(var(--dark-bg-secondary)) 50%, hsl(var(--dark-bg-primary)) 50%, hsl(var(--dark-bg-primary)) 75%, hsl(var(--dark-bg-secondary)) 75%)'
          : `url(${backgroundImage})`
      }}
    >
      {/* Dark Mode Toggle */}
      <DarkModeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
      
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      {/* Content */}
      <div className={`relative z-10 container mx-auto py-8 transition-all duration-700 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="animate-on-load">
          <PortfolioProfile />
        </div>
      </div>
      
      {/* "LET'S GET INTO IT!" text overlay */}
      {!showPreloader && !showContent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-wood-darker/90">
          <h1 className="text-4xl font-bold text-wood-lighter animate-pulse pixel-border bg-wood-light p-6">
            LET'S GET INTO IT!
          </h1>
        </div>
      )}
    </div>
  );
};

export default Index;
