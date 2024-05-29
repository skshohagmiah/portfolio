'use client';
import { useState } from 'react';
import { BackgroundBeams } from './ui/background-beams';
import { Boxes } from './ui/boxes';

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

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
       {/* <Boxes /> */}
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
        <div className="text-3xl font-bold text-center text-blue-400 py-2 border-b-4 border-lime-400 rounded-b-xl w-fit mx-auto">
            Contact Me
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 mt-8">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 bg-transparent rounded"
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
                className="w-full p-3 border border-gray-300 bg-transparent rounded"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 bg-transparent rounded"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded">
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-gray-600">{status}</p>}
        </div>
      </div>
     
    </div>
  );
};

export default ContactForm;
