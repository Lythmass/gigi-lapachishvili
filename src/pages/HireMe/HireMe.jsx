import { Input, Message } from 'pages';
import { FormProvider, useForm } from 'react-hook-form';

export const HireMe = () => {
  const methods = useForm({ mode: 'onChange' });
  return (
    <div id='hire me' className='w-full min-h-screen p-20'>
      <h1 className='text-light-color text-4xl text-center'>
        Get in touch with me.
      </h1>
      <FormProvider {...methods}>
        <form className='mt-20 w-[85%] sm:w-[70%] xl:w-[57%] m-auto flex flex-col gap-5'>
          <div className='flex items-center gap-4'>
            <Input type='name' />
            <Input type='email' />
          </div>
          <Input type='title' />
          <Message />
        </form>
      </FormProvider>
    </div>
  );
};

export default HireMe;
