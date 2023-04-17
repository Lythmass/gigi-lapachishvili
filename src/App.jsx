import { NavBar } from 'components';
import { Home, About, Skills } from 'pages';
import { useApp } from 'hooks';
import { motion } from 'framer-motion';

function App() {
  const { openNavBar, setOpenNavBar, particlesInit, scope } = useApp();

  return (
    <div className='flex bg-dark-color h-screen w-full overflow-x-hidden relative'>
      <NavBar setOpenNavBar={setOpenNavBar} openNavBar={openNavBar} />
      <div className='h-screen w-full overflow-x-hidden relative'>
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
      </div>
    </div>
  );
}

export default App;
