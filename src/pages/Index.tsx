
import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { Monitor, Smartphone, Cpu, Globe, Search, CircuitBoard, Code } from 'lucide-react';

const services = [
  {
    id: 'advertising',
    name: 'Product Design',
    icon: Monitor,
    description: 'Strategic digital campaigns that drive results and maximize ROI across all digital channels.',
    features: [
      'PPC Campaign Management',
      'Social Media Advertising',
      'Display & Banner Ads',
      'Conversion Optimization',
      'Analytics & Reporting'
    ]
  },
  {
    id: 'electronics',
    name: 'Electronics Research & Development',
    icon: Cpu,
    description: 'Innovative electronic solutions from concept to prototype, bringing your ideas to life.',
    features: [
      'Circuit Design & Analysis',
      'Prototype Development',
      'Component Selection',
      'Testing & Validation',
      'Documentation & Support'
    ]
  },
  {
    id: 'pcb-design',
    name: 'PCB Design',
    icon: CircuitBoard,
    description: 'Professional PCB design services from schematic to manufacturing-ready boards.',
    features: [
      'Schematic Design',
      'PCB Layout & Routing',
      'Signal Integrity Analysis',
      'Design Rule Checking',
      'Manufacturing Support'
    ]
  },
  {
    id: 'social-media',
    name: 'Social Media Marketing',
    icon: Smartphone,
    description: 'Build your brand presence and engage with your audience across all major social platforms.',
    features: [
      'Content Strategy & Creation',
      'Community Management',
      'Influencer Partnerships',
      'Social Media Analytics',
      'Brand Monitoring'
    ]
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    icon: Globe,
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'CMS Development',
      'API Integration',
      'Performance Optimization'
    ]
  },
  {
    id: 'seo',
    name: 'Search Engine Optimization (SEO)',
    icon: Search,
    description: 'Improve your search rankings and drive organic traffic with proven SEO strategies.',
    features: [
      'Keyword Research & Strategy',
      'On-page Optimization',
      'Technical SEO Audits',
      'Link Building Campaigns',
      'SEO Analytics & Reporting'
    ]
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    icon: Code,
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS & Android Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Maintenance & Updates'
    ]
  }
];

const Index = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Empower everyone, on every team
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Connect teams across all departments to quickly respond to challenges and deliver exceptional 
          service experiences with our comprehensive solutions.
        </p>
      </div>

      {/* Service Selection Buttons */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                selectedService.id === service.id
                  ? 'bg-white text-[#006eb9] shadow-lg border-2 border-[#006eb9]'
                  : 'bg-[#006eb9] text-white hover:bg-[#005a9a] shadow-md'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Service Content Area */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#006eb9] to-blue-600 rounded-br-full opacity-90"></div>
            <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl rotate-12 opacity-80"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#006eb9] to-blue-500 rounded-tl-full opacity-90"></div>
            
            {/* Content */}
            <div className="relative z-10 p-12">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#006eb9] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <selectedService.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedService.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {selectedService.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#006eb9] rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span>Expert team with proven results</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          </div>
                          <span>24/7 support and maintenance</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          </div>
                          <span>Scalable solutions for growth</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <button className="bg-[#006eb9] hover:bg-[#005a9a] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
                      Get Started
                    </button>
                    <button className="border-2 border-[#006eb9] text-[#006eb9] hover:bg-[#006eb9] hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to transform your business?
        </h2>
        <p className="text-gray-600 mb-8">
          Contact us today to discuss how we can help you achieve your goals.
        </p>
        <button className="bg-gradient-to-r from-[#006eb9] to-blue-600 hover:from-[#005a9a] hover:to-blue-700 text-white px-12 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default Index;
