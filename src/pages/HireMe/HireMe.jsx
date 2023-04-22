import { ContactInfo, Input, Message, Submit, HireMeHeader } from 'pages';
import { FormProvider } from 'react-hook-form';
import useHireMe from './useHireMe';
import { motion } from 'framer-motion';

export const HireMe = () => {
  const { methods, ref, sendEmail, showModal, setShowModal, result } =
    useHireMe();

  return (
    <div id='hire me' className='w-full min-h-screen py-20'>
      <HireMeHeader
        result={result}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <FormProvider {...methods}>
        <motion.form
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 90,
          }}
          viewport={{ once: true }}
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
        </motion.form>
      </FormProvider>
    </div>
  );
};

export default HireMe;
