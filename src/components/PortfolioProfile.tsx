import { Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';
import profilePortrait from '@/assets/profile-portrait.png';
import { SkillIcon } from './SkillIcon';
import { PixelHeart } from './PixelHeart';
import CoinEffect from './CoinEffect';
import { useState } from 'react';

interface Skill {
  name: string;
  category: 'language' | 'framework' | 'database' | 'tool' | 'cloud';
}

const skills: Skill[] = [
  { name: 'C', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: 'HTML5', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Firebase', category: 'cloud' },
  { name: 'Azure', category: 'cloud' },
  { name: '.NET', category: 'framework' },
  { name: 'Angular', category: 'framework' },
  
  { name: 'Django', category: 'framework' },
  { name: 'FastAPI', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'NPM', category: 'tool' },
  { name: 'React', category: 'framework' },
  { name: 'React Native', category: 'framework' },
  { name: 'Vite', category: 'tool' },
  { name: 'Three.js', category: 'framework' },
  { name: 'TailwindCSS', category: 'framework' },
  { name: 'Web3.js', category: 'framework' },
  { name: 'WordPress', category: 'tool' },
  { name: 'WebGL', category: 'framework' },
  { name: 'MongoDB', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Supabase', category: 'database' },
  { name: 'Adobe', category: 'tool' },
  { name: 'Illustrator', category: 'tool' },
  { name: 'Figma', category: 'tool' },
];

const PortfolioProfile = () => {
  const [coins, setCoins] = useState<Array<{id: number, x: number, y: number}>>([]);

  const addCoin = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    const newCoin = { id: Date.now(), x, y };
    setCoins(prev => [...prev, newCoin]);
  };

  const removeCoin = (id: number) => {
    setCoins(prev => prev.filter(coin => coin.id !== id));
  };
  const biography = `Hello! I'm an undergrad student at SRMIST, Chennai, pursuing Computer Science and Engineering with a keen interest in full-stack web development. I'm passionate about programming and eager to deepen my knowledge in coding while blending it with my creative side.

Beyond academics, I love playing the guitar and exploring storytelling through visuals, animations, and illustrations. As I continue my academic and creative journey, I'm excited to dive into internships, workshops, and new opportunities to enhance my skills. I look forward to connecting with others and learning from their experiences!`;

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rajat-pandey-58a949257',
      icon: Linkedin,
      color: '#0077B5'
    },
    {
      name: 'Instagram', 
      url: 'https://www.instagram.com/zeber356',
      icon: Instagram,
      color: '#E4405F'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/blazehue',
      icon: Github,
      color: '#181717'
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/31117881',
      icon: ExternalLink,
      color: '#F48024'
    },
    {
      name: 'Email',
      url: 'mailto:pandrajat123@gmail.com',
      icon: Mail,
      color: '#EA4335'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="pixel-border bg-wood-light p-6 mb-6">
        <h1 className="text-4xl font-bold text-center mb-2 text-wood-darker">
          RAJAT PANDEY
        </h1>
        <div className="text-center text-wood-dark text-lg">PROFILE</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Portrait and Basic Info */}
        <div className="space-y-6">
          {/* Portrait */}
          <div className="pixel-border bg-wood-light p-4">
            <div className="w-full aspect-square bg-wood-medium pixel-border p-2">
              <img 
                src={profilePortrait} 
                alt="Rajat Pandey" 
                className="w-full h-full object-cover pixelated"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>

          {/* Name */}
          <div className="pixel-border bg-wood-medium p-4 text-center">
            <h2 className="text-2xl font-bold text-wood-darker">Rajat</h2>
          </div>

          {/* Status */}
          <div className="pixel-border bg-wood-light p-4">
            <div className="text-sm text-wood-dark mb-2">Status</div>
            <div className="text-wood-darker font-semibold">CS Student</div>
            <div className="text-wood-darker font-semibold">SRMIST Chennai</div>
          </div>
        </div>

        {/* Right Column - Biography and Skills */}
        <div className="lg:col-span-2 space-y-6">
          {/* Biography */}
          <div className="pixel-border bg-wood-light p-6">
            <h3 className="text-2xl font-bold text-wood-darker mb-4 text-center">
              Biography
            </h3>
            <div className="text-wood-dark leading-relaxed whitespace-pre-line">
              {biography}
            </div>
          </div>

          {/* Skills */}
          <div className="pixel-border bg-wood-light p-6">
            <h3 className="text-2xl font-bold text-wood-darker mb-4 text-center">
              Skillset
            </h3>
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3">
              {skills.map((skill, index) => (
                <div key={index} onClick={addCoin} className="cursor-pointer">
                  <SkillIcon skill={skill} />
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="pixel-border bg-wood-light p-6">
            <h3 className="text-2xl font-bold text-wood-darker mb-4 text-center">
              Connect
            </h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-button p-3 hover:bg-wood-light transition-all duration-150"
                    title={social.name}
                    onClick={addCoin}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-6 text-center">
        <div className="pixel-border bg-wood-light p-4">
          <div className="flex items-center justify-center gap-2 text-wood-darker font-semibold">
            <span>made with</span>
            <PixelHeart className="w-5 h-5 animate-pulse" />
            <span>by Rajat</span>
          </div>
        </div>
      </div>
      
      {/* Coin Effects */}
      {coins.map((coin) => (
        <CoinEffect
          key={coin.id}
          x={coin.x}
          y={coin.y}
          onComplete={() => removeCoin(coin.id)}
        />
      ))}
    </div>
  );
};

export default PortfolioProfile;