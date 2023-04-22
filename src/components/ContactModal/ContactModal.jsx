import { motion } from 'framer-motion';
import useContactModal from './useContactModal';

export const ContactModal = (props) => {
  const { scope, handleClose } = useContactModal(props.setShowModal);
  return (
    <div className='w-[85%] h-[5rem] lg:w-1/2 xl:w-1/3 sm:w-[70%] right-1/2 translate-x-1/2 absolute top-3 lg:right-10 lg:translate-x-0 z-[200]'>
      <motion.div
        ref={scope}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 90 }}
        className='flex justify-center items-center rounded-xl w-full min-h-full bg-crimson'
      >
        <h1 className='text-light-color text-2xl text-center px-[3rem] font-Raleway'>
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
    </div>
  );
};

export default ContactModal;
