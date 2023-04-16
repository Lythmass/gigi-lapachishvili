import { motion } from 'framer-motion';

export const HomeContent = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
      <motion.img
        initial={{ opacity: 0, y: '-10rem' }}
        animate={{ opacity: 1, y: 0 }}
        src='images/gamer.png'
        alt='avatar'
      />
      <motion.h1
        initial={{ opacity: 0, x: '-10rem' }}
        animate={{ opacity: 1, x: 0 }}
        className='text-light-color md:text-3xl lg:text-4xl text-center'
      >
        Hi, I am Gigi Lapachishvili
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: '10rem' }}
        animate={{ opacity: 1, x: 0 }}
        className='text-light-color md:text-lg lg:text-xl xl:px-[25%] text-center'
      >
        I am a Full Stack Web Developer, trying to keep up with the rapid growth
        of the modern technology...
      </motion.p>
    </div>
  );
};

export default HomeContent;
