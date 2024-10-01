// src/components/DraggableButton.jsx
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const DraggableButton = ({ onToggle, }) => {

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
            if (event.altKey && event.key === 'o') {
                buttonRef.current.click();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const [showOptions, setShowOptions] = useState(false);

    const handleClick = () => {
        setShowOptions(!showOptions);
    };

    return (
      
            <div className=" z-50 fixed top-[3%] right-[4%]">
                <div className="relative">
                    <motion.button ref={buttonRef}
                        onClick={handleClick}
                        className={`p-2 animate-bounce bg-[#FFB400] dark:bg-slate-400 flex justify-center items-center text-white rounded-full shadow-lg focus:outline-none transition-all ${showOptions ? 'h-32 w-32' : 'h-12 w-12'
                            }`}
                        animate={{ height: showOptions ? 50 : 50, width: showOptions ? 50 : 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/uecgmesg.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ffffff"
                            style={{ width: '35px', height: '35px' }}>
                        </lord-icon>
                    </motion.button>
                    {showOptions && (
                        <div  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 flex flex-wrap justify-center gap-4">
                            <motion.div onClick={toggleTheme}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0 }}
                                className="flex  items-center justify-center w-12 h-12 p-1 rounded-full bg-[#FFB400] dark:bg-slate-400 shadow-md cursor-pointer hover:bg-yellow-500"
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/pwlnbxzy.json"
                                    trigger="hover"
                                    colors="primary:#121331,secondary:#ffffff"
                                    style={{ width: '30px', height: '30px' }}>
                                </lord-icon>
                            </motion.div>
                            <NavLink to={"/"}>  <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.05 }}
                                className="flex items-center justify-center w-12 h-12 p-1 rounded-full dark:bg-slate-400 bg-[#FFB400] shadow-md cursor-pointer hover:bg-yellow-500"
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/laqlvddb.json"
                                    trigger="hover"
                                    colors="primary:#121331,secondary:#000000"
                                    style={{ width: '30px', height: '30px' }}>
                                </lord-icon>
                            </motion.div></NavLink>
                            <NavLink to={"/services"}>   <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="flex items-center justify-center w-12 h-12 p-1 rounded-full dark:bg-slate-400 bg-[#FFB400] shadow-md cursor-pointer hover:bg-yellow-500"
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/jdalicnn.json"
                                    trigger="hover"
                                    colors="primary:#121331,secondary:#ffffff"
                                    style={{ width: '30px', height: '30px' }}>
                                </lord-icon>
                            </motion.div></NavLink>
                            <NavLink to={"/education"}>  <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.15 }}
                                className="flex items-center justify-center w-12 h-12 p-1 rounded-full dark:bg-slate-400 bg-[#FFB400] shadow-md cursor-pointer hover:bg-yellow-500"
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/lenjvibx.json"
                                    trigger="hover"
                                    colors="primary:#121331,secondary:#ffffff"
                                    style={{ width: '30px', height: '30px' }}>
                                </lord-icon>
                            </motion.div> </NavLink>
                            <NavLink to={"/blog"}> <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="flex items-center justify-center w-12 h-12 p-1 rounded-full dark:bg-slate-400 bg-[#FFB400] shadow-md cursor-pointer hover:bg-yellow-500"
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/jozaozoi.json"
                                    trigger="hover"
                                    colors="primary:#121331,secondary:#ffffff"
                                    style={{ width: '30px', height: '30px' }}>
                                </lord-icon>
                            </motion.div></NavLink>
                            <NavLink to={"/contact"}> <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.25 }}
                                className="flex items-center justify-center w-12 h-12 p-1 rounded-full dark:bg-slate-400 bg-[#FFB400] shadow-md cursor-pointer hover:bg-yellow-500"
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/mahizafr.json"
                                    trigger="hover"
                                    colors="primary:#121331,secondary:#ffffff"
                                    style={{ width: '30px', height: '30px' }}>
                                </lord-icon>
                            </motion.div></NavLink>
                            <motion.div  onClick={() => { onToggle() }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="flex items-center justify-center w-12 h-12 p-1 rounded-full dark:bg-slate-400 bg-[#FFB400] shadow-md cursor-pointer hover:bg-yellow-500"
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/abwrkdvl.json"
                                    trigger="hover"
                                    colors="primary:#121331,secondary:#ffffff"
                                    style={{ width: '30px', height: '30px' }}>
                                </lord-icon>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
    
    );
};

export default DraggableButton;
