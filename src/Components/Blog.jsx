import React from 'react'
import BlogCard from './BlogCard'
import Footer from './Footer'

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="heading mt-[10%] flex flex-col justify-center items-center gap-3">
          <h1 className='text-center text-2xl   font-bold'>Blogs</h1>
          <p className="text-[#767676] w-[90vw] text-center sm:w-[70vw] xl:w-[35vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lectus ut finibus consectetur, ligula arcu sagittis velit, vel consectetur dolor neque id velit.
          </p>
        </div>

        <div className="blogCards flex gap-9 flex-wrap items-center justify-center mt-[10%]  xl:w-[73vw]">
          <BlogCard imgurl = "/Image.png" learnmore = "Learn More >" title = "How to Make Web Templates"/>
          <BlogCard imgurl = "/Iamge2.png" learnmore = "Learn More >" title = "Make Bussiness Card"/>
          <BlogCard imgurl = "/Image3.png" learnmore = "Learn More >" title = "How to Make Flyer Design"/>
        </div>
      </div>

      <div className="md:mt-36 xl:mt-[330px]">
        <Footer />
      </div>

    </>
  )
}

export default Blog
