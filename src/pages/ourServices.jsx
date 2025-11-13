import {
  FaPaintBrush,
  FaLaptopCode,
  FaLayerGroup,
  FaGamepad,
  FaMobileAlt,
  FaDesktop,
  FaWordpress,
  FaPlug,
  FaLifeRing,
} from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  { icon: FaPaintBrush, title: 'Web Design' },
  { icon: FaLaptopCode, title: 'Web Development' },
  { icon: FaLayerGroup, title: 'Theme Development' },
  { icon: FaGamepad, title: 'Game Development' },
  { icon: FaMobileAlt, title: 'Apps Development' },
  { icon: FaDesktop, title: 'Desktop Application' },
  { icon: FaWordpress, title: 'WordPress Themes' },
  { icon: FaPlug, title: 'WordPress Plugins' },
  { icon: FaLifeRing, title: 'Support & IT' },
];

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#154d71] backdrop-blur-md border border-white/20 rounded-xl shadow-lg px-6 py-16 mx-5 my-2 text-center transition duration-300">
      <h2 className="text-4xl font-bold text-white font-serif mb-4">Our Services</h2>
      <p className="max-w-2xl mx-auto text-gray-200 mb-12 font-serif">
        At Codifying Tech, we craft digital experiences that elevate brands and empower users. From sleek web design to robust app development, our services are built for impact, scalability, and innovation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
        {services.map((service, index) => {
  const Icon = service.icon;
  const animation =
    index < 3 ? 'fade-right' : index >= 5 ? 'fade-right' : 'fade-left';

  return (
    <div
      key={index}
      data-aos={animation}
      data-aos-delay={index * 100}
      className="w-[90%] sm:w-[80%] md:w-full mx-auto flex flex-col items-center bg-white backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-md hover:shadow-lime-50 transition duration-300 transform hover:scale-110 cursor-pointer"
    >
      <div className="text-[#154d71] text-4xl mb-4">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold  text-[#154d71] uppercase">
        {service.title}
      </h3>
    </div>
  );
})}

      </div>
    </section>
  );
}
