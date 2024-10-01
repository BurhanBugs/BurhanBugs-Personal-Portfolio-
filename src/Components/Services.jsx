import React from 'react'
import ServiceCard from './ServiceCard'
import Footer from './Footer'

const Services = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white dark:py-3 Services">
        <div className="heading mt-[15%] flex flex-col justify-center items-center gap-3">
          <h1 className='text-center text-2xl font-bold'>My Services</h1>
          <p className="text-[#767676] w-[70vw] md:w-[50vw] text-center xl:w-[35vw]">
            I specialize in creating engaging and user-friendly web applications. From small business portals to e-commerce platforms, I've got the skills to help you grow your business.

          </p>
        </div>

        <div className=" flex justify-center flex-wrap w-[90vw] xl:w-[75vw] h-full mt-16">
          <ServiceCard skillinfo="All Kind Of Websites Blog,E-commerence etc" skillname="Web Develpoment" imgurl="/coding.png" />
          <ServiceCard skillinfo="Mobile App, Desktop App, Website Design" skillname="UI/UX Design" imgurl="/illustration.png" />
          <ServiceCard skillinfo="Beat Making,Oficial Songs,Voice Over" skillname="Sound Design" imgurl="/Microphone.png" />
          <ServiceCard skillinfo="Expert In Html,CSS,JS,JSX,TS,C++,C#" skillname="Coding/Programming" imgurl="/game-development.png" />
          <ServiceCard skillinfo="Portrait,Product Photography, Iphone Editing" skillname="Photography" imgurl="/Photographer.png" />
          <ServiceCard skillinfo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis a fuga, sint dolor est debitis ipsa aut voluptatibus impedit unde, quibusdam beatae omnis odit blanditiis! Corporis veniam hic repellendus." skillname="Advertising" learnmore="Order Now >" />
        </div>
      </div>
      <div className="  xl:mt-52">
        <Footer />
      </div>
    </>
  )
}

export default Services
