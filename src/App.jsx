import { NavBar } from 'components';
import { ParticlesConfig } from 'config';
import { Home } from 'pages';
import { useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

function App() {
  const [openNavBar, setOpenNavBar] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className='flex bg-dark-color h-screen w-full overflow-x-hidden relative'>
      <NavBar setOpenNavBar={setOpenNavBar} openNavBar={openNavBar} />
      <div className='h-screen w-full p-10 overflow-x-hidden'>
        <Home openNavBar={openNavBar} setOpenNavBar={setOpenNavBar} />
      </div>
      <Particles
        className='z-0 opacity-50'
        init={particlesInit}
        options={ParticlesConfig}
      />
    </div>
  );
}

export default App;
