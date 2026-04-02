import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Central Focus Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />

      {/* Aperture Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-orange-500/50 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 90 : 0,
          backgroundColor: isHovering ? 'rgba(255, 107, 0, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(255, 107, 0, 0.8)' : 'rgba(255, 107, 0, 0.5)',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      >
        {/* Aperture blades effect when hovering */}
        <motion.div
          animate={{ opacity: isHovering ? 1 : 0 }}
          className="absolute inset-0 border-[3px] border-dashed border-orange-500 rounded-full transition-opacity duration-300"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
