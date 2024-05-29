'use client';
import { useActiveSection } from '@/context/ActionSectionContext';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    if (result.success) {
      setStatus('Message sent successfully!');
    } else {
      setStatus('Failed to send message.');
    }

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("contact");
    }
  }, [setActiveSection, inView]);

  return (
    <div id='contact' ref={ref} className="scroll-mt-8 min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 md:p-8 md:flex md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Contact Me</h2>
            <p className="text-lg text-gray-400 mb-6">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-600 bg-transparent rounded"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-600 bg-transparent rounded"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-600 bg-transparent rounded"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-gray-400">{status}</p>}
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-400 mb-4">Other Information</h3>
            <p className="text-lg text-gray-400 mb-4">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-2">
              <p className="text-lg">
                <strong>Email:</strong> <a href="mailto:shohagmiah2100@example.com" className="text-blue-400 hover:underline">shohagmiah2100@gmail.com</a>
              </p>
              <p className="text-lg">
                <strong>Phone:</strong> <a href="tel:+01865905625" className="text-blue-400 hover:underline">01865905625</a>
              </p>
              <p className="text-lg">
                <strong>Address:</strong> Bangabazer, Gazipur, Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
