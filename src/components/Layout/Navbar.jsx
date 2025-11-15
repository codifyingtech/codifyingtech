import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Team', path: '/team' },
    { name: 'ContactUs', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#154d71] shadow-md px-6 py-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="w-19 h-15">
          <img src="./logo.png" alt="Codifying Tech Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-serif">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-[#154d71] font-bold shadow-[0_0_20px_rgba(255,255,255,0.6)]'
                      : 'text-white hover:text-blue-400'
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <NavLink
          to="/signin"
          className="hidden md:block bg-sky-500 hover:bg-sky-300 font-serif text-white px-4 py-2 rounded-full text-sm"
        >
          Sign In
        </NavLink>

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
          <ul className="flex flex-col gap-2 text-sm font-serif">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)} // close menu on click
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-white text-[#154d71] font-bold shadow-[0_0_20px_rgba(255,255,255,0.6)]'
                        : 'text-white hover:text-blue-400'
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/signin"
            onClick={() => setIsOpen(false)}
            className="block bg-sky-500 hover:bg-sky-300 font-serif text-white px-4 py-2 rounded-full text-sm text-center"
          >
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}
