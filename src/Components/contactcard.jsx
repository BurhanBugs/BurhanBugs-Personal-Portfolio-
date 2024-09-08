import React from 'react'

const Contactcard = (props) => {
    return (
        <>
            <div className="contactcard bg-white hover:scale-95 transition-all duration-300 cursor-pointer hover:shadow-md mx-3 p-5 h-[175px]">
                <div className="flex items-center justify-center">
                    <div className='w-9 rounded-full cursor-pointer hover:scale-90 transition-all duration-300 h-9 bg-[#FFB400] flex items-center justify-center p-1'>
                        <img src={props.imgurl} alt="" />
                    </div>
                </div>

                <div className="cardinfo mt-2">
                    <div className='flex justify-between'>
                        <div className="font-semibold text-[#767676]">
                            {props.itemfirst}
                        </div>
                        <div className='text-[#767676]'>
                            {props.itemsecond}
                        </div>
                    </div>

                </div>
                <div className="cardinfo mt-2">
                    <div className='flex justify-between'>
                        <div className="font-semibold text-[#767676]">
                            {props.itemthird}
                        </div>
                        <div className='text-[#767676]'>
                            {props.itemfour}
                        </div>
                    </div>

                </div>
                <div className="cardinfo mt-2">
                    <div className='flex justify-between'>
                        <div className="font-semibold text-[#767676]">
                            {props.itemfive}
                        </div>
                        <div className='text-[#767676]'>
                            {props.itemsix}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contactcard
