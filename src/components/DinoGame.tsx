import { useState, useEffect, useCallback } from 'react';

interface DinoGameProps {
  onGameEnd: () => void;
}

const DinoGame = ({ onGameEnd }: DinoGameProps) => {
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [obstaclePosition, setObstaclePosition] = useState(100);

  const jump = useCallback(() => {
    if (!isJumping && gameStarted) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 400);
    }
  }, [isJumping, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setObstaclePosition(100);
  };

  const skipGame = () => {
    onGameEnd();
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        if (!gameStarted) {
          startGame();
        } else {
          jump();
        }
      }
    };

    // Add keydown listener to window for better compatibility
    window.addEventListener('keydown', handleKeyPress, { capture: true });
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress, { capture: true });
    };
  }, [jump, gameStarted]);

  useEffect(() => {
    if (!gameStarted) return;

    const gameInterval = setInterval(() => {
      setObstaclePosition(prev => {
        if (prev <= -10) {
          setScore(s => s + 1);
          return 100;
        }
        return prev - 2;
      });
    }, 50);

    // Auto-end game after 4 seconds
    const gameTimer = setTimeout(() => {
      onGameEnd();
    }, 4000);

    return () => {
      clearInterval(gameInterval);
      clearTimeout(gameTimer);
    };
  }, [gameStarted, onGameEnd]);

  return (
    <div className="fixed inset-0 bg-wood-darker flex items-center justify-center z-50 animate-fade-in">
      <div className="pixel-border bg-wood-light p-4 sm:p-6 md:p-8 text-center max-w-xs sm:max-w-sm md:max-w-md w-full mx-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-wood-darker mb-3 sm:mb-4">
          {!gameStarted ? 'Ready to Jump In?' : 'Jump to Avoid!'}
        </h2>
        
        <div 
          className="relative h-24 sm:h-28 md:h-32 bg-wood-medium pixel-border p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 overflow-hidden cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!gameStarted) {
              startGame();
            } else {
              jump();
            }
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!gameStarted) {
              startGame();
            } else {
              jump();
            }
          }}
        >
          {/* Dino */}
          <div 
            className={`absolute left-4 sm:left-6 md:left-8 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-wood-darker transition-all duration-200 ease-out ${
              isJumping ? 'bottom-12 sm:bottom-14 md:bottom-16' : 'bottom-3 sm:bottom-3 md:bottom-4'
            }`}
            style={{ 
              clipPath: 'polygon(0% 100%, 25% 0%, 75% 0%, 100% 100%)',
            }}
          />
          
          {/* Obstacle */}
          {gameStarted && (
            <div 
              className="absolute bottom-3 sm:bottom-3 md:bottom-4 w-3 sm:w-3 md:w-4 h-6 sm:h-7 md:h-8 bg-wood-dark transition-all ease-linear"
              style={{ 
                left: `${obstaclePosition}%`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }}
            />
          )}
          
          {/* Ground */}
          <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 md:h-2 bg-wood-dark" />
        </div>

        {gameStarted && (
          <div className="text-wood-dark font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Score: {score}
          </div>
        )}

        <div className="space-y-2">
          {!gameStarted ? (
            <>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  startGame();
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  startGame();
                }}
                className="pixel-button bg-wood-medium text-wood-darker font-semibold px-3 sm:px-4 py-2 w-full text-sm sm:text-base"
              >
                Start Game (Space/Click/Tap)
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  skipGame();
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  skipGame();
                }}
                className="pixel-button bg-wood-light text-wood-dark px-3 sm:px-4 py-2 w-full text-sm sm:text-base"
              >
                Skip to Portfolio
              </button>
            </>
          ) : (
            <div className="text-wood-dark text-xs sm:text-sm">
              Space/Click/Tap to jump! Game ends in 4 seconds...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DinoGame;