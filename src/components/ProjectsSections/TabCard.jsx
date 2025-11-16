import Aos from 'aos'
import React from 'react'

const TabCard = (props) => {
  Aos.init();
  return (
     <div key={props.key} data-aos="zoom-in-up"   className="relative w-full sm:w-[48%] xl:lg:w-[32%] h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
        
        <img 
          src={props.image}
          alt="Project"
          className="w-full animate__animated animate__backInUp h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-evenly items-start text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
          <h2 className="text-3xl font-bold text-white mb-4">{props.projectname}</h2>
          <p className="text-gray-100 text-md text-start">{props.projectdescription}</p>
          <a href={props.prolink} target='blank' className='bg-white w-full py-2  '>Visit {}</a>
        </div>
      </div>
  )
}

export default TabCard
