import { HomeContent } from 'pages';
import Particles from 'react-particles';
import { ParticlesConfig } from 'config';

const Home = (props) => {
  return (
    <div id='home' className='w-full h-full px-10 pt-10 pb-20'>
      <Particles
        className='z-0 opacity-50'
        init={props.init}
        options={ParticlesConfig}
      />
      <HomeContent />
    </div>
  );
};

export default Home;
