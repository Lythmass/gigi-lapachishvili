import { SkillTopPage, SkillBottomPage } from 'config';
import { SkillItem } from './components';

export const Skills = () => {
  const diplaySkillsTop = SkillTopPage.map((skill, index) => {
    return (
      <SkillItem
        key={index}
        title={skill.title}
        img={skill.img}
        exp={skill.exp}
        color='light-color'
      />
    );
  });
  const displaySkillsBottom = SkillBottomPage.map((skill, index) => {
    return (
      <SkillItem
        key={index}
        title={skill.title}
        img={skill.img}
        exp={skill.exp}
        color='dark-color'
      />
    );
  });

  return (
    <div id='skills' className='w-full h-1/2'>
      <div className='flex p-20 gap-10 flex-col justify-center items-center w-full min-h-full'>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl text-center text-light-color'>
          Front-end
        </h1>
        <div className='w-full grid grid-cols-auto-fit gap-10 justify-center'>
          {diplaySkillsTop}
        </div>
      </div>
      <div className='p-20 gap-10 relative w-full min-h-full bg-light-color flex flex-col justify-center items-center'>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl text-center text-dark-color'>
          Back-end
        </h1>
        <div className={`w-full grid grid-cols-auto-fit gap-10 justify-center`}>
          {displaySkillsBottom}
        </div>
      </div>
    </div>
  );
};

export default Skills;
