import React from 'react'
import NavbarIcon from './NavbarIcon';
import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useState } from 'react';
const Navbar = ({ onToggle, }) => {

    const [darkMode, setDarkMode] = useState(false);

  // Toggle theme and save preference in localStorage
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  // Check the theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

    const buttonRef = useRef(null);
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.altKey && event.key === 'r') {
                buttonRef.current.click();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);



    return (
        <nav className='hidden xl:block'>
            <div themeRef className=" transition-all duration-500 ease-in-out dark:bg-black dark:text-white  w-16  py-9 bg-white items-center flex justify-between flex-col  min-h-screen">
                <div onClick={toggleTheme} className="cursor-pointer">
                    <NavbarIcon icon={<lord-icon
                        src="https://cdn.lordicon.com/pwlnbxzy.json"
                        trigger="hover"
                        colors="primary:#121331,secondary:#ffb400"
                        style={{ width: '35px', height: '35px' }}>
                    </lord-icon>} hovertext={darkMode ? 'ShiftLight' : 'ShiftDark'} />
                </div>
                <div className="flex list-none items-center flex-col gap-3">
                    <div className="home cursor-pointer">
                        <NavLink to={"/"}>  <NavbarIcon icon={<lord-icon
                            src="https://cdn.lordicon.com/laqlvddb.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ffb400"
                            style={{ width: '30px', height: '30px' }}>
                        </lord-icon>} hovertext='Home' /></NavLink>
                    </div>

                    <div className="home cursor-pointer">
                        <NavLink to={"/services"}> <NavbarIcon icon={<lord-icon
                            src="https://cdn.lordicon.com/jdalicnn.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ffb400"
                            style={{ width: '30px', height: '30px' }}>
                        </lord-icon>} hovertext='Services' /></NavLink>
                    </div>
                    <div className="home cursor-pointer">
                        <NavLink to={"/education"}> <NavbarIcon icon={<lord-icon
                            src="https://cdn.lordicon.com/lenjvibx.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ffb400"
                            style={{ width: '30px', height: '30px' }}>
                        </lord-icon>} hovertext='Education' /></NavLink>
                    </div>
                    <div className="home cursor-pointer">
                        <NavLink to={"/blog"}> <NavbarIcon icon={<lord-icon
                            src="https://cdn.lordicon.com/jozaozoi.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ffb400"
                            style={{ width: '35px', height: '35px' }}>
                        </lord-icon>} hovertext='Blog' /></NavLink>
                    </div>
                    <div className="home cursor-pointer">
                        <NavLink to={"/contact"}> <NavbarIcon icon={<lord-icon
                            src="https://cdn.lordicon.com/mahizafr.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ffb400"
                            style={{ width: '35px', height: '35px' }}>
                        </lord-icon>} hovertext='Contact ' /></NavLink>
                    </div>
                    <div ref={buttonRef} onClick={() => { onToggle() }} className="home cursor-pointer">
                        <NavbarIcon icon={<lord-icon
                            src="https://cdn.lordicon.com/abwrkdvl.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ffb400"
                            style={{ width: '35px', height: '35px' }}>
                        </lord-icon>} hovertext='QuickInfo' />
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar
