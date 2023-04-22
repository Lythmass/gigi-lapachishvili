import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const useHireMe = () => {
  const methods = useForm({ mode: 'onChange' });
  const ref = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        ref.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return { methods, ref, sendEmail };
};

export default useHireMe;
