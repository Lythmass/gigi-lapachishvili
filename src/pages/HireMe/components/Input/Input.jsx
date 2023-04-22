import { Validation } from 'config';
import useInput from './useInput';

export const Input = (props) => {
  const { methods, placeholders, names } = useInput();

  return (
    <div
      className={`flex flex-col gap-1 w-full ${
        props.type !== 'title' && 'lg:w-[calc(50%-0.6rem)]'
      }`}
    >
      <label className='text-light-color capitalize' htmlFor={props.type}>
        {props.type !== 'title' ? `your ${props.type}` : props.type}
      </label>
      <input
        {...methods?.register(names[props.type], Validation[props.type])}
        autoComplete='off'
        name={names[props.type]}
        className='bg-transparent rounded-md h-10 border border-light-color px-3 text-white focus:outline-none focus:border-crimson transition-all'
        placeholder={placeholders[props.type]}
        id={props.type}
        type={props.type}
      />
      <p className='text-crimson h-3'>
        {methods?.formState.errors[names[props.type]]?.message}
      </p>
    </div>
  );
};

export default Input;
