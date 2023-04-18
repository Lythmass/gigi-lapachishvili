export const SkillItem = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <h1 className='text-light-color'>{props.title}</h1>
      <img
        className='w-16 h-16'
        src={`images/${props.img}.png`}
        alt={props.title}
      />
      <h1 className='text-light-color text-center whitespace-nowrap'>
        Exp. of {props.exp}
      </h1>
    </div>
  );
};

export default SkillItem;
