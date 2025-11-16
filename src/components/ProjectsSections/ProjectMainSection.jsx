import React from 'react'
import 'animate.css';
import Tabs from './Tabs';
  


const ProjectMainSection = () => {
  
  return (
    <div>
      
    <div className=' relative mt-20 w-full bg-gray-100 flex flex-col  items-center  ' >
      <h1 className='animate__animated animate__backInDown text-4xl  flex h-[45%] items-center md:text-5xl text-gray-700  font-semibold tracking-wide leading-snug text-center'>We build<br />Products,brands,and <br /> Experience.</h1>
      
      

        <div className='w-full flex-col flex  px-3 py-5'>
              <Tabs/>
            
        </div>

     
    </div>
  
   
  
    </div>
  )
}

export default ProjectMainSection