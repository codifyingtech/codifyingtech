import React, { useState } from 'react'
import TabCard from './TabCard';
import {ProjectData} from './Data/projectsDummyData'

const Tabs = () => {

    const [Activetab,SetActivetab] = useState("Websites");

    const tablist = [
        {
            id:"Websites",
            label:"Our Websites"
        },
        {
            id:"Apps",
            label:"Our Apps"
        },
        {
            id:"Design",
            label:"Our Designs"
        },
    ]

  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <div className=' bg-white border-b border-gray-200 rounded-t-2xl w-fit'>
             {tablist.map(function(elem){
                return <button key={elem.id} className={`py-5 rounded-[5px] cursor-pointer px-3 ${
                    Activetab===elem.id ? "border-b-2 border-purple-500 text-purple-500" : "text-gray-500 hover:text-purple-500"
                }`}
                onClick={()=>{
                    SetActivetab(elem.id)
                }}
                >{elem.label}</button>
              
             })}
              
              </div>
            
          <div className='w-full  gap-5 flex flex-wrap items-center bg-white pl-3 py-4 shadow-2xl rounded-2xl'>
             
             {
                ProjectData[Activetab].map((project)=>{
                    return <TabCard  projectname={project.projectName}
                                     projectdescription = {project.description} 
                                     image = {project.image}
                                     key={project.id} 
                                     prolink = {project.link} 
                    />
                })
             }

            </div>
            
            
    
    </div>
  )
}

export default Tabs
