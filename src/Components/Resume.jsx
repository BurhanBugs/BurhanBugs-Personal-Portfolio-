import React from 'react'
import Skills from './Skills'
import Extraskills from './Extraskills'
const Resume = () => {
  return (
    <>
      <div className="xl:w-[20vw] transition-all duration-500 ease-in-out dark:bg-black dark:text-white sm:w-[40vw] md:w-[30vw] absolute z-20 xl:z-0 w-[90vw] xl:relative h-fit px-4 py-2 bg-white">
        <div className="gap-2 flex flex-col items-center ">
          <div className="logo w-24 h-24 border-transparent rounded-[50%] border-4  animate-borderSpin overflow-hidden cursor-pointer">

            <img className='object-contain ' src="/logo.jpeg" alt="" />

          </div>
          <div className="flex flex-col items-center">
            <h1 className='font-semibold'>BurhanBugs </h1>
            <p className='text-slate-400'>Full-Stack-Devolper</p>
          </div>
        </div>

        <hr className='m-2 w-full bg-slate-800' />

        <div className="socialicons flex gap-4 justify-center">
          <a href=""><img className='hover:scale-110 transition-all duration-300' src="/Instagram.png" alt="" /></a>
          <a href=""><img className='hover:scale-110 transition-all duration-300' src="/Linkeding.png" alt="" /></a>
          <a href=""><img className='hover:scale-110 transition-all duration-300' src="/Twitter.png" alt="" /></a>
          <a href=""><img className='hover:scale-110 transition-all duration-300' src="/Youtube.png" alt="" /></a>
        </div>

        <hr className='m-2 w-full bg-slate-800' />

        <div className="personalinfo mt-4 mx-1">
          <div className="flex justify-between my-2 items-center">
            <div className="bg-[#FFB400] px-2 font-semibold">
              Age:
            </div>
            <div className="font-semibold">
              18
            </div>
          </div>
          <div className="flex justify-between my-2 items-center">
            <div className="bg-[#FFB400] px-2 font-semibold">
              Residence:
            </div>
            <div className="font-semibold">
              PK
            </div>
          </div>
          <div className="flex justify-between my-2 items-center">
            <div className="bg-[#FFB400] px-2 font-semibold">
              Freeelance:
            </div>
            <div className=" text-green-400">
              Available
            </div>
          </div>
          <div className="flex justify-between my-2 items-center">
            <div className="bg-[#FFB400] px-2 font-semibold">
              Address:
            </div>
            <div className="text-sm">
              Faislabad,Pakistan
            </div>
          </div>

        </div>
        <hr className='m-4 w-[80%] bg-slate-800' />



        <div className="languages">
          <div className="heading">
            <h1 className='font-semibold text-xl'>Languages:</h1>
          </div>
          <Skills name="Urdu" count="100%" percentage={"100%"} />
          <Skills name="English" count="80%" percentage={"80%"} />
          <Skills name="Panjabi" count="100%" percentage={"100%"} />
        </div>
        <hr className='m-4 w-[80%] bg-slate-800' />


        <div className="Skills">
          <div className="heading">
            <h1 className='font-semibold text-xl'>Skills:</h1>
          </div>
          <Skills name="HTML" count="100%" percentage={"100%"} />
          <Skills name="CSS" count="90%" percentage={"90%"} />
          <Skills name="JavaScript" count="80%" percentage={"80%"} />
          <Skills name="React JS" count="82%" percentage={"82%"} />
          <Skills name="Next JS" count="75%" percentage={"75%"} />
        </div>
        <hr className='m-4 w-[80%] bg-slate-800' />


        <div className="extraskills">
          <div className="heading my-3">
            <h1 className='font-semibold text-xl'>Extra Skills:</h1>
          </div>

          <Extraskills names="Tailwindcss, Boastrap" />
          <Extraskills names="Materlize" />
          <Extraskills names="VS Code" />
          <Extraskills names="Vite APP" />
          <Extraskills names="SEO" />

        </div>
        <hr className='m-4 w-[80%] bg-slate-800' />
        <div className="CVbtn">
          <button className='flex items-center gap-3 bg-[#FFB400] p-2 font-semibold mx-auto rounded-md hover:bg-yellow-500 '>
            Download CV <img src="/Frame.png" alt="" />
          </button>
        </div>


      </div>



    </>
  )
}

export default Resume
