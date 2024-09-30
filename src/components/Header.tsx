import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../constants';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [position, setPosition] = useState<{ width: string; left: string }>({
    width: '50px',
    left: '-50px',
  });

  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    // for effect set true at start
    setShowNavbar(true);

    // Set position of the first li (Home) on initial load
    if (ref.current) {
      const { offsetWidth, offsetLeft } = ref.current;
      setPosition({
        width: `${offsetWidth}px`,
        left: `${offsetLeft}px`,
      });
    }
  }, [ref.current]);

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
    <header
      className={`fixed ${
        showNavbar ? 'top-0 md:top-10' : 'md:-top-56'
      } left-0 w-full flex items-center justify-center transition-all ease-in-out duration-500 z-40`}
    >
      <nav className='w-full'>
        <ul className='relative hidden md:flex items-center w-fit mx-auto h-16 bg-white bg-opacity-50 backdrop-blur-2xl rounded-full ring-4 ring-secondary ring-opacity-50 overflow-hidden'>
          {/* Selector */}
          <div
            className='absolute h-full bg-primary rounded-full transition-width transition-left ease-in-out duration-500'
            style={{
              width: position.width,
              left: position.left,
            }}
          ></div>
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              ref={index === activeIndex ? ref : null}
              className={`cursor-pointer h-full text-size flex font-sans font-semibold items-center ${
                activeIndex === index ? 'text-white' : 'text-black'
              } transition-colors linear duration-500 select-none px-5 z-10`}
              onClick={() => setActiveIndex(index)}
            >
              <a href={link.id}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
