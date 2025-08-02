interface PixelHeartProps {
  className?: string;
}

export const PixelHeart = ({ className = "w-4 h-4" }: PixelHeartProps) => {
  return (
    <svg 
      className={`${className} text-red-500`} 
      viewBox="0 0 16 16" 
      fill="currentColor"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Pixel heart pattern */}
      <g>
        {/* Top left part */}
        <rect x="2" y="3" width="1" height="1" />
        <rect x="3" y="2" width="1" height="1" />
        <rect x="4" y="2" width="1" height="1" />
        <rect x="5" y="3" width="1" height="1" />
        
        {/* Top right part */}
        <rect x="7" y="3" width="1" height="1" />
        <rect x="8" y="2" width="1" height="1" />
        <rect x="9" y="2" width="1" height="1" />
        <rect x="10" y="3" width="1" height="1" />
        
        {/* Middle sections */}
        <rect x="2" y="4" width="9" height="1" />
        <rect x="2" y="5" width="9" height="1" />
        <rect x="3" y="6" width="7" height="1" />
        <rect x="3" y="7" width="7" height="1" />
        <rect x="4" y="8" width="5" height="1" />
        <rect x="4" y="9" width="5" height="1" />
        <rect x="5" y="10" width="3" height="1" />
        <rect x="5" y="11" width="3" height="1" />
        <rect x="6" y="12" width="1" height="1" />
        <rect x="6" y="13" width="1" height="1" />
      </g>
    </svg>
  );
};