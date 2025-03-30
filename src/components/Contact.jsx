import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { 
  FiMail, 
  FiMessageSquare, 
  FiUser, 
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle email submission only
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/mudasar228013@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Email submission response:', data);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle WhatsApp click
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const whatsappMessage = `New Message from ${formData.name} (${formData.email}, ${formData.phone}): ${formData.message}`;
    const whatsappUrl = `https://wa.me/923088421858?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleEmailSubmit} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <FiMessageSquare className="text-gray-500 dark:text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="pl-10 w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={20} /> WhatsApp
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                  There was an error sending your message. Please try again or contact me directly via WhatsApp.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="bg-indigo-600 dark:bg-indigo-800 p-8 rounded-xl shadow-lg h-full text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-700 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:mudasar228013@gmail.com" className="hover:underline">
                      mudasar228013@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-700 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/+923088421858" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      +92 3088421858
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-700 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p>Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-4">Connect with me on social media:</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/mudasarahmad501" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-indigo-700 dark:bg-indigo-900 p-3 rounded-full hover:bg-indigo-800 transition-colors duration-300"
                  >
                    <FiGithub className="text-xl" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mudasar-ahmad-72a5bb22a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-indigo-700 dark:bg-indigo-900 p-3 rounded-full hover:bg-indigo-800 transition-colors duration-300"
                  >
                    <FiLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;