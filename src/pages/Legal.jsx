import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Legal = ({ type }) => {
  const [showSummary, setShowSummary] = useState(true);

  const isPrivacy = type === 'privacy';
  
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const lastUpdated = 'January 15, 2024';

  const privacyContent = {
    summary: [
      'We collect only essential information needed to provide our services',
      'Your data is never sold to third parties',
      'We use industry-standard encryption to protect your information',
      'You can request deletion of your data at any time',
    ],
    sections: [
      {
        heading: 'Information We Collect',
        content: 'We collect information you provide directly to us, including name, email address, phone number, and project details. We also automatically collect certain technical information such as IP address and browser type.',
      },
      {
        heading: 'How We Use Your Information',
        content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you about projects and inquiries, and comply with legal obligations.',
      },
      {
        heading: 'Data Security',
        content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      },
      {
        heading: 'Third-Party Services',
        content: 'We may share your information with trusted service providers who perform services on our behalf, such as hosting, analytics, and customer support. These providers are contractually obligated to protect your data.',
      },
      {
        heading: 'Your Rights',
        content: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing activities. Contact us at privacy@offgridpower.com to exercise these rights.',
      },
      {
        heading: 'Cookies',
        content: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.',
      },
      {
        heading: 'International Data Transfers',
        content: 'As a global company, we may transfer your information to countries other than your own. We ensure appropriate safeguards are in place for such transfers.',
      },
      {
        heading: 'Children\'s Privacy',
        content: 'Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.',
      },
      {
        heading: 'Changes to This Policy',
        content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.',
      },
      {
        heading: 'Contact Us',
        content: 'If you have questions about this privacy policy, please contact us at privacy@offgridpower.com or write to: OffGrid Power LLC, Privacy Department, Salt Lake City, Utah, USA.',
      },
    ],
  };

  const termsContent = {
    summary: [
      'These terms govern your use of our website and services',
      'We provide services on an "as-is" basis with no warranties',
      'Our liability is limited to the amount you paid for services',
      'Disputes must be resolved through binding arbitration',
    ],
    sections: [
      {
        heading: 'Acceptance of Terms',
        content: 'By accessing or using OffGrid Power LLC\'s website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access or use our services.',
      },
      {
        heading: 'Services Description',
        content: 'OffGrid Power provides engineering, procurement, and construction (EPC) services for solar, battery storage, hybrid, and off-grid energy systems. Specific service details will be outlined in separate project agreements.',
      },
      {
        heading: 'User Responsibilities',
        content: 'You agree to provide accurate and complete information when requesting services. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.',
      },
      {
        heading: 'Intellectual Property',
        content: 'All content, designs, logos, and materials on this website are the property of OffGrid Power LLC and are protected by copyright and trademark laws. You may not use our intellectual property without prior written consent.',
      },
      {
        heading: 'Disclaimer of Warranties',
        content: 'Our services are provided "as-is" and "as-available" without warranties of any kind, either express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.',
      },
      {
        heading: 'Limitation of Liability',
        content: 'OffGrid Power LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.',
      },
      {
        heading: 'Indemnification',
        content: 'You agree to indemnify and hold harmless OffGrid Power LLC from any claims, damages, losses, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.',
      },
      {
        heading: 'Termination',
        content: 'We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.',
      },
      {
        heading: 'Governing Law',
        content: 'These terms shall be governed by the laws of the State of Utah, United States, without regard to its conflict of law provisions. Any disputes shall be resolved through binding arbitration in Salt Lake City, Utah.',
      },
      {
        heading: 'Changes to Terms',
        content: 'We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms. We will provide notice of material changes via email or prominent website notice.',
      },
      {
        heading: 'Contact Information',
        content: 'For questions about these Terms of Service, please contact us at legal@offgridpower.com or write to: OffGrid Power LLC, Legal Department, Salt Lake City, Utah, USA.',
      },
    ],
  };

  const content = isPrivacy ? privacyContent : termsContent;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-4"
          >
            {isPrivacy ? (
              <Shield className="w-16 h-16 text-secondary" />
            ) : (
              <FileText className="w-16 h-16 text-secondary" />
            )}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-heading-mobile md:text-heading-desktop mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-text-secondary"
          >
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* TL;DR Summary Toggle */}
      <section className="section-padding pb-0">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="w-full card-glass mb-8 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-secondary" />
              <span className="font-bold text-lg">TL;DR Summary</span>
            </div>
            <ChevronRight
              className={`w-6 h-6 text-text-secondary transition-transform ${
                showSummary ? 'rotate-90' : ''
              }`}
            />
          </button>

          {showSummary && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="card-glass mb-8 bg-secondary/5 border-secondary/30"
            >
              <h3 className="font-bold mb-4">Key Points (Quick Read)</h3>
              <ul className="space-y-3">
                {content.summary.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="card-glass">
            <div className="prose prose-invert max-w-none">
              {content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-8 last:mb-0"
                >
                  <h2 className="text-xl font-bold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    {section.heading}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link to="/" className="btn-secondary inline-flex items-center">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
