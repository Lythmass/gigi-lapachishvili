import { useState } from 'react';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

export const useApp = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return { openNavBar, setOpenNavBar, particlesInit };
};

export default useApp;
