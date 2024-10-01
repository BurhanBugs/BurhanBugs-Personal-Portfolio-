import React from 'react'
import Contactcard from './contactcard'

const Contact = () => {
  return (
    <>
      <div className="contact dark:bg-slate-900 dark:text-white  w-[90vw] xl:w-[73vw] md:px-12">
        <div className='flex justify-between w-full mt-[6%] xl:mt-[3%] mb-1 '>
          <div className='hidden md:block w-1/2'>
            <h1 className='text-2xl  font-bold font-mono'>Leave Us Your Info</h1>
          </div>
          <div className="block md:hidden w-full">
          <h1 className='text-2xl font-bold text-center '>Leave Us Your Info</h1>

          </div>
          <div className=' xl:w-[37%]'>
            <h1 className=' hidden md:block text-2xl font-bold font-mono'>Contact Information</h1>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-6">
          <div className="md:w-3/4 dark:bg-black transition-all duration-500 ease-in-out  bg-white  p-5 h-fit">

            <div className="inputs m-3">
              <div className='mb-1'>
                <label className='text-sm dark:text-white text-[#767676]' htmlFor="Your Full Name">Your Full Name(Required)</label>
              </div>
              <div>
                <input placeholder='jhon' className='w-full px-2 h-9 dark:rounded-md focus:outline-none focus:ring-[#FFB400] focus:ring-2 dark:bg-slate-700  bg-[#F0F0F6]' type="text" />
              </div>
            </div>
            <div className="inputs m-3">
              <div className='mb-1'>
                <label className='text-sm dark:text-white text-[#767676]' htmlFor="Your Full Name">Your Email(Required)</label>
              </div>
              <div>
                <input placeholder='example@gmail.com' className='w-full px-2  dark:rounded-md dark:bg-slate-700 focus:outline-none focus:ring-[#FFB400] focus:ring-2 h-9  bg-[#F0F0F6]' type="email" />
              </div>
            </div>
            <div className="inputs m-3">
              <div className='mb-1'>
                <label className='text-sm dark:text-white text-[#767676]' htmlFor="Your Full Name">Subject</label>
              </div>
              <div>
                <input placeholder='Job query' className='w-full px-2 dark:rounded-md dark:bg-slate-700 focus:outline-none focus:ring-[#FFB400] focus:ring-2 h-9  bg-[#F0F0F6]' type="text" />
              </div>
            </div>
            <div className="inputs m-3">
              <div className='mb-1'>
                <label className='text-sm dark:text-white text-[#767676]' htmlFor="Your Full Name">Messege(Required)</label>
              </div>
              <div>
                <textarea placeholder='I am very glad to see your Portfolio' className='focus:outline-none   p-2 dark:rounded-md dark:bg-slate-700 focus:ring-[#FFB400] focus:ring-2 w-full h-48  bg-[#F0F0F6]' rows="10" />

              </div>
            </div>
            <button className='bg-[#FFB400] hover:scale-90 transition-all duration-300 font-semibold mx-3 px-3 py-1 mt-'>SEND MESSAGE</button>



          </div>
          <div className="block md:hidden text-center">
            <h1 className='text-2xl font-bold'>Contact Information</h1>
          </div>
          <div className="xl:w-1/2 h-fit flex flex-col gap-3">
            <Contactcard imgurl="/location.png" itemfirst="Country:" itemsecond="Pakistan" itemthird="City:" itemfour="Faisalabad" itemfive="Street:" itemsix="Sabri Town Dijkot" />
            <Contactcard imgurl="/Mobile.png" itemfirst="Support Services:" itemsecond="All" itemthird="Office" itemfour="+92 3060666286" itemfive="Personal:" itemsix="+92 3060666286" />
            <Contactcard imgurl="/mail.png" itemfirst="Email:" itemsecond="burhanbugs@gmail.com" itemthird="LinkedIn:" itemfour="@BurhanBugs" itemfive="GitHub:" itemsix="@burhanbugs" />


          </div>
        </div>

        <div className="newsletter dark:bg-slate-400 mt-24 flex items-center justify-center h-14 bg-white mx-auto">
          <div>
            <input  className='h-7 bg-[#F0F0F6] dark:bg-slate-700 focus:outline-none focus:ring-[#FFB400] focus:ring-2 px-3 py-2' type="text" placeholder='Enter Email' />
          </div>
          <div>
            <button   className='bg-[#FFB400] hover:scale-90 transition-all duration-300 font-semibold mx-3 px-3 py-1 mt-'>Join For Newsletter</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
