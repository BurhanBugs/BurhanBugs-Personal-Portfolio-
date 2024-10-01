import React from 'react'

const BlogCard = (props) => {
    return (
        <>
            <div className="  dark:bg-black dark:py-3 blogCard hover:scale-110 hover:shadow-md cursor-pointer transition-all duration-300">
                <div className="w-64 dark:bg-black bg-white overflow-hidden h-fit">
                    <div className="image">
                        <img src={props.imgurl} alt="blog image" />
                    </div>
                    <div className="textbox p-3">
                    <h1 className='font-semibold'>{props.title}</h1>
                    <p className='text-sm text-[#767676]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dignissim metus. Donec in dolor vitae nulla tristique cursus. Nullam auctor, <span className='text-[#FFB400] font-semibold cursor-pointer'>{props.learnmore}</span>
                    </p>
                </div>
                </div>
                

            </div>
        </>
    )
}

export default BlogCard
