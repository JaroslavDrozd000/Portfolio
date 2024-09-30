import { useEffect, useRef, useState, MouseEvent } from 'react';
import { navLinks } from '../constants';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [position, setPosition] = useState<{ width: string; left: string }>({
    width: '50px',
    left: '-50px',
  });

  const firstLinkRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    // for effect set true at start
    setShowNavbar(true);

    // Set position of the first li (Home) on initial load
    if (firstLinkRef.current) {
      const { offsetWidth, offsetLeft } = firstLinkRef.current;
      setPosition({
        width: `${offsetWidth + 40}px`,
        left: `${offsetLeft - 20}px`,
      });
    }
  }, []);

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

  const handleLinkClick = (event: MouseEvent<HTMLLIElement>, index: number) => {
    const { offsetWidth, offsetLeft } = event.target as HTMLLIElement;

    setActiveIndex(index);
    // set position of clicked button
    setPosition({
      width: `${offsetWidth + 40}px`,
      left: `${offsetLeft - 20}px`,
    });
  };

  return (
    <header
      className={`fixed ${
        showNavbar ? 'top-5 md:top-10' : '-top-56'
      } left-0 w-full flex items-center justify-center transition-all ease-in-out duration-500 z-40`}
    >
      <nav>
        <ul className='relative hidden md:flex items-center px-5 gap-8 w-fit mx-auto h-16 bg-white rounded-full border-4 border-white ring-2 ring-primary ring-opacity-50 overflow-hidden'>
          {/* Selector */}
          <div
            className='absolute h-full bg-secondary rounded-full transition-width transition-left ease-in-out duration-500'
            style={{
              width: position.width,
              left: position.left,
            }}
          ></div>
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              ref={index === 0 ? firstLinkRef : null}
              className={`cursor-pointer h-full text-size flex font-sans font-semibold items-center ${
                activeIndex === index ? 'text-white' : 'text-black'
              } transition-colors ease-in-out duration-500 select-none z-10`}
              onClick={(e) => handleLinkClick(e, index)}
            >
              <a href={link.id}>{link.name}</a>
            </li>
          ))}
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
