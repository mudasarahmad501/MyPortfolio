import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      e.preventDefault();
      const targetId = target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

export default useSmoothScroll;