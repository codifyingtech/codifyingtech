import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <nav className="bg-[#1e293b] shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-400">IT Company</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-white">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link to={path} className="hover:text-blue-400">{name}</Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/quote" className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          Get A Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col gap-2 text-white text-sm">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link to={path} className="hover:text-blue-400">{name}</Link>
              </li>
            ))}
          </ul>
          <Link to="/quote" className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Get A Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
