import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budgetRange: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [ticketId, setTicketId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate ticket ID
    const generatedTicketId = `OGP-${Date.now().toString(36).toUpperCase()}`;
    setTicketId(generatedTicketId);
    setFormStatus('success');
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budgetRange: '',
        message: '',
      });
      setFormStatus('idle');
    }, 5000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@offgridpower.com', href: 'mailto:info@offgridpower.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Headquarters', value: 'Salt Lake City, Utah, USA', href: '#' },
    { icon: Clock, label: 'Business Hours', value: 'Mon-Fri: 8AM-6PM MST', href: '#' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop)',
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
            Let's Build Your<br />
            <span className="text-gradient">Energy Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto"
          >
            Ready to discuss your project? Our engineering team is here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-glass">
                <h2 className="text-3xl font-bold mb-2">Start Your Project</h2>
                <p className="text-text-secondary mb-8">
                  Fill out the form below and we'll respond within 24 hours with a preliminary assessment.
                </p>

                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-text-secondary mb-4">
                      Your inquiry has been received. We'll be in touch soon.
                    </p>
                    <p className="font-mono text-sm bg-background/50 inline-block px-4 py-2 rounded">
                      Ticket ID: {ticketId}
                    </p>
                    <p className="text-sm text-text-secondary mt-4">
                      Expected response time: 24 hours
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
                        >
                          <option value="">Select a type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="community">Community/Microgrid</option>
                          <option value="humanitarian">Humanitarian</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budgetRange" className="block text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
                        >
                          <option value="">Select a range</option>
                          <option value="10k-50k">$10,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-500k">$100,000 - $500,000</option>
                          <option value="500k+">$500,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors resize-none"
                        placeholder="Tell us about your location, energy needs, timeline, and any specific challenges..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <>Submitting...</>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-text-secondary text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-text-secondary mb-8">
                  Whether you have a question about our services, need technical support, 
                  or want to discuss a potential project, our team is ready to help.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm text-text-secondary mb-1">{item.label}</div>
                        <div className="font-medium group-hover:text-secondary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="card-glass p-0 overflow-hidden">
                <div className="aspect-video bg-background relative">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop"
                    alt="Map location"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-secondary mx-auto mb-2" />
                      <p className="font-medium">Salt Lake City, Utah</p>
                      <p className="text-sm text-text-secondary">Global Operations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="card-glass border-accent/30">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">24/7 Emergency Support</h3>
                    <p className="text-text-secondary text-sm mb-3">
                      Existing clients with urgent power issues can reach our emergency response team anytime.
                    </p>
                    <a href="tel:+15551234567" className="text-accent font-medium hover:underline">
                      +1 (555) 999-8888
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
