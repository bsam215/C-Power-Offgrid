import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, ArrowRight, X, Maximize2 } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Solar', 'BESS', 'Hybrid', 'Microgrid'];
  const locations = ['All', 'North America', 'Africa', 'Asia'];

  const projects = [
    {
      title: 'Mountain Solar Farm',
      location: 'Utah, USA',
      region: 'North America',
      type: 'Solar',
      capacity: '5MW',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
      description: 'Large-scale solar installation providing clean energy to 2,000+ homes in a challenging alpine environment.',
      challenges: ['High altitude', 'Snow load', 'Remote access'],
      solution: 'Custom mounting systems with enhanced snow shedding and helicopter-assisted installation.',
    },
    {
      title: 'Village Microgrid',
      location: 'Tanzania',
      region: 'Africa',
      type: 'Microgrid',
      capacity: '250kW',
      image: 'https://images.unsplash.com/photo-1548613053-220e75374b2f?w=1200&h=800&fit=crop',
      description: 'Community-scale power system bringing reliable electricity to a remote village for the first time.',
      challenges: ['No grid infrastructure', 'Limited maintenance access', 'Budget constraints'],
      solution: 'Modular solar + battery system with local technician training program.',
    },
    {
      title: 'Industrial Hybrid System',
      location: 'Nevada, USA',
      region: 'North America',
      type: 'Hybrid',
      capacity: '2MW',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1200&h=800&fit=crop',
      description: 'Mining operation hybrid power system combining solar, batteries, and diesel generators.',
      challenges: ['24/7 reliability required', 'Extreme temperatures', 'Dusty environment'],
      solution: 'Redundant N+1 design with automated generator control and specialized air filtration.',
    },
    {
      title: 'School Electrification',
      location: 'Kenya',
      region: 'Africa',
      type: 'Solar',
      capacity: '50kW',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop',
      description: 'Solar power system for rural school enabling computer labs and evening study programs.',
      challenges: ['Limited budget', 'Seasonal weather', 'Security concerns'],
      solution: 'Phased deployment with community ownership model and secure equipment housing.',
    },
    {
      title: 'Resort BESS Installation',
      location: 'Hawaii, USA',
      region: 'North America',
      type: 'BESS',
      capacity: '500kWh',
      image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1200&h=800&fit=crop',
      description: 'Battery storage system for luxury resort ensuring uninterrupted power during grid outages.',
      challenges: ['Aesthetic requirements', 'Salt air corrosion', 'Noise restrictions'],
      solution: 'Custom enclosure design with marine-grade components and silent operation mode.',
    },
    {
      title: 'Clinic Power System',
      location: 'Nepal',
      region: 'Asia',
      type: 'Hybrid',
      capacity: '30kW',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
      description: 'Critical healthcare facility power system with vaccine refrigeration capability.',
      challenges: ['Mountainous terrain', 'Monsoon season', 'Critical load requirements'],
      solution: 'Elevated installation with flood protection and medical-grade UPS integration.',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop)',
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
            Global<br />
            <span className="text-gradient">Project Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto"
          >
            500+ installations across three continents delivering measurable impact
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-secondary text-white'
                      : 'bg-background text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="text-text-secondary font-mono">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-secondary bg-background/80 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                    <Maximize2 className="w-5 h-5 text-text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <div className="flex items-center text-text-secondary text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="text-sm font-mono text-interactive">{project.capacity}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-background rounded-2xl max-w-4xl w-full my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 md:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-sm font-mono text-secondary bg-secondary/10 px-4 py-2 rounded-full">
                  {selectedProject.type}
                </span>
                <div className="flex items-center text-text-secondary">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedProject.location}, {selectedProject.region}
                </div>
                <div className="flex items-center text-interactive font-mono">
                  <Zap className="w-4 h-4 mr-2" />
                  {selectedProject.capacity}
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-text-secondary text-lg mb-8">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="text-text-secondary flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    Solution
                  </h3>
                  <p className="text-text-secondary">{selectedProject.solution}</p>
                </div>
              </div>
              
              <a href="/contact" className="btn-primary inline-flex items-center">
                Start Similar Project <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
