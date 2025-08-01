interface Skill {
  name: string;
  category: 'language' | 'framework' | 'database' | 'tool' | 'cloud';
}

interface SkillIconProps {
  skill: Skill;
}

const getSkillIcon = (skillName: string) => {
  const name = skillName.toLowerCase();
  
  // Generate a consistent color based on skill name
  const getSkillColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 60%, 45%)`;
  };

  // Simple abbreviation logic
  const getAbbreviation = (name: string) => {
    if (name.includes('.')) {
      return name.split('.')[0].slice(0, 2).toUpperCase();
    }
    if (name.includes(' ')) {
      return name.split(' ').map(word => word[0]).join('').toUpperCase();
    }
    if (name.length <= 3) {
      return name.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return {
    color: getSkillColor(name),
    abbreviation: getAbbreviation(skillName)
  };
};

export const SkillIcon = ({ skill }: SkillIconProps) => {
  const { color, abbreviation } = getSkillIcon(skill.name);
  
  return (
    <div 
      className="pixel-border aspect-square flex items-center justify-center text-xs font-bold text-white relative group cursor-pointer"
      style={{ backgroundColor: color }}
      title={skill.name}
    >
      <div className="text-shadow">{abbreviation}</div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-wood-darker text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
        {skill.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-wood-darker"></div>
      </div>
    </div>
  );
};