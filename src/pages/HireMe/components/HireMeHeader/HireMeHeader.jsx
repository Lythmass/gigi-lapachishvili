import { createPortal } from 'react-dom';
import { ContactModal } from 'components';
import { motion } from 'framer-motion';
const HireMeHeader = (props) => {
  return (
    <>
      {props.showModal &&
        createPortal(
          <ContactModal
            result={props.result}
            setShowModal={props.setShowModal}
          />,
          document.body
        )}
      <motion.h1
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 90,
        }}
        viewport={{ once: true }}
        className='text-light-color text-4xl text-center px-20'
      >
        Get in touch with me.
      </motion.h1>
    </>
  );
};

export default HireMeHeader;
