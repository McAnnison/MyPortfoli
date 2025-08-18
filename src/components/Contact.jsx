import React from 'react';
import Button from './Button';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="px-8 py-16">
      <header className="text-center mb-12">
        <p className="text-blue-600 font-bold mb-2">Get in Touch</p>
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </header>
      
      <form 
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-4"
      >
        <label className="flex flex-col">
          <span className="font-bold mb-2">Name</span>
          <input 
            type="text" 
            name="name" 
            required 
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        
        <label className="flex flex-col">
          <span className="font-bold mb-2">Email</span>
          <input 
            type="email" 
            name="email" 
            required 
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        
        <label className="flex flex-col">
          <span className="font-bold mb-2">Message</span>
          <textarea 
            name="message" 
            rows="5" 
            required 
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
          />
        </label>
        
        <div className="flex justify-end">
          <Button 
            type="submit"
            variant="secondary"
            className="w-40"
          >
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;