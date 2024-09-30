import profilePic from '../assets/profle-pic.png';

const ProfilePicture = () => {
  return (
    <div className='relative flex items-center bg-neutral-300 justify-center size-60 md:size-56 rounded-full overflow-hidden border-2 border-neutral-400 shadow-inner'>
      <img
        className='absolute w-2/3 bottom-0'
        src={profilePic}
        alt='Profile picture'
      />
    </div>
  );
};

export default ProfilePicture;
