import { Validation } from 'config';
import { useFormContext } from 'react-hook-form';

export const Input = (props) => {
  const methods = useFormContext();
  const placeholders = {
    name: 'Jon Doe',
    email: 'jon@doe.com',
    title: 'Hello',
  };
  return (
    <div className='flex flex-col gap-1 w-full'>
      <label className='text-light-color capitalize' htmlFor={props.type}>
        {props.type !== 'title' ? `your ${props.type}` : props.type}
      </label>
      <input
        {...methods?.register(props.type, Validation[props.type])}
        autoComplete='off'
        className='bg-transparent rounded-md h-10 border border-light-color px-3 text-light-color focus:outline-none focus:border-crimson transition-all'
        placeholder={placeholders[props.type]}
        id={props.type}
        type={props.type}
      />
      <p className='text-crimson h-3'>
        {methods?.formState.errors[props.type]?.message}
      </p>
    </div>
  );
};

export default Input;
