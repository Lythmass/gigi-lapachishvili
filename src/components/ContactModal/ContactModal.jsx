import { motion } from 'framer-motion';
import useContactModal from './useContactModal';

export const ContactModal = (props) => {
  const { scope, handleClose } = useContactModal(props.setShowModal);
  return (
    <motion.div
      ref={scope}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 90 }}
      className='w-[85%] sm:w-1/2 lg:w-1/3 lg:right-10 lg:translate-x-0 flex justify-center items-center absolute top-3 right-1/2 translate-x-1/2 rounded-xl h-[5rem] z-[200] bg-crimson'
    >
      <h1 className='text-light-color text-2xl text-center'>
        {props.result === 'OK'
          ? 'Your email was successfully sent!'
          : props.result}
      </h1>
      <img
        onClick={handleClose}
        src='images/close-white.png'
        className='cursor-pointer w-5 absolute right-4 top-4'
        alt='close'
      />
    </motion.div>
  );
};

export default ContactModal;
