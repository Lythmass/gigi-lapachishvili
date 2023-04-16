import { motion } from 'framer-motion';

export const Social = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex gap-5'
    >
      <a
        href='https://www.linkedin.com/in/glapachishvili/'
        target='_blank'
        rel='noreferrer'
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='w-8 h-8'
          src='images/linkedin.png'
          alt='linkedin'
        />
      </a>
      <a href='https://github.com/Lythmass' target='_blank' rel='noreferrer'>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='w-8 h-8'
          src='images/github.png'
          alt='github'
        />
      </a>
    </motion.div>
  );
};

export default Social;
