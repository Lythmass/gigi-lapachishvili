import { NavBar } from 'components';
import { ParticlesConfig } from 'config';
import { Home } from 'pages';
import Particles from 'react-particles';
import { useApp } from 'hooks';
import { motion } from 'framer-motion';

function App() {
  const { openNavBar, setOpenNavBar, particlesInit, scope } = useApp();

  return (
    <div className='flex bg-dark-color h-screen w-full overflow-x-hidden relative'>
      <NavBar setOpenNavBar={setOpenNavBar} openNavBar={openNavBar} />
      <div className='h-screen w-full p-10 overflow-x-hidden'>
        <motion.img
          ref={scope}
          onClick={() => setOpenNavBar(true)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className='w-10 fixed'
          src='images/menu.png'
          alt='menu'
        />
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
