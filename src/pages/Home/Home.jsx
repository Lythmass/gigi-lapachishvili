import { motion } from 'framer-motion';
import { useHome } from './useHome';
import { HomeContent } from 'pages';

const Home = (props) => {
  const scope = useHome(props);

  return (
    <div className='h-full pb-16'>
      <motion.img
        ref={scope}
        onClick={() => props.setOpenNavBar(true)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className='w-10'
        src='images/menu.png'
        alt='menu'
      />
      <HomeContent />
    </div>
  );
};

export default Home;
