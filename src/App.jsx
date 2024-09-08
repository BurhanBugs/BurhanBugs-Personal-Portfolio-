import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Resume from './Components/Resume'
import Hero from './Components/hero'
import Services from './Components/Services'
import Education from './Components/Education'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import { useState } from 'react'
import DraggableButton from './Components/DraggableButton'
import Resume2 from './Components/Resume2'

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  const [isVisible2, setIsVisible2] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const toggleComponent = () => {
    if (isVisible) {
      setAnimate(true);
      setTimeout(() => {
        setIsVisible(false);
        setAnimate(false);
      }, 500);
    } else {

      setIsVisible(true);
    }
  };
  const toggleComponent2 = () => {
    if (isVisible2) {
      setAnimate2(true);
      setTimeout(() => {
        setIsVisible2(false);
        setAnimate2(false);
      }, 500);
    } else {

      setIsVisible2(true);
    }
  };
  return (
    <>
      <BrowserRouter>
        <div className="flex justify-between">
          {isVisible ? (
            <div className={` hidden xl:block ${animate ? 'animate-slideOutToLeft' : 'animate-slideInFromLeft'}`}>
              <Resume />
            </div>
          ) : <div>

          </div>
          }
          {isVisible2 ? (
            <div className={` absolute xl:hidden ${animate2 ? 'animate-slideOutToLeft' : 'animate-slideInFromLeft'}`}>
              <Resume2/>
            </div>
          ) : <div>

          </div>
          }
          <div className="heropages">

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/services" element={<Services />} />
              <Route path="/education" element={<Education />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

          </div>
          <div className="navbar">
            <div className=' sticky top-0'>
              <Navbar onToggle={()=>{toggleComponent(),toggleComponent2() }} />
            </div>

          </div>

        </div>

        <DraggableButton onToggle={()=>{toggleComponent(),toggleComponent2() }} />

      </BrowserRouter>
    </>
  )
}

export default App
