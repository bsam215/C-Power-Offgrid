import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Target, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2005', title: 'Company Founded', description: 'Marshall DeMasters establishes OffGrid Power with a vision for energy independence.' },
    { year: '2010', title: '100th Project', description: 'Completed our 100th installation across North America.' },
    { year: '2015', title: 'Global Expansion', description: 'Expanded operations to Africa and Asia, bringing power to remote communities.' },
    { year: '2020', title: '500+ Projects', description: 'Reached milestone of 500+ successful installations worldwide.' },
    { year: '2024', title: 'Industry Leadership', description: 'Recognized as a top EPC firm for off-grid and hybrid solutions.' },
  ];

  const values = [
    { icon: Award, title: 'Engineering Excellence', description: 'Every design undergoes rigorous analysis. We don\'t cut corners—we set standards.', example: 'ISO 9001 certified processes' },
    { icon: Shield, title: 'Absolute Transparency', description: 'Clear pricing, honest timelines, no hidden fees. What we quote is what you pay.', example: 'Fixed-price contracts available' },
    { icon: Target, title: 'Mission Focus', description: 'We only do energy systems. Deep specialization means superior results.', example: '100% focus on renewable energy' },
    { icon: Lightbulb, title: 'Innovation First', description: 'Continuously evaluating new technologies to deliver cutting-edge solutions.', example: 'Early adopters of LFP battery tech' },
    { icon: Users, title: 'Community Impact', description: 'Beyond business—powering schools, clinics, and economic development.', example: 'Humanitarian projects in 12 countries' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop)',
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
            19 Years of<br />
            <span className="text-gradient">Engineering Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto"
          >
            From remote mountain cabins to village microgrids, we engineer energy 
            freedom for those who need it most.
          </motion.p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                alt="Marshall DeMasters - Founder"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">A Mission Born from Experience</h2>
              <div className="space-y-4 text-text-secondary text-lg">
                <p>
                  "I grew up in remote areas where power was unreliable—or non-existent. 
                  I saw firsthand how energy poverty limits opportunity, education, and 
                  economic growth."
                </p>
                <p>
                  "When I founded OffGrid Power in 2005, the goal wasn't just to build 
                  solar systems. It was to give communities, businesses, and families 
                  the foundation they need to thrive."
                </p>
                <p>
                  "Today, our team has completed over 500 projects across three continents. 
                  But every new installation feels like the first—because we know we're 
                  not just delivering equipment. We're delivering possibility."
                </p>
                <div className="pt-6">
                  <p className="font-heading font-bold text-text-primary text-xl">
                    Marshall DeMasters
                  </p>
                  <p className="text-text-secondary">Founder & CEO</p>
                  <div className="mt-4 w-32 h-1 bg-secondary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="section-padding bg-background/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Nearly two decades of growth, innovation, and impact
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full transform -translate-x-1/2 border-4 border-primary z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="card-glass">
                      <div className="text-3xl font-heading font-bold text-secondary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-text-secondary">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              The principles that guide every decision, design, and deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass group hover:border-secondary/50 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-text-secondary mb-4">{value.description}</p>
                <div className="flex items-center text-sm text-interactive font-mono">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  {value.example}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Industry veterans with decades of combined expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Marshall DeMasters', role: 'Founder & CEO', expertise: '25+ years renewable energy', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop' },
              { name: 'Elena Rodriguez', role: 'Chief Engineer', expertise: 'PE Licensed, 18 years experience', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop' },
              { name: 'David Chen', role: 'Operations Director', expertise: 'Supply chain & logistics expert', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop' },
              { name: 'Amara Okafor', role: 'Projects Lead', expertise: 'International development specialist', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-text-secondary font-mono">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
