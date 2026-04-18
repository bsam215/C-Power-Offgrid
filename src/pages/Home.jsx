import { motion } from 'framer-motion';
import { Zap, Globe, DollarSign, Wrench, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Solar Systems',
      description: 'High-efficiency photovoltaic installations for residential, commercial, and industrial applications.',
      icon: Zap,
      large: true,
    },
    {
      title: 'BESS Solutions',
      description: 'Battery Energy Storage Systems for reliable power backup and grid independence.',
      icon: Globe,
      large: false,
    },
    {
      title: 'Hybrid Systems',
      description: 'Integrated solar + storage + generator solutions for maximum reliability.',
      icon: Wrench,
      large: false,
    },
    {
      title: 'Off-Grid Power',
      description: 'Complete energy independence solutions for remote locations.',
      icon: DollarSign,
      large: false,
    },
    {
      title: 'Microgrids',
      description: 'Community-scale power systems with intelligent load management.',
      icon: Globe,
      large: false,
    },
  ];

  const stats = [
    { value: '19+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '3', label: 'Continents Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const projects = [
    {
      title: 'Mountain Solar Farm',
      location: 'Utah, USA',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
    },
    {
      title: 'Village Microgrid',
      location: 'Tanzania',
      image: 'https://images.unsplash.com/photo-1548613053-220e75374b2f?w=1200&h=600&fit=crop',
    },
    {
      title: 'Industrial Hybrid System',
      location: 'Nevada, USA',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1200&h=600&fit=crop',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, Remote Industries',
      content: 'OffGrid Power delivered our facility ahead of schedule and under budget. Their engineering expertise is unmatched.',
      rating: 5,
    },
    {
      name: 'James Okonkwo',
      role: 'Director, African Development Initiative',
      content: 'The microgrid they installed has transformed our community. Reliable power for the first time in decades.',
      rating: 5,
    },
    {
      name: 'Michael Torres',
      role: 'Operations Manager, Mountain Resort Co.',
      content: 'Professional, transparent, and technically brilliant. They understood our unique challenges perfectly.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-heading-mobile md:text-heading-desktop mb-6"
          >
            Total Energy Freedom.<br />
            <span className="text-gradient">Built for Legacy.</span><br />
            Forged in Terrain.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto"
          >
            Specialized EPC firm delivering solar, BESS, hybrid, and off-grid 
            energy solutions across three continents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">
              Start Your Project
            </Link>
            <Link to="/services" className="btn-secondary text-lg px-10 py-4">
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-text-secondary" />
        </motion.div>
      </section>

      {/* Sticky Value Strip */}
      <section className="sticky top-20 z-40 bg-primary/95 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Wrench, text: 'Engineering First' },
              { icon: DollarSign, text: 'Absolute Transparency' },
              { icon: Globe, text: 'Global Capability' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center space-x-3"
              >
                <item.icon className="w-6 h-6 text-secondary" />
                <span className="font-medium text-text-primary">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Comprehensive energy solutions engineered for any environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-glass group hover:border-secondary/50 transition-all duration-300 cursor-pointer ${
                  service.large ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="flex flex-col h-full">
                  <service.icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-text-secondary mb-6 flex-grow">{service.description}</p>
                  <div className="flex items-center text-secondary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="section-padding bg-background/50 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Real-world solutions delivering measurable impact
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-text-secondary text-lg mb-4">{project.location}</p>
                  <button className="btn-primary inline-flex items-center">
                    View Details <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Stories</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Trusted by industry leaders and communities worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Zap key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-text-secondary mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Energy Future?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Get your free consultation with our engineering team. 
                We'll assess your needs, design a custom solution, and provide 
                transparent pricing—no obligations.
              </p>
              <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center">
                Get Your Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=1000&fit=crop"
                alt="Field engineer at solar installation"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
