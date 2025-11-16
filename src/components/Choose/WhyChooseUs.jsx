import React from 'react';

import { FaBullseye, FaBolt, FaShieldAlt, FaUsers, FaAward, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: FaBullseye, 
    title: 'Precision & Excellence',
    description: 'We deliver pixel-perfect solutions tailored to your exact requirements with meticulous attention to detail.',
  },
  {
    icon: FaBolt, 
    title: 'Lightning-Fast Delivery',
    description: 'Agile methodology ensures rapid development cycles without compromising on quality or functionality.',
  },
  {
    icon: FaShieldAlt, 
    title: 'Enterprise Security',
    description: 'Bank-grade security measures protect your data with end-to-end encryption and compliance standards.',
  },
  {
    icon: FaUsers, 
    title: 'Dedicated Support',
    description: 'Our team is always ready to assist you, ensuring a smooth and hassle-free experience.',
  },
  {
    icon: FaAward, 
    title: 'Award-Winning Solutions',
    description: 'Recognized for our innovative approach and impactful results in the industry.',
  },
  {
    icon: FaChartLine, 
    title: 'Scalable Growth',
    description: 'Solutions designed to grow with your business, adapting to future demands effortlessly.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#154d71]  rounded-xl  shadow-lg px-6 py-16 mx-5 my-2  text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-4xl font-bold text-white font-serif mb-4 text-transparent bg-clip-text">
              Excellence That Sets Us Apart
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            We combine cutting-edge technology with unparalleled expertise to deliver solutions
            that drive real business results.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
      className="w-[90%] sm:w-[80%] md:w-full mx-auto flex flex-col items-center bg-white backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-md hover:shadow-lime-50 transition duration-300 transform hover:scale-110 cursor-pointer"

              // className="bg-[#1a2b3c] p-8 rounded-xl shadow-lg flex flex-col items-start 
              //            border border-transparent hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="text-[#154d71] text-4xl mb-4">
                {/* <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-full text-2xl text-white"> */}
                  <feature.icon />
                </div>
              </div>
           <h3 className="   text-lg font-semibold  text-[#154d71] uppercase">{feature.title}</h3>
             
              <p className=" text-[#154d71] text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;