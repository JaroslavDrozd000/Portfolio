import profilePic from '../assets/Me.png';

const ProfilePicture = () => {
  return (
    <div className='relative flex items-center bg-neutral-300 justify-center w-60 md:w-72 h-60 md:h-72 rounded-full overflow-hidden border-2 border-neutral-400 shadow-inner'>
      <img
        className='absolute w-40 md:w-52 bottom-0'
        src={profilePic}
        alt='Profile picture'
      />
    </div>
  );
};

export default ProfilePicture;
