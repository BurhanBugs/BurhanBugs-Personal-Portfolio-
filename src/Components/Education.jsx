import React from 'react'
import Workhistroy from './Workhistroy'
import Footer from './Footer'

const Education = () => {
  return (
    <>
      <div className=' transition-all duration-500 ease-in-out dark:bg-black dark:text-white dark:py-3 Education'>
        <div className="heading mt-[10%] flex flex-col justify-center items-center gap-3">
          <h1 className='text-center text-2xl font-bold'>My Education</h1>
          <p className="text-[#767676] text-center w-[90vw] xl:w-[35vw]">
            I have obtained my Bachelor's degree in Computer Science from the University of Agriculture, Faisalabad, Pakistan.  I am passionate about learning new technologies and contributing to the tech industry. My academic achievements and relevant coursework are summarized below:


          </p>
        </div>
        <div className="dark:bg-black transition-all duration-500 ease-in-out bg-white xl:w-[73vw] h-fit mt-20 py-4 px-9 ">
          <Workhistroy />
        </div>
      </div>
      <div className=" mt-28 xl:mt-40">
        <Footer />
      </div>
    </>
  )
}

export default Education
