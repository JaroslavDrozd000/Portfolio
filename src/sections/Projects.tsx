const Projects = () => {
  return (
    <section id='projects' className='section-container'>
      <h1 className='section-h1'>Projects</h1>
      {/* Normal projects */}
      <div className='flex flex-wrap justify-evenly gap-10'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className='size-56 sm:size-96 bg-black rounded-xl'
          ></div>
        ))}
      </div>
      <p className='section-h1 text-secondary font-extrabold font-serif text-center mt-10'>
        3D Work
      </p>
      {/* 3D projket */}
      <div className='size-56 sm:size-96 mx-auto bg-black rounded-xl flex justify-center items-center text-white'>
        NOT IMPLEMENTED YET
      </div>
    </section>
  );
};

export default Projects;
