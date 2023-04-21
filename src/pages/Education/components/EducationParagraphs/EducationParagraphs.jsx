export const EducationParagraphs = () => {
  return (
    <>
      <h1 className='text-dark-color text-2xl lg:text-3xl text-center'>
        CS Bachelor's Degree -{' '}
        <span>
          <a
            className='text-crimson underline'
            href='https://cu.edu.ge/en'
            target='_blank'
            rel='noreferrer'
          >
            Caucasus University
          </a>
        </span>
      </h1>
      <p className='lg:text-lg leading-8'>
        A place where I first discovered the field of computer science which
        gave me a solid foundation in programming and computer systems.
        Furthermore, I have developed an elegant problem-solving and decent
        communication skills, which resulted in potential and dedication for
        consistent growth and improvement in this direction.
      </p>
      <p className='lg:text-lg leading-8'>
        Subjects that I have learned here include: Algorithms and data
        structures, competitive programming in C++, principles of OOP (Java),
        relational databases (MSSQL), data science in Python, computer security,
        Artificial Intelligence and much more...
      </p>
    </>
  );
};

export default EducationParagraphs;