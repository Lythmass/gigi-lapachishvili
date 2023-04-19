export const Button = (props) => {
  return (
    <a
      href={props.link}
      target='_blank'
      rel='noreferrer'
      className='bg-crimson hover:text-light-color transition-all text-dark-color rounded px-3 py-2 lg:text-lg w-full'
    >
      {props.text}
    </a>
  );
};

export default Button;
