import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const renderIcon = (Component: React.ComponentType<any>, props: any) => <Component {...props} />;

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Contact Info */}
            <div className="bg-background/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-accent">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    {renderIcon(FaEnvelope, { className: 'text-accent text-xl' })}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:sujits2908@gmail.com" 
                      className="text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      sujits2908@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    {renderIcon(FaMapMarkerAlt, { className: 'text-accent text-xl' })}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Location</h4>
                    <p className="text-text-secondary">Coimbatore, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Resume</h4>
                <a 
                  href="https://1drv.ms/b/s!AkHa_T-k5Tghgcw_0G_0wHCOB5Yr_g?e=qoCPpi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-block"
                >
                  Download Resume
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-background/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-accent">Send a Message</h3>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-background border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-background border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-background border border-gray-800 rounded-lg p-3 focus:outline-none focus:border-accent transition-colors"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 