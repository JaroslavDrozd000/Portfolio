const About = () => {
  return (
    <section id='about' className='section-container'>
      <h1 id='about' className='section-h1'>
        Introduction
      </h1>
      <div className='flex max-md:flex-col gap-5 max-md:items-center justify-center'>
        {/* About */}
        <p className='max-w-96 text-size italic font-thin'>
          Hi, my name is Jaroslav Drozd, I am a front-end developer from
          Slovakia with a Bachelor's degree in Computer Science from FIIT STU in
          Bratislava. I've currently paused my academic studies to focus on
          gaining more practical, hands-on experience in web development.
          Front-end development in React is my primary area of expertise and
          passion, but I'm always open to new challenges and eager to expand my
          skill set, including learning and mastering new front-end
          technologies.
        </p>

        {/* Education */}
        <div className='max-w-96'>
          <span className='text-secondary heading-size font-bold font-serif'>
            Education
          </span>
          <p className='text-neutral-500 text-size'>Bachelor's Degree</p>
          <p className='text-size'>
            Faculty of Informatics and Information Technologies STU
          </p>
          <p className='text-size'>Bratislava, Slovak Republic</p>
          <p className='mt-5 text-size'>2020 - 2024</p>
        </div>
      </div>
    </section>
  );
};

export default About;
