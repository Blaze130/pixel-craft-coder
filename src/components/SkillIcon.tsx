// Icon imports
import javascriptIcon from '@/assets/icons/javascript.png';
import typescriptIcon from '@/assets/icons/typescript.png';
import reactIcon from '@/assets/icons/react.png';
import nodejsIcon from '@/assets/icons/nodejs.png';
import html5Icon from '@/assets/icons/html5.png';
import cssIcon from '@/assets/icons/css.png';
import cIcon from '@/assets/icons/c.png';
import cppIcon from '@/assets/icons/cpp.png';
import pythonIcon from '@/assets/icons/python.png';
import mysqlIcon from '@/assets/icons/mysql.png';
import postgresqlIcon from '@/assets/icons/postgresql.png';
import mongodbIcon from '@/assets/icons/mongodb.png';
import githubIcon from '@/assets/icons/github.png';
import figmaIcon from '@/assets/icons/figma.png';
import firebaseIcon from '@/assets/icons/firebase.png';
import azureIcon from '@/assets/icons/azure.png';
import angularIcon from '@/assets/icons/angular.png';
import angularjsIcon from '@/assets/icons/angularjs.png';
import djangoIcon from '@/assets/icons/django.png';
import tailwindcssIcon from '@/assets/icons/tailwindcss.png';
import expressIcon from '@/assets/icons/express.png';
import nextjsIcon from '@/assets/icons/nextjs.png';
import npmIcon from '@/assets/icons/npm.png';
import wordpressIcon from '@/assets/icons/wordpress.png';
import illustratorIcon from '@/assets/icons/illustrator.png';
import adobeIcon from '@/assets/icons/adobe.png';
import blenderIcon from '@/assets/icons/blender.png';
import threejsIcon from '@/assets/icons/threejs.png';
import supabaseIcon from '@/assets/icons/supabase.png';
import aftereffectsIcon from '@/assets/icons/aftereffects.png';
import dotnetIcon from '@/assets/icons/dotnet.png';
import arduinoIcon from '@/assets/icons/arduino.png';
import unrealengineIcon from '@/assets/icons/unrealengine.png';
import webglIcon from '@/assets/icons/webgl.png';
import pandasIcon from '@/assets/icons/pandas.png';
import numpyIcon from '@/assets/icons/numpy.png';
import matplotlibIcon from '@/assets/icons/matplotlib.png';
import lightroomIcon from '@/assets/icons/lightroom.png';
import acrobatIcon from '@/assets/icons/acrobat.png';
import framerIcon from '@/assets/icons/framer.png';
import fastApiIcon from '@/assets/icons/fastapi.png';
import reactNativeIcon from '@/assets/icons/reactnative.png';
import viteIcon from '@/assets/icons/vite.png';
import web3jsIcon from '@/assets/icons/web3js.png';

interface Skill {
  name: string;
  category: 'language' | 'framework' | 'database' | 'tool' | 'cloud';
}

interface SkillIconProps {
  skill: Skill;
}

const getTechIcon = (skillName: string) => {
  const name = skillName.toLowerCase();
  
  // Technology specific icons mapping to imported images
  const techIcons: Record<string, string> = {
    'javascript': javascriptIcon,
    'typescript': typescriptIcon,
    'react': reactIcon,
    'node.js': nodejsIcon,
    'html5': html5Icon,
    'css3': cssIcon,
    'css': cssIcon,
    'c': cIcon,
    'c++': cppIcon,
    'python': pythonIcon,
    'mysql': mysqlIcon,
    'postgresql': postgresqlIcon,
    'mongodb': mongodbIcon,
    'figma': figmaIcon,
    'firebase': firebaseIcon,
    'azure': azureIcon,
    'angular': angularIcon,
    'angular.js': angularjsIcon,
    'django': djangoIcon,
    'tailwindcss': tailwindcssIcon,
    'express.js': expressIcon,
    'next.js': nextjsIcon,
    'npm': npmIcon,
    'wordpress': wordpressIcon,
    'illustrator': illustratorIcon,
    'adobe': adobeIcon,
    'after effects': aftereffectsIcon,
    'blender': blenderIcon,
    'three.js': threejsIcon,
    'supabase': supabaseIcon,
    '.net': dotnetIcon,
    'arduino': arduinoIcon,
    'unreal engine': unrealengineIcon,
    'webgl': webglIcon,
    'pandas': pandasIcon,
    'numpy': numpyIcon,
    'matplotlib': matplotlibIcon,
    'lightroom': lightroomIcon,
    'acrobat': acrobatIcon,
    'framer': framerIcon,
    'fastapi': fastApiIcon,
    'react native': reactNativeIcon,
    'vite': viteIcon,
    'web3.js': web3jsIcon,
  };

  return techIcons[name] || githubIcon; // Default fallback icon
};

export const SkillIcon = ({ skill }: SkillIconProps) => {
  const iconSrc = getTechIcon(skill.name);
  
  return (
    <div className="group relative">
      <div className="w-12 h-12 pixel-border bg-wood-lighter p-2 hover:bg-wood-light transition-all duration-150 hover:scale-105 flex items-center justify-center">
        <img 
          src={iconSrc}
          alt={skill.name}
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 
                      bg-wood-dark text-wood-lighter text-xs rounded opacity-0 group-hover:opacity-100 
                      transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none">
        {skill.name}
      </div>
    </div>
  );
};