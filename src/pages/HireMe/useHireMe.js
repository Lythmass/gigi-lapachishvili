import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const useHireMe = () => {
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState('');
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
          setShowModal(true);
          setResult(result.text);
        },
        (error) => {
          setShowModal(true);
          setResult(error.text);
        }
      );
  };
  return { methods, ref, sendEmail, showModal, setShowModal, result };
};

export default useHireMe;
