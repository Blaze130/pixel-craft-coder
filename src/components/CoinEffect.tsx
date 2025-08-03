import { useState, useEffect } from 'react';

interface CoinEffectProps {
  x: number;
  y: number;
  onComplete: () => void;
}

const CoinEffect = ({ x, y, onComplete }: CoinEffectProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 animate-fade-out"
      style={{
        left: x - 20,
        top: y - 20,
        animation: 'coinFloat 0.8s ease-out'
      }}
    >
      <div className="text-2xl font-bold text-yellow-500 text-shadow select-none">
        +1 🪙
      </div>
      <style>{`
        @keyframes coinFloat {
          0% {
            transform: translateY(0px) scale(0.8);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-40px) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CoinEffect;