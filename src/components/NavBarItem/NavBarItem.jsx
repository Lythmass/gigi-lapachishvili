export const NavBarItem = (props) => {
  return (
    <div className='flex gap-2 items-center'>
      <img
        className='w-5 h-5'
        src={`images/${props.img}-red.png`}
        alt={props.title}
      />
      <h1
        after={props.title}
        className='after:content-[attr(after)] after:capitalize after:text-crimson after:absolute after:left-0 after:top-0 after:w-0 after:overflow-hidden after:hover:w-full after:transition-all after:whitespace-nowrap relative cursor-pointer capitalize text-light-color transition-all text-lg font-bold'
      >
        {props.title}
      </h1>
    </div>
  );
};

export default NavBarItem;
