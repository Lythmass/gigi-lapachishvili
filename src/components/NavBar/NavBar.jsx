import { NavBarItem } from 'components';
import { NavBarItemConfig } from 'config';

export const NavBar = () => {
  const items = NavBarItemConfig.map((item) => {
    return <NavBarItem title={item.title} img={item.img} />;
  });
  return (
    <div className='flex flex-col gap-[8rem] h-screen w-[20rem] border-r border-r-banana p-14'>
      <h1 className='text-4xl leading-[3rem] text-crimson font-black'>
        Lythmass
      </h1>
      <div className='w-full flex flex-col gap-5'>{items}</div>
    </div>
  );
};

export default NavBar;
