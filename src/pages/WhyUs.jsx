import { motion } from 'framer-motion';
import { Shield, Award, Zap, Clock, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  const differentiators = [
    {
      icon: Shield,
      title: 'Engineering-First Approach',
      description: 'We don\'t just install equipment—we engineer complete systems. Every design undergoes rigorous analysis for your specific conditions.',
      example: 'Our designs account for microclimate variations, load profiles, and 25-year degradation curves.',
    },
    {
      icon: Clock,
      title: '19+ Years Specialization',
      description: 'We only do off-grid and hybrid energy systems. Deep focus means we\'ve seen—and solved—every challenge.',
      example: 'From Arctic installations to equatorial heat, we have proven solutions for any environment.',
    },
    {
      icon: Award,
      title: 'Premium Component Partnerships',
      description: 'Direct relationships with Tier-1 manufacturers ensure authentic products, priority support, and best pricing.',
      example: 'Authorized partners with Victron, BYD, SMA, and other industry leaders.',
    },
    {
      icon: Users,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprise change orders. What we quote is what you pay—guaranteed.',
      example: 'Fixed-price contracts available with detailed line-item breakdowns.',
    },
    {
      icon: Globe,
      title: 'Global Capability',
      description: 'Projects on three continents mean we understand logistics, regulations, and cultural nuances worldwide.',
      example: 'In-country partnerships in 15+ nations for seamless deployment.',
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'When your power goes down, we\'re there. Our support team responds within hours, not days.',
      example: 'Average emergency response time: 4.2 hours. Remote diagnostics available 24/7.',
    },
  ];

  const certifications = [
    { name: 'ISO 9001', description: 'Quality Management' },
    { name: 'NABCEP', description: 'Solar Certification' },
    { name: 'IEEE 1547', description: 'Grid Interconnection' },
    { name: 'UL Listed', description: 'Safety Standards' },
    { name: 'OSHA Compliant', description: 'Workplace Safety' },
    { name: 'EPA Certified', description: 'Environmental' },
  ];

  const techPartners = [
    'Victron Energy', 'BYD Battery', 'SMA Solar', 'Schneider Electric',
    'LG Energy Solution', 'Panasonic', 'Canadian Solar', 'Outback Power',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581093196277-9f608eea3d0c?w=1920&h=1080&fit=crop)',
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
            Why Industry Leaders<br />
            <span className="text-gradient">Choose OffGrid Power</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto"
          >
            Proven expertise, uncompromising quality, and a track record that speaks for itself
          </motion.p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The OffGrid Difference</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Six reasons why clients trust us with their most critical power needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass group hover:border-secondary/50 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary mb-4">{item.description}</p>
                <div className="flex items-start text-sm text-interactive">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  {item.example}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-background/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Partners</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              We work with the world's leading manufacturers to deliver proven, reliable systems
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-glass flex items-center justify-center p-8 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="font-medium text-sm">{partner}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Industry-recognized credentials demonstrating our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-interactive/20 border-2 border-secondary/30 flex items-center justify-center">
                  <Award className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="font-bold mb-1">{cert.name}</h3>
                <p className="text-xs text-text-secondary">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="section-padding bg-background/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Stories</h2>
            <p className="text-xl text-text-secondary">
              Hear directly from those who've trusted us with their energy future
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-black/30 flex items-center justify-center cursor-pointer group"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=675&fit=crop"
              alt="Client testimonial"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-left">
              <p className="text-lg font-medium mb-2">"OffGrid Power transformed our operations"</p>
              <p className="text-text-secondary">Sarah Mitchell, CEO - Remote Industries</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work with the Best?
            </h2>
            <p className="text-xl text-text-secondary mb-10">
              Join 500+ satisfied clients across three continents who chose OffGrid Power 
              for their critical energy infrastructure.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center">
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
