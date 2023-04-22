import { createPortal } from 'react-dom';
import { ContactModal } from 'components';
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
      <h1 className='text-light-color text-4xl text-center px-20'>
        Get in touch with me.
      </h1>
    </>
  );
};

export default HireMeHeader;
