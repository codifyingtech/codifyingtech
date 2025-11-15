import React from 'react';

import { FaComments, FaEnvelope, FaPhone } from 'react-icons/fa';

import Contact2 from './Contact2.jsx';

const Contact1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#101820] via-[#154d71] to-[#0a1c2e] text-white px-6 py-20">

      <div className="w-full max-w-6xl">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            Let’s Start a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Conversation
            </span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Ready to elevate your business with exceptional solutions? Get in touch 
            and let us guide you to bring your ideas to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* Chat Card */}
          <div className="bg-[#1a2b3c] p-6 rounded-2xl shadow-lg flex flex-col items-center 
            transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(0,150,255,0.4)]">
            
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-full mb-4 text-2xl">
              <FaComments />
            </div>
            <h2 className="font-semibold text-xl mb-2">Chat with us</h2>
            <p className="text-gray-300 text-center">Instant support by live chat.</p>
          </div>

          {/* Email Card */}
          <div className="bg-[#1a2b3c] p-6 rounded-2xl shadow-lg flex flex-col items-center 
            transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(150,80,255,0.4)]">
            
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-full mb-4 text-2xl">
              <FaEnvelope />
            </div>
            <h2 className="font-semibold text-xl mb-2">Email Us</h2>
            <p className="text-gray-300 text-center">We will reply promptly.</p>
          </div>

          {/* Call Card */}
          <div className="bg-[#1a2b3c] p-6 rounded-2xl shadow-lg flex flex-col items-center 
            transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(0,200,150,0.4)]">
            
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-full mb-4 text-2xl">
              <FaPhone />
            </div>
            <h2 className="font-semibold text-xl mb-2">Give us a call</h2>
            <p className="text-gray-300 text-center">Direct phone support.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact1;
