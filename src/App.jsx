import { NavBar } from 'components';
import { Home, About, Skills, Portfolio, Education, HireMe } from 'pages';
import { useApp } from 'hooks';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { ParticlesConfig } from 'config';

function App() {
  const { openNavBar, setOpenNavBar, particlesInit, scope } = useApp();

  return (
    <div className='flex font-Raleway bg-dark-color h-screen w-full overflow-x-hidden relative'>
      <NavBar setOpenNavBar={setOpenNavBar} openNavBar={openNavBar} />
      <div className='h-screen w-full overflow-x-hidden relative'>
        <Particles
          className='z-0 opacity-50'
          init={particlesInit}
          options={ParticlesConfig}
        />
        <motion.img
          ref={scope}
          onClick={() => setOpenNavBar(true)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className='w-10 fixed m-5 z-[200]'
          src='images/menu.png'
          alt='menu'
        />
        <Home init={particlesInit} />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <HireMe />
      </div>
    </div>
  );
}

export default App;
