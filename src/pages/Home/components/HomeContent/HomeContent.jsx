import { motion } from 'framer-motion';
import { Social } from 'pages';

export const HomeContent = () => {
  const transition = {
    type: 'spring',
    duration: 0.75,
    stiffness: 90,
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
      <motion.img
        initial={{ opacity: 0, y: '-5rem' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
        viewport={{ once: true }}
        src='images/gamer.png'
        alt='avatar'
      />
      <motion.h1
        initial={{ opacity: 0, x: '-10rem' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition}
        viewport={{ once: true }}
        className='text-light-color text-xl md:text-3xl lg:text-4xl text-center'
      >
        Hi, I am Gigi Lapachishvili
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: '10rem' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition}
        viewport={{ once: true }}
        className='text-light-color font-Montserrat md:text-lg lg:text-xl xl:px-[25%] text-center'
      >
        I am a Full Stack Web Developer, trying to keep up with the rapid growth
        of the modern technology...
      </motion.p>
      <Social />
    </div>
  );
};

export default HomeContent;
