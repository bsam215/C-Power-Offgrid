import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Wrench, Home, Building, Factory, Globe, ArrowRight, X } from 'lucide-react';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const filters = ['All', 'Residential', 'Commercial', 'Community', 'Industrial', 'Humanitarian'];

  const services = [
    {
      category: 'Residential',
      title: 'Home Solar Systems',
      description: 'Complete energy independence for your home with solar + storage solutions.',
      icon: Home,
      features: ['5-20kW systems', 'Battery backup', 'Smart monitoring', 'Grid-tied or off-grid'],
    },
    {
      category: 'Commercial',
      title: 'Business Energy Solutions',
      description: 'Reduce operating costs and ensure business continuity with reliable power.',
      icon: Building,
      features: ['50-500kW installations', 'Demand charge management', 'UPS integration', 'ROI analysis'],
    },
    {
      category: 'Industrial',
      title: 'Industrial Power Systems',
      description: 'Heavy-duty energy infrastructure for mining, manufacturing, and processing.',
      icon: Factory,
      features: ['1MW+ capacity', 'Hybrid generator integration', 'Harsh environment rated', '24/7 support'],
    },
    {
      category: 'Community',
      title: 'Microgrid Development',
      description: 'Village-scale power systems bringing electricity to underserved communities.',
      icon: Globe,
      features: ['100kW-5MW systems', 'Community training', 'Maintenance programs', 'Financing options'],
    },
    {
      category: 'Humanitarian',
      title: 'Critical Infrastructure',
      description: 'Power for schools, clinics, and emergency response in remote locations.',
      icon: Zap,
      features: ['Rapid deployment', 'Ruggedized equipment', 'Donor coordination', 'Impact reporting'],
    },
    {
      category: 'Residential',
      title: 'BESS Solutions',
      description: 'Battery Energy Storage Systems for backup power and energy arbitrage.',
      icon: Battery,
      features: ['LFP chemistry', '10-100kWh capacity', 'Seamless transfer', 'Mobile app control'],
    },
  ];

  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(s => s.category === activeFilter);

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'We assess your needs, site conditions, and energy goals.' },
    { step: '02', title: 'Design', description: 'Custom engineering with detailed specifications and modeling.' },
    { step: '03', title: 'Procurement', description: 'Sourcing premium components from trusted manufacturers.' },
    { step: '04', title: 'Construction', description: 'Professional installation by certified technicians.' },
    { step: '05', title: 'Commissioning', description: 'System testing, optimization, and handover training.' },
    { step: '06', title: 'Operation', description: 'Ongoing monitoring, maintenance, and support.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-heading-mobile md:text-heading-desktop mb-6"
          >
            Comprehensive<br />
            <span className="text-gradient">Energy Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto"
          >
            From design to operation, we handle every aspect of your energy system
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-secondary text-white'
                    : 'bg-background text-text-secondary hover:text-text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-glass group cursor-pointer hover:border-secondary/50 transition-all duration-300"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex items-start justify-between mb-4">
                  <service.icon className="w-12 h-12 text-secondary" />
                  <span className="text-xs font-mono text-text-secondary bg-background px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                <div className="flex items-center text-secondary font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore Details <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Visualizer */}
      <section className="section-padding bg-background/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              A proven methodology refined over 500+ projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-heading font-bold text-primary">
                  {step.step}
                </div>
                <div className="border-l-2 border-secondary/30 absolute left-6 top-12 bottom-0" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Tool */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">System Comparison</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Choose the right configuration for your needs
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full card-glass">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 font-heading">Feature</th>
                  <th className="text-center p-4 font-heading">Off-Grid</th>
                  <th className="text-center p-4 font-heading">Hybrid</th>
                  <th className="text-center p-4 font-heading">Grid-Tied</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Energy Independence', offGrid: '100%', hybrid: 'Partial', gridTied: 'None' },
                  { feature: 'Battery Required', offGrid: 'Yes', hybrid: 'Optional', gridTied: 'No' },
                  { feature: 'Generator Backup', offGrid: 'Recommended', hybrid: 'Optional', gridTied: 'Not needed' },
                  { feature: 'Initial Cost', offGrid: '$$$', hybrid: '$$', gridTied: '$' },
                  { feature: 'Best For', offGrid: 'Remote locations', hybrid: 'Unreliable grid', gridTied: 'Stable grid areas' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5 last:border-0">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="text-center p-4 text-text-secondary">{row.offGrid}</td>
                    <td className="text-center p-4 text-text-secondary">{row.hybrid}</td>
                    <td className="text-center p-4 text-text-secondary">{row.gridTied}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="card-glass max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <selectedService.icon className="w-12 h-12 text-secondary" />
              <button
                onClick={() => setSelectedService(null)}
                className="text-text-secondary hover:text-text-primary"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <h2 className="text-3xl font-bold mb-4">{selectedService.title}</h2>
            <p className="text-text-secondary mb-6">{selectedService.description}</p>
            <h3 className="font-bold mb-3">Key Features:</h3>
            <ul className="space-y-2 mb-8">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-center text-text-secondary">
                  <Zap className="w-4 h-4 text-secondary mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="/contact" className="btn-primary inline-block w-full text-center">
              Request Quote
            </a>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
