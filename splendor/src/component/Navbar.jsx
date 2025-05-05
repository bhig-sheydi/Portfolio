import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
<header
  className={`fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-500 ${
    scrolled
      ? isDark
        ? 'bg-gradient-to-b from-[#0e0e1c]/90 to-[#0e0e1c]/80 backdrop-blur-lg border-b border-white/10'
        : 'bg-gradient-to-b from-[#fffaf0]/80 to-[#fff5e1]/70 backdrop-blur-lg border-b border-black/10'
      : 'bg-transparent'
  }`}
>

<div className="flex flex-col items-center">
  <h1
    className="text-3xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-pink-400 bg-clip-text drop-shadow-[0_0_15px_rgba(255,195,80,0.6)]"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    VG
  </h1>
  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1 animate-pulse" />
</div>

<nav className="hidden md:flex gap-10 items-center font-[Inter] font-medium text-lg tracking-wide">
  {['Home', 'About', 'Expertise', 'Experience', 'Contact'].map((item) => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      className={`transition duration-300 ${
        isDark
          ? 'text-slate-100 hover:text-yellow-400'
          : 'text-zinc-800 hover:text-yellow-500'
      } hover:underline underline-offset-4`}
    >
      {item}
    </a>
  ))}

  <button
    onClick={toggleDarkMode}
    className={`ml-4 p-2 border rounded-full transition duration-300 ${
      isDark
        ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
        : 'border-yellow-600 text-yellow-600 hover:bg-yellow-500 hover:text-white'
    }`}
  >
    {isDark ? <Sun size={18} /> : <Moon size={18} />}
  </button>
</nav>


        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

{/* Mobile Drawer */}
<div
  className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden bg-black/80 backdrop-blur-md text-white fixed top-16 left-0 w-full z-40 flex flex-col items-center ${
    isOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'
  }`}
>
  {['Home', 'About', 'Expertise', 'Experience', 'Contact'].map((item) => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      onClick={() => setIsOpen(false)}
      className="hover:text-yellow-400 transition py-2"
    >
      {item}
    </a>
  ))}
</div>

    </>
  );
};

export default Navbar;
