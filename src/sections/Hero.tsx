import ProfilePicture from '../components/ProfilePicture';

const Hero = () => {
  return (
    <section
      id='hero'
      className='section-container flex flex-col pt-24 md:pt-40 min-h-screen justify-center items-center gap-10'
    >
      <h1 className='w-full text-[3rem] sm:text-[5rem] md:text-[8rem] xl:text-[10rem] leading-[3rem] sm:leading-[5rem] md:leading-[7rem] xl:leading-[9rem] flex flex-col'>
        <span className='font-extralight'>Frontend</span>
        <span className='text-center text-primary font-extrabold font-serif'>
          Developer
        </span>
      </h1>
      <div className='flex flex-col items-center gap-2'>
        <ProfilePicture />
        <h1 className='md:text-center text-primary text-lg md:text-2xl font-serif font-extrabold italic'>
          <span className='text-black font-sans font-normal not-italic'>
            Portfolio |&nbsp;
          </span>
          Bc. Jaroslav Drozd
        </h1>
      </div>
    </section>
  );
};

export default Hero;
