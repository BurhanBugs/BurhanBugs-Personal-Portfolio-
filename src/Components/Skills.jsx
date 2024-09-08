import React from 'react'

const Skills = (props) => {
    return (
        <>
            <div className="flex justify-between my-2 items-center">
                <div className=" text-[#767676] ">
                    {props.name}
                </div>
                <div className="text-[#767676]">
                    {props.count}
                </div>
            </div>

            <div className="percentageline">
                <div className="box w-full h-1  flex items-center border rounded-md overflow-hidden border-[#FFB400]">
                    <div className="bg-[#FFB400] h-1"  style={{ width: `${props.percentage}` }} >
                        
                    </div>
                   
                    
                </div>
            </div>
        </>
    )
}

export default Skills
