import { ContactInfo, Input, Message, Submit } from 'pages';
import { FormProvider } from 'react-hook-form';
import useHireMe from './useHireMe';
import { createPortal } from 'react-dom';
import { ContactModal } from 'components';

export const HireMe = () => {
  const { methods, ref, sendEmail, showModal, setShowModal, result } =
    useHireMe();

  return (
    <div id='hire me' className='w-full min-h-screen py-20'>
      {showModal &&
        createPortal(
          <ContactModal result={result} setShowModal={setShowModal} />,
          document.body
        )}
      <h1 className='text-light-color text-4xl text-center px-20'>
        Get in touch with me.
      </h1>
      <FormProvider {...methods}>
        <form
          ref={ref}
          onSubmit={methods.handleSubmit(sendEmail)}
          className='mt-20 w-[85%] sm:w-[70%] xl:w-[60%] m-auto flex flex-col lg:gap-4'
        >
          <div className='min-w-full flex flex-col lg:flex-row lg:gap-5'>
            <Input type='name' />
            <Input type='email' />
          </div>
          <Input type='title' />
          <Message />
          <Submit />
          <ContactInfo />
        </form>
      </FormProvider>
    </div>
  );
};

export default HireMe;
