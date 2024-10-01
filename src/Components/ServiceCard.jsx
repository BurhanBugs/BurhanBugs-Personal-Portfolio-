import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
    <div className="m-2 dark:bg-slate-400  hover:scale-90 hover:shadow-md transition-all duration-300 cursor-pointer gap-1 flex flex-col items-center justify-center card w-80 h-60 bg-white">
        <div className="image">
          <img src={props.imgurl} alt="" />
        </div>
        <div className="font-semibold">
          {props.skillname}
        </div>
        <div className="text-center px-2 dark:text-white text-[#767676] text-sm">
            {props.skillinfo}
            <p className='font-semibold underline text-[#FFB400] cursor-pointer'>{props.learnmore}</p>

        </div>


    </div>
    </>
  )
}

export default ServiceCard
