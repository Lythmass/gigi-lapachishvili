import { useFormContext } from 'react-hook-form';

export const useInput = () => {
  const methods = useFormContext();
  const placeholders = {
    name: 'Jon Doe',
    email: 'jon@doe.com',
    title: 'Hello',
  };
  const names = {
    name: 'user_name',
    email: 'user_email',
    title: 'subject',
  };
  return { methods, placeholders, names };
};
export default useInput;
