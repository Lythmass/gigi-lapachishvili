import { NavBarItem } from 'components';
import { NavBarItemConfig } from 'config';
import { motion } from 'framer-motion';
import { useNavBarConfig } from './useNavBarConfig';

export const NavBar = (props) => {
  const items = NavBarItemConfig.map((item, index) => {
    return <NavBarItem key={index} title={item.title} img={item.img} />;
  });
  const { handleClick, size, scope } = useNavBarConfig(props);

  return (
    <div
      ref={scope}
      className='z-[100] bg-dark-color flex flex-col gap-[8rem] h-screen absolute w-full md:relative md:w-[20rem] md:border-r md:border-r-light-color p-10'
    >
      <div className='flex w-full justify-between items-center gap-10'>
        <h1 className='text-4xl leading-[3rem] text-crimson font-black'>
          Lythmass
        </h1>
        {size < 768 && (
          <motion.img
            onClick={handleClick}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className='w-5 cursor-pointer mt-2'
            src='images/close.png'
            alt='Close'
          />
        )}
      </div>
      <div className='w-full flex flex-col gap-5'>{items}</div>
    </div>
  );
};

export default NavBar;
