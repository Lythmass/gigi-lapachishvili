import { motion } from 'framer-motion';

export const SkillItem = (props) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: 'spring',
        damping: 10,
      }}
      viewport={{ once: true }}
      className='flex flex-col justify-center items-center gap-2'
    >
      <h1 className={`text-${props.color}`}>{props.title}</h1>
      <img
        className='w-16 h-16'
        src={`images/${props.img}.png`}
        alt={props.title}
      />
      <h1 className={`text-${props.color} text-center whitespace-nowrap`}>
        Exp. of {props.exp}
      </h1>
    </motion.div>
  );
};

export default SkillItem;
