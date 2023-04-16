import { SocialContent } from 'config';
import { motion } from 'framer-motion';

export const Social = () => {
  const socials = SocialContent.map((social) => {
    return (
      <a href={social.link} target='_blank' rel='noreferrer'>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='w-8 h-8'
          src={`images/${social.img}.png`}
          alt={social.img}
        />
      </a>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex gap-5'
    >
      {socials}
    </motion.div>
  );
};

export default Social;
