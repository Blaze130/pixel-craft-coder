import PortfolioProfile from '@/components/PortfolioProfile';
import backgroundImage from '@/assets/background.png';

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto py-8">
        <PortfolioProfile />
      </div>
    </div>
  );
};

export default Index;
