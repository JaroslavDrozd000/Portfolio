import { FaHome, FaLinkedin } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { ProfilePicture } from '../components';

const Contact = () => {
  return (
    <section id='contact' className='section-container'>
      <h1 className='section-h1 text-center'>Contact</h1>
      <div className='flex max-md:flex-col items-center justify-evenly text-white text-lg'>
        <div className='flex flex-col gap-5 justify-evenly max-md:mb-10'>
          <div className='flex items-center gap-5'>
            <IoIosCall className='text-secondary' size={25} />
            <span className='text-size'>+421 904 621 427</span>
          </div>
          <div className='flex items-center gap-5'>
            <MdEmail className='text-secondary' size={25} />
            <span className='text-size'>drozdjaro1@gmail.com</span>
          </div>
          <div className='flex items-center gap-5'>
            <FaLinkedin className='text-secondary' size={25} />
            <span className='text-size'>
              www.linkedin.com/in/jaroslav-drozd
            </span>
          </div>
          <div className='flex items-center gap-5'>
            <FaHome className='text-secondary' size={25} />
            <span className='text-size'>Bratislava, Slovak Republic</span>
          </div>
        </div>
        <ProfilePicture />
      </div>
    </section>
  );
};

export default Contact;
