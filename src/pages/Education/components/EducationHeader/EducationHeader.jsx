import { motion } from 'framer-motion';

export const EducationHeader = () => {
  return (
    <>
      <motion.h1
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 90,
        }}
        viewport={{ once: true }}
        className='text-dark-color text-3xl lg:text-4xl text-center w-[85%] sm:w-[70%] xl:w-1/2'
      >
        My education lies in Computer Science.
      </motion.h1>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 90,
        }}
        viewport={{ once: true }}
        className='flex gap-3 justify-center items-center'
      >
        <hr className='w-10 border border-dark-color' />
        <img className='w-14 h-14' src='images/cs.png' alt='ai' />
        <hr className='w-10 border border-dark-color' />
      </motion.div>
    </>
  );
};

export default EducationHeader;
