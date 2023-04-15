import { NavBar } from 'components';
import { Home } from 'pages';

function App() {
  return (
    <div className='flex bg-dark-color h-screen w-full'>
      <NavBar />
      <div className='h-screen w-full p-10'>
        <Home />
      </div>
    </div>
  );
}

export default App;
