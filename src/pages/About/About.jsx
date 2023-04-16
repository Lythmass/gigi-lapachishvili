import { AboutHeader, AboutParagraph, VerticalLine } from 'pages';

export const About = () => {
  return (
    <div
      id='about'
      className='z-[100] relative bg-light-color w-full min-h-full px-10 py-20 flex flex-col justify-center gap-[5rem] items-center'
    >
      <AboutHeader />
      <VerticalLine />

      <AboutParagraph
        title='Who am I?'
        text='I am a simple guy and a Computer Science student from Tbilisi, Georgia,
        with some experience in Web Development and programming. Furthermore, I
        can make pretty damn cool designs on my own.'
      />

      <VerticalLine />

      <AboutParagraph
        title='Work.'
        text='My Work experience comes from working as a full-time intern Full Stack
        Web Developer at Redberry, which lasted 4 months of hard and
        consistent work and the results are extraordinary. I learned both
        Front-end (Next.js) and Back-end (Laravel) development along with
        writing clean code and nice documentations.'
      />
    </div>
  );
};

export default About;
