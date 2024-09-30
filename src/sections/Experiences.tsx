import { experienceList } from '../constants';

const Experiences = () => {
  return (
    <section id='exp' className='section-container'>
      <h1 className='section-h1'>Experiences</h1>
      {experienceList.map((exp, index) => (
        <div
          key={index}
          className='flex gap-5 w-full text-size max-w-2xl mx-auto mb-10'
        >
          {/* Left side */}
          <div className='max-sm:hidden flex flex-col items-center gap-5'>
            <img
              className='min-w-20 w-20 rounded-full border-4 border-secondary'
              src={exp.img}
              alt='FIIT Logo'
            />

            <div className='flex flex-1 border-x-2 rounded-full border-secondary'></div>
          </div>

          {/* Job side */}
          <div className='flex flex-col px-5'>
            <p className='text-secondary font-extrabold heading-size font-serif'>
              {exp.job}
            </p>
            <p className='font-semibold'>{exp.where}</p>
            <span className='text-neutral-400 mb-5 text-[1rem]'>
              {exp.duration}
            </span>
            <ul className='flex flex-col gap-4 text-sm list-disc '>
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
