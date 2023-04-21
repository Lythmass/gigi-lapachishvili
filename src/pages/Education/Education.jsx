import { EducationHeader, EducationParagraphs } from 'pages';
import { motion } from 'framer-motion';

export const Education = () => {
  return (
    <div
      id='education'
      className='w-full min-h-full flex flex-col items-center py-20 gap-10 relative bg-light-color'
    >
      <EducationHeader />
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 90,
        }}
        viewport={{ once: true }}
        className='w-[85%] sm:w-[70%] xl:w-1/2 text-center p-10 rounded-xl flex flex-col gap-9 items-center border border-dark-color'
      >
        <EducationParagraphs />
        <div className='w-full flex flex-col justify-center items-center'>
          <p className='whitespace-nowrap'>Start date: September, 2020</p>
          <p className='whitespace-nowrap'>End date: July, 2024</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
