import React from 'react'
import Workhistroy from './Workhistroy'
import Footer from './Footer'
import HoverImage from './HoverImage'

const Hero = () => {
  return (
    <>
      <div className="bg-white xl:w-[73vw] xl:h-[55vh] overflow-hidden mb-20 ">
        <div className="flex px-3 sm:px-14 items-center py-7   justify-between">
          <div className="info w-[50%]">
            <h1 className=' text-lg sm:text-3xl  md:text-4xl font-mono font-bold '>I'm Burhan Ali Baig <span className='text-[#FFB400]'>Full-Stack</span> Devolper </h1>


            <p className=" text-sm sm:text-lg text-gray-800 bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-transparent hover:bg-position-right-100 bg-size-200% transition-bg-position duration-400 ease-in-out mb-6 ">
              Focused on building engaging, responsive, and intuitive web experiences.
            </p>

            <button className=' rounded-sm transition-all duration-300   bg-[#FFB400] flex items-center gap-2 hover:gap-8  duration-400  p-2 '>
              <span className='font-semibold'>Hire Me</span>
              <img src="/Vector.png" alt="" />
            </button>

          </div>
          <div className=''>

            <HoverImage />
          </div>
        </div>

      </div>
      <div className="Workhis">
        <div className="heading flex flex-col justify-center items-center gap-3">
          <h1 className='text-center text-2xl font-bold'>Work History</h1>
          <p className="text-slate-800 text-center w-[70vw] sm:w-[70vw] xl:w-[35vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lectus ut finibus consectetur, ligula arcu sagittis velit, vel consectetur dolor neque id velit.
          </p>
        </div>

        <div className="bg-white xl:w-[73vw] h-full mt-20 py-4 px-9 ">
          <Workhistroy />
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Hero
