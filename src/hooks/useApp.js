import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import useWindowSize from './useWindowSize';
import { useAnimate } from 'framer-motion';

export const useApp = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [scope, animate] = useAnimate();
  const size = useWindowSize();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    if (openNavBar) {
      animate(scope.current, { opacity: 0 }, { duration: 0 });
    } else {
      if (size >= 768) {
        animate(scope.current, { opacity: 0 }, { duration: 0 });
      } else {
        animate(scope.current, { opacity: 1 }, { duration: 0 });
      }
    }
  }, [openNavBar, size]);

  return { openNavBar, setOpenNavBar, particlesInit, scope };
};

export default useApp;
