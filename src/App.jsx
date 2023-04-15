import { NavBar } from 'components';
import { Home } from 'pages';
import { useState } from 'react';

function App() {
  const [openNavBar, setOpenNavBar] = useState(false);
  return (
    <div className='flex bg-dark-color h-screen w-full overflow-x-hidden relative'>
      <NavBar setOpenNavBar={setOpenNavBar} openNavBar={openNavBar} />
      <div className='h-screen w-full p-10 overflow-x-hidden'>
        <Home openNavBar={openNavBar} setOpenNavBar={setOpenNavBar} />
      </div>
    </div>
  );
}

export default App;
