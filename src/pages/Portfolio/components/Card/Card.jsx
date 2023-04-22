import { Button } from 'components';

export const Card = (props) => {
  const displayButtons = props.buttons.map((button, index) => {
    return <Button key={index} link={button.link} text={button.title} />;
  });
  return (
    <div className='flex font-Montserrat flex-col px-4 h-full w-full justify-center items-center gap-5'>
      <h1 className='text-light-color text-3xl tracking-widest font-Raleway'>
        {props.title}
      </h1>
      <div className='w-full mb-4 h-full flex flex-col xl:flex-row justify-center items-center xl:items-start gap-5'>
        <div className='flex flex-col gap-4  w-full xl:w-1/2'>
          <img
            className='rounded-xl w-full h-[20rem] object-cover'
            src={`images/${props.img}.png`}
            alt={props.title}
          />
        </div>
        <div className='flex flex-col justify-between h-full gap-4 w-full xl:w-1/2'>
          <p className='text-light-color lg:text-lg text-center xl:text-left w-full'>
            {props.description}
          </p>
          <div className='w-full flex flex-col gap-4 items-center justify-center'>
            <div className='w-full flex justify-between'>
              <p className='text-light-color lg:text-lg'>
                Start: {props.start}
              </p>
              <p className='text-light-color lg:text-lg'>End: {props.end}</p>
            </div>
            {displayButtons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
