const ContactInfo = () => {
  return (
    <div className='w-full flex justify-center gap-4 mt-5 lg:mt-2 flex-wrap text-center'>
      <div className='text-light-color flex items-center gap-3'>
        <img className='w-7' src='images/gmail.png' alt='gmail' />
        <span className='text-crimson'>lythmass17@gmail.com</span>
      </div>
      <div className='text-light-color flex items-center gap-3'>
        <img className='w-7' src='images/telephone.png' alt='phone' />
        <span className='text-crimson'>+995 577 55 11 71</span>
      </div>
    </div>
  );
};

export default ContactInfo;
