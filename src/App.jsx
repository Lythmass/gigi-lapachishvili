import { NavBar } from 'components';
import { ParticlesConfig } from 'config';
import { Home } from 'pages';
import Particles from 'react-particles';
import { useApp } from 'hooks';

function App() {
  const { openNavBar, setOpenNavBar, particlesInit } = useApp();

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
