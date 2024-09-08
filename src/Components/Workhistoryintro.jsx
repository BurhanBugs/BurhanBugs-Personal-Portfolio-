import React from 'react'

const Workhistoryintro = (props) => {
    return (
        <div>
            <div className="flex xl:justify-between mb-6 md:justify-around sm:justify-around justify-around  xl:w-[60%]">
                <div className="font-semibold">
                    {props.name}
                </div>
                <div className="font-semibold">
                    Certificate Of Web Training
                </div>
            </div>

            <div className="md:flex-row items-center flex flex-col justify-between md:items-start  ">
                <div className="flex gap-2 w-[70%] mb-5 justify-between md:justify-normal  md:gap-6 items-center ">
                    <div>
                        Student
                    </div>
                    <div className="text-white text-sm px-[3px] bg-[#FFB400]">
                        {props.date}
                    </div>
                </div>
                <div className="md:w-[110%] text-center xl:text-left w-[90%] text-[#767676]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus ratione quidem cupiditate, doloribus veniam dignissimos dolorum nostrum asperiores culpa, labore dicta minus assumenda sint eos ad reprehenderit? Molestiae, repellendus?
                    
                </div>
            </div>

        </div>
    )
}

export default Workhistoryintro
