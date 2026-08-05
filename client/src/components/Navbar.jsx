import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { companyName, navItems } from '../data/content';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 text-slate-900 shadow-lg backdrop-blur' : 'bg-black text-white'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NavLink 
        to="/" 
        key="home" 
        className="flex items-center gap-3 text-lg font-semibold tracking-wide">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
            🌾
          </span>
          <span className='text-slate-900 dark:text-slate-100'>{companyName}</span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => 
              `text-sm font-medium transition hover:text-red-600 ${
                isActive
                ? "text-red-600 dark:text-red-400"
                : "text-slate-900 dark:text-slate-100"
              }`
            }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-white/20 p-3 text-sm lg:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 bg-black px-6 py-4 text-slate-50 backdrop-blur lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
