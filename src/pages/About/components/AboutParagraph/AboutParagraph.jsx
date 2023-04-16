import { motion } from 'framer-motion';

export const AboutParagraph = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <motion.h1
        initial={{ x: '-10rem', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 10,
        }}
        viewport={{ once: true }}
        className='text-dark-color text-2xl lg:text-3xl'
      >
        {props.title}
      </motion.h1>
      <motion.p
        initial={{ x: '10rem', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 10,
        }}
        viewport={{ once: true }}
        className='text-lg text-dark-color lg:px-[20%] xl:px-[30%] text-center'
      >
        {props.text}
      </motion.p>
    </div>
  );
};

export default AboutParagraph;
