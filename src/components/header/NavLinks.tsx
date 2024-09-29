import { useState, MouseEvent, useEffect, useRef } from 'react';

const NavLinks = () => {
  const [navLinks] = useState<
    {
      name: string;
      id: string;
    }[]
  >([
    {
      name: 'Home',
      id: '#hero',
    },
    {
      name: 'About',
      id: '#about',
    },
    {
      name: 'Technologies',
      id: '#tech',
    },
    {
      name: 'Experience',
      id: '#exp',
    },
    {
      name: 'Projects',
      id: '#projects',
    },
    {
      name: 'Contact',
      id: '#contact',
    },
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [position, setPosition] = useState<{ width: string; left: string }>({
    width: '50px',
    left: '0px',
  });

  const firstLinkRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    // Set position of the first li (Home) on initial load
    if (firstLinkRef.current) {
      const { offsetWidth, offsetLeft } = firstLinkRef.current;
      setPosition({
        width: `${offsetWidth + 40}px`,
        left: `${offsetLeft - 20}px`,
      });
    }
  }, []);

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
    <>
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
          ref={index === 0 ? firstLinkRef : null}
          className={`cursor-pointer h-full flex font-sans items-center ${
            activeIndex === index ? 'text-white' : 'text-black'
          } transition-colors ease-in-out duration-500 select-none z-10`}
          onClick={(e) => handleLinkClick(e, index)}
        >
          <a href={link.id}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
