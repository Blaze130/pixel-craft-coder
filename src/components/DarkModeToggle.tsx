import { Moon, Sun, Lightbulb } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: (dark: boolean) => void;
}

const DarkModeToggle = ({ isDark, onToggle }: DarkModeToggleProps) => {
  return (
    <div className="fixed top-4 right-4 z-40 pixel-border bg-wood-light p-3">
      <div className="flex items-center gap-3">
        {/* Pixel Lamp */}
        <div className="relative">
          <Lightbulb 
            size={24} 
            className={`transition-colors duration-300 ${
              isDark ? 'text-wood-dark' : 'text-yellow-500'
            }`}
            fill={isDark ? 'currentColor' : '#EAB308'}
          />
          {!isDark && (
            <div className="absolute inset-0 animate-pulse">
              <Lightbulb 
                size={24} 
                className="text-yellow-300 opacity-50"
                fill="currentColor"
              />
            </div>
          )}
        </div>
        
        {/* Toggle Switch */}
        <Switch
          checked={isDark}
          onCheckedChange={onToggle}
          className="data-[state=checked]:bg-wood-dark data-[state=unchecked]:bg-wood-medium"
        />
        
        {/* Mode Icons */}
        <div className="flex items-center gap-1">
          <Sun size={16} className={`${!isDark ? 'text-yellow-500' : 'text-wood-dark'}`} />
          <Moon size={16} className={`${isDark ? 'text-blue-400' : 'text-wood-dark'}`} />
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;