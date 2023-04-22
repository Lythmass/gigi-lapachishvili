import { useFormContext } from 'react-hook-form';
import { Validation } from 'config';

export const Message = () => {
  const methods = useFormContext();
  return (
    <div className='w-full flex flex-col gap-1'>
      <label className='text-light-color capitalize' htmlFor='message'>
        Message
      </label>
      <textarea
        {...methods.register('message', Validation['message'])}
        placeholder="We'd like to hire you"
        id='message'
        className='text-light-color p-3 w-full h-[15rem] rounded-md bg-transparent border border-light-color focus:outline-none focus:border-crimson transition-all'
      />
      <p className='text-crimson h-3'>
        {methods.formState.errors['message']?.message}
      </p>
    </div>
  );
};
export default Message;
