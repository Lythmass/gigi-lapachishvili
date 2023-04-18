import { Skill } from 'config';
import { SkillItem } from './components';

export const Skills = () => {
  const diplaySkills = Skill.map((skill) => {
    return <SkillItem title={skill.title} img={skill.img} exp={skill.exp} />;
  });

  return (
    <div id='skills' className='w-full h-1/2'>
      <div className='flex p-20 gap-10 flex-col justify-center items-center w-full min-h-full'>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl text-center text-light-color'>
          Front-end
        </h1>
        <div className='w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10'>
          {diplaySkills}
        </div>
      </div>
      <div className='px-10 relative w-full min-h-full bg-light-color flex justify-center items-center'>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl text-center text-dark-color'>
          Back-end
        </h1>
      </div>
    </div>
  );
};

export default Skills;
