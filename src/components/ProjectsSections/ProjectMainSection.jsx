import React from 'react'
import CircularText from '../CircularText/CircularText';
import 'animate.css';
import ProjectCard from './ProjectCard';
  


const ProjectMainSection = () => {
  
  return (
    <div>
      
    <div className='h-[91lvh] relative mt-20 w-full bg-gray-100 flex flex-col items-center justify-between   rounded-b-[70px]' >
      <h1 className='animate__animated animate__backInDown text-4xl flex h-[45%] items-center md:text-5xl text-gray-700  font-semibold tracking-wide leading-snug text-center'>We build<br />Products,brands,and <br /> Experience.</h1>
      
       {/* Cicular text Animation */}
      <div className='hidden md:flex  items-center z-10 justify-center  absolute bottom-10 md:bottom-25 right-25 h-[100px] w-[100px] rounded-full'>
        <CircularText
         text="*SCROLL*DOWN*SCROLL*DOWN"
          onHover="speedUp"
         spinDuration={20}
         className="custom-class"
          />
      </div>
    </div>
    <div className='h-[220lvh]'> 
      <ProjectCard/>
    </div>
   
  
    </div>
  )
}

export default ProjectMainSection