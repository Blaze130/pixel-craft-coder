import { useState, useEffect } from 'react';

interface CoinEffectProps {
  x: number;
  y: number;
  value?: number;
  onComplete: () => void;
}

const CoinEffect = ({ x, y, value = 1, onComplete }: CoinEffectProps) => {
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
      className="fixed pointer-events-none z-50"
      style={{
        left: x - 30,
        top: y - 30,
        animation: value >= 50 ? 'coinFloatBig 1s ease-out' : 'coinFloat 0.8s ease-out'
      }}
    >
      <div className={`pixel-font text-shadow select-none ${
        value >= 50 
          ? 'text-3xl text-yellow-400' 
          : 'text-2xl text-yellow-500'
      }`}>
        +{value} 🪙
      </div>
      <style>{`
        @keyframes coinFloat {
          0% {
            transform: translateY(0px) scale(0.8);
            opacity: 1;
          }
          50% {
            transform: translateY(-25px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-50px) scale(0.6);
            opacity: 0;
          }
        }
        @keyframes coinFloatBig {
          0% {
            transform: translateY(0px) scale(0.9);
            opacity: 1;
          }
          25% {
            transform: translateY(-15px) scale(1.2);
            opacity: 1;
          }
          75% {
            transform: translateY(-35px) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-60px) scale(0.7);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CoinEffect;