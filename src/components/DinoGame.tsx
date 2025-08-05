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
        if (!gameStarted) {
          startGame();
        } else {
          jump();
        }
      }
    };

    const handleClick = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      if (!gameStarted) {
        startGame();
      } else {
        jump();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick, { passive: false });
    document.addEventListener('touchend', handleClick, { passive: false });
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
      document.removeEventListener('touchend', handleClick);
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
    <div className="fixed inset-0 bg-wood-darker flex items-center justify-center z-50">
      <div className="pixel-border bg-wood-light p-8 text-center max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-wood-darker mb-4">
          {!gameStarted ? 'Ready to Jump In?' : 'Jump to Avoid!'}
        </h2>
        
        <div className="relative h-32 bg-wood-medium pixel-border p-4 mb-4 overflow-hidden">
          {/* Dino */}
          <div 
            className={`absolute bottom-4 left-8 w-8 h-8 bg-wood-darker transition-all duration-300 ${
              isJumping ? 'bottom-16' : 'bottom-4'
            }`}
            style={{ 
              clipPath: 'polygon(0% 100%, 25% 0%, 75% 0%, 100% 100%)',
            }}
          />
          
          {/* Obstacle */}
          {gameStarted && (
            <div 
              className="absolute bottom-4 w-4 h-8 bg-wood-dark transition-all"
              style={{ 
                left: `${obstaclePosition}%`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }}
            />
          )}
          
          {/* Ground */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-wood-dark" />
        </div>

        {gameStarted && (
          <div className="text-wood-dark font-semibold mb-4">
            Score: {score}
          </div>
        )}

        <div className="space-y-2">
          {!gameStarted ? (
            <>
              <button 
                onClick={startGame}
                className="pixel-button bg-wood-medium text-wood-darker font-semibold px-4 py-2 w-full"
              >
                Start Game (Space/Click)
              </button>
              <button 
                onClick={skipGame}
                className="pixel-button bg-wood-light text-wood-dark px-4 py-2 w-full"
              >
                Skip to Portfolio
              </button>
            </>
          ) : (
            <div className="text-wood-dark text-sm">
              Space/Click/Tap to jump! Game ends in 4 seconds...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DinoGame;