import { motion } from 'framer-motion';
import { useHome } from './useHome';

const Home = (props) => {
  const scope = useHome(props);

  return (
    <div className=''>
      <motion.img
        ref={scope}
        onClick={() => props.setOpenNavBar(true)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className='w-10'
        src='images/menu.png'
        alt='menu'
      />
    </div>
  );
};

export default Home;
