import { useEffect, useState } from 'react';

export default function useDimension() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [dimentions, setDimentions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }
    if (window) {
      setDimentions(getWindowDimensions());
      const listener = () => {
        setDimentions(getWindowDimensions());
      };
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  useEffect(() => {
    setIsMobile(dimentions.width <= 768);
    setIsTablet(dimentions.width <= 1024);
  }, [dimentions]);

  return {
    isMobile,
    isTablet,
    dimentions,
  };
}
