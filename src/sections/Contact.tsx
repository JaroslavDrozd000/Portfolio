import { ProfilePicture } from '../components';
import { contactList } from '../constants';

const Contact = () => {
  return (
    <section id='contact' className='section-container'>
      <h1 className='section-h1 text-center'>Contact</h1>
      <div className='flex max-md:flex-col items-center justify-evenly text-white text-lg'>
        {/* Contacts */}
        <div className='flex flex-col gap-5 justify-evenly max-md:mb-10'>
          {contactList.map(({ Icon, title, onClick }, index) => (
            <div key={index} className={`flex items-center gap-5`}>
              <Icon className='text-secondary' size={25} />
              <span
                onClick={onClick}
                className={`${
                  onClick ? 'cursor-pointer' : 'cursor-default'
                } text-size`}
              >
                {title}
              </span>
            </div>
          ))}
        </div>

        <ProfilePicture />
      </div>
    </section>
  );
};

export default Contact;
