import PortfolioProfile from '@/components/PortfolioProfile';
import DinoGame from '@/components/DinoGame';
import DarkModeToggle from '@/components/DarkModeToggle';
import backgroundImage from '@/assets/background.png';
import darkBackgroundImage from '@/assets/dark-background.png';
import { useState, useEffect } from 'react';

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleGameEnd = () => {
    setShowPreloader(false);
    setShowTransition(true);
  };

  const handleTransitionClick = () => {
    setShowTransition(false);
    setTimeout(() => setShowContent(true), 200);
  };

  const toggleDarkMode = (dark: boolean) => {
    // Add white flash transition
    document.body.style.transition = 'background-color 0.3s ease';
    if (dark) {
      document.body.style.backgroundColor = 'white';
      setTimeout(() => {
        setIsDarkMode(dark);
        document.documentElement.classList.add('dark');
        document.body.style.backgroundColor = '';
      }, 150);
    } else {
      document.body.style.backgroundColor = 'white';
      setTimeout(() => {
        setIsDarkMode(dark);
        document.documentElement.classList.remove('dark');
        document.body.style.backgroundColor = '';
      }, 150);
    }
  };

  useEffect(() => {
    // Initial load animation
    setTimeout(() => setIsLoaded(true), 100);
    
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
    return (
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <DinoGame onGameEnd={handleGameEnd} />
      </div>
    );
  }

  if (showTransition) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/95 transition-opacity duration-500">
        <button
          onClick={handleTransitionClick}
          onTouchStart={handleTransitionClick}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-fade-in pixel-border bg-wood-dark p-4 sm:p-6 pixel-font cursor-pointer hover:bg-wood-medium transition-colors duration-200"
        >
          LET'S GET INTO IT!
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen bg-cover bg-center bg-fixed relative transition-all duration-700 ${
        isDarkMode ? 'dark dark-mode-bg' : ''
      }`}
      style={{ 
        backgroundImage: isDarkMode 
          ? `url(${darkBackgroundImage})`
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
    </div>
  );
};

export default Index;
