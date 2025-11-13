import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#154d71] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Navigation Links */}
       <div className="flex flex-col md:flex-row items-center justify-center gap-6 font-serif text-sm font-medium text-white">
  <a href="#services" className="hover:text-gray-300 transition duration-300">Services</a>
  <a href="#works" className="hover:text-gray-300 transition duration-300">Terms & Conditions</a>
  <a href="#support" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
</div>


        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://www.linkedin.com/company/codifying-tech/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedinIn />
          </a>
          <a href="
          https://www.facebook.com/codifyingtech/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/codifyingtech?igsh=b3VkNmlhZm41aHlx" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://github.com/search?q=codifying+tech&type=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © Copyright 2025 Codifying Tech All Rights Reserved. |Design and Develop by Codifying Tecg.
      </div>
    </footer>
  );
};

export default Footer;
