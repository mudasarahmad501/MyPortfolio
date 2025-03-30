import { useState, useEffect, useMemo } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import useSmoothScroll from '../hooks/useSmoothScroll';
import logoImage from '../Assets/images/m3.jpg'

const Navbar = () => {
  useSmoothScroll();

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Memoize navItems to prevent unnecessary recreations
  const navItems = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ], []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); // Now navItems is stable between renders

  // Check for user's preferred color scheme
  useEffect(() => {
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  };

  // Close mobile menu when clicking on a nav item
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Bordered Circular Image */}
          <div className="relative h-10 w-10 rounded-full border-1 border-indigo-600 dark:border-indigo-400 overflow-hidden mr-2">
                <img 
                  src={logoImage} 
                  alt="Your Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            <a 
              href="#home" 
              className="text-xl font-bold text-gray-900 dark:text-white"
              onClick={closeMenu}
            >
              <span className="text-indigo-600 dark:text-indigo-400">Port</span>folio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-md font-medium transition duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition duration-300 mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition duration-300"
              aria-label="Main menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 text-center space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-gray-800'
                  : 'text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;