
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  isActive: boolean;
}

const ServiceCard = ({ title, description, icon: Icon, features, isActive }: ServiceCardProps) => {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-100 to-transparent rounded-tr-full"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#006eb9] to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#006eb9] rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button className="mt-6 bg-[#006eb9] hover:bg-[#005a9a] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
