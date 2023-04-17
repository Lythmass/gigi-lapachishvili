import { motion } from 'framer-motion';

export const AboutParagraph = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <motion.div
        initial={{ x: '-10rem', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 10,
        }}
        viewport={{ once: true }}
        className='flex gap-4 items-center'
      >
        {props.title === 'Work.' && (
          <img className='w-10 h-10' src={`images/working.png`} alt='working' />
        )}

        <h1 className='text-dark-color text-2xl lg:text-3xl'>{props.title}</h1>

        {props.title !== 'Work.' && (
          <img className='w-9 h-9' src={`images/wave.png`} alt='working' />
        )}
      </motion.div>
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
