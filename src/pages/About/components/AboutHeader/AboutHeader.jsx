import { motion } from 'framer-motion';

export const AboutHeader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      <motion.h1
        initial={{ x: '-10rem', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 10,
        }}
        viewport={{ once: true }}
        className='text-dark-color text-3xl lg:text-4xl text-center'
      >
        Do you wish to know my experience?
      </motion.h1>
      <motion.p
        initial={{ x: '10rem', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 10,
        }}
        viewport={{ once: true }}
        className='text-lg text-dark-color'
      >
        Let's get into it...
      </motion.p>
    </div>
  );
};

export default AboutHeader;
