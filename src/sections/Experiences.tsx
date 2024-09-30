import fiitLogo from '../assets/fiit.png';

const Experiences = () => {
  return (
    <section id='exp' className='section-container'>
      <h1 className='section-h1'>Experiences</h1>
      <div className='flex gap-5 w-full text-size max-w-2xl mx-auto'>
        <div className='max-sm:hidden flex flex-col items-center gap-5'>
          <img
            className='min-w-20 w-20 rounded-full border-2 border-secondary'
            src={fiitLogo}
            alt='FIIT Logo'
          />

          <div className='flex flex-1 border-l-2 border-secondary'></div>
        </div>
        <div className='flex flex-col px-5'>
          <p className='text-secondary font-extrabold heading-size font-serif'>
            Frontend Developer
          </p>
          <p className='font-semibold'>
            Faculty of Informatics and Information Technologies STU
          </p>
          <span className='text-neutral-400 mb-5 text-[1rem]'>
            Jun 2023 - Present
          </span>
          <ul className='flex flex-col gap-4 text-sm list-disc '>
            <li>
              Worked as a frontend developer on a project aimed at building a
              digital library for students across all faculties of STU
            </li>

            <li>
              Initially focused on fixing visual and functional bugs in Angular
              and later implemented new features and adjusted API calls to new
              backend endpoints
            </li>

            <li>
              Proposed and led a full transition from Angular to React for
              better flexibility, including a complete redesign of the frontend
            </li>

            <li>
              In React, implemented custom hooks for RESTful API, state
              management, authorization, authentication, performance
              optimization, component creation, UMAMI analytics integration and
              responsive design
            </li>

            <li>
              Developed a GitHub library for reading and manipulating PDF
              documents using pdfjs-dist, with a focus on creating intuitive UX
              for document visualization and manipulation in the digital library
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
