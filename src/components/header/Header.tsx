import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        // Determine if the scroll direction is up
        if (currentScrollY < lastScrollY) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      } else {
        setShowNavbar(true);
      }

      // Update lastScrollY to current scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
      <nav
        className={`fixed ${
          showNavbar ? 'top-5 md:top-10' : '-top-56'
        } left-0 w-full flex items-center justify-center transition-all ease-in-out duration-500 z-40`}
      >
        <ul className='relative hidden md:flex items-center px-5 gap-8 w-fit mx-auto h-16 bg-white rounded-full border-4 border-white ring-2 ring-primary ring-opacity-50'>
          <NavLinks />
        </ul>
        <button className='hidden max-md:flex flex-col gap-1 items-center justify-center min-w-16 h-16 rounded-full bg-primary'>
          <span className='w-1/2 h-1 border-2 border-white'></span>
          <span className='w-1/2 h-1 border-2 border-white'></span>
          <span className='w-1/2 h-1 border-2 border-white'></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
