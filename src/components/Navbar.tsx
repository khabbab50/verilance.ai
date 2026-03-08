import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Verilance.ai', path: '/platform' },
  { name: 'Why Verilance.ai', path: '/why' },
  { name: 'Investors', path: '/investors' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-full px-6 py-3 flex items-center gap-8 shadow-sm"
      >
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-graphite rounded-sm rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-teal-accent rounded-full" />
          </div>
          <span className="font-semibold tracking-tight text-lg">Verilance</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-teal-accent",
                location.pathname === link.path ? "text-graphite" : "text-graphite/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link 
          to="/contact" 
          className="bg-graphite text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-graphite/90 transition-all hover:scale-105 active:scale-95"
        >
          Request a Demo
        </Link>
      </motion.div>
    </nav>
  );
}
