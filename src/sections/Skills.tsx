import { techList } from '../constants';

const Skills = () => {
  return (
    <section id='skill' className='section-container'>
      <h1 className='section-h1 text-center text-secondary'>My Skills</h1>
      <div className='flex flex-wrap justify-evenly'>
        {/* Ewach tech */}
        {techList.map((tech, index) => (
          <div
            key={index}
            className='w-full p-4 sm:w-1/2 xl:w-1/3 relative flex flex-col items-center justify-end'
          >
            <div
              className={`w-full flex flex-wrap gap-5 justify-evenly border-b-2 p-5 rounded-3xl ${tech.style}`}
            >
              {/* Each skill */}
              {tech.skills.map((skill, index) => (
                <img
                  key={index}
                  className={`w-12 rounded-lg overflow-hidden`}
                  src={skill}
                  alt='Skill'
                />
              ))}
            </div>
            <p className={`text-center text-size font-extrabold ${tech.style}`}>
              {tech.level}
            </p>
          </div>
        ))}
      </div>
      <p className='text-center text-sm text-white mt-10 italic font-serif'>
        I am open to learning new things as needed.
      </p>
    </section>
  );
};

export default Skills;
