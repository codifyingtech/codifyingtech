import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = () => {
    const WebProjects = [
        {
            img : "https://i.pinimg.com/1200x/4f/e3/01/4fe3016194dcb13fca4f0a12d358ac30.jpg",
            proName : "Project 1",
            detail : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur alias, amet deserunt voluptatem sunt eaque vel repudiandae! Officiis earum consequatur eveniet ullam veritatis perspiciatis corrupti, voluptas asperiores quibusdam enim ab praesentium eaque temporibus.",
            languagesUse : ["React","TailwindCss","Laravel","Html"],
            PageLink : "/projects"
        },
        {
            img : "https://i.pinimg.com/1200x/9c/1b/fa/9c1bfab98375ebb7ef5be4c6494a010d.jpg",
            proName : "Project 2",
            detail : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur alias, amet deserunt voluptatem sunt eaque vel repudiandae! Officiis earum consequatur eveniet ullam veritatis perspiciatis corrupti, voluptas asperiores quibusdam enim ab praesentium eaque temporibus.",
            languagesUse : ["TailwindCss","React","Html","Laravel"],
            PageLink : "/projects"
        },
        {
            img : "https://i.pinimg.com/1200x/5f/37/aa/5f37aabbeb4d01d9faf9c7311588dde2.jpg",
            proName : "Project 3",
            detail : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur alias, amet deserunt voluptatem sunt eaque vel repudiandae! Officiis earum consequatur eveniet ullam veritatis perspiciatis corrupti, voluptas asperiores quibusdam enim ab praesentium eaque temporibus.",
            languagesUse : ["TailwindCss","React","Html","Laravel"],
            PageLink : "/projects"
        },
        {
            img : "https://i.pinimg.com/1200x/61/6d/db/616ddb6f6b6da9ffc92183104a46bb8d.jpg",
            proName : "Project 4",
            detail : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur alias, amet deserunt voluptatem sunt eaque vel repudiandae! Officiis earum consequatur eveniet ullam veritatis perspiciatis corrupti, voluptas asperiores quibusdam enim ab praesentium eaque temporibus.",
            languagesUse : ["TailwindCss","React","Html","Laravel"],
            PageLink : "/projects"
        }
    ];
    
    
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    AOS.init();

    return (
        <div className='flex flex-col justify-evenly relative bottom-80 items-center gap-10'>
            {WebProjects.map(function (elem, idx) {
                const isCurrentHovered = hoveredIndex === idx; 
                
                return (
                    <div 
                        key={idx}
                        data-aos="zoom-in-up"
                        className='relative  w-full md:w-[80%] lg:w-[60%]'
                        onMouseEnter={() => setHoveredIndex(idx)}  
                        onMouseLeave={() => setHoveredIndex(null)} 
                    >
                        <img 
                            src={elem.img}
                            className='cursor-pointer h-[450px] md:rounded-2xl bg-cover w-full object-cover'
                            alt="Project" 
                        />
                        
                        
                        <div 
                            className={`absolute cursor-pointer inset-0 md:rounded-2xl bg-black transition-opacity duration-300 ${
                                isCurrentHovered ? 'opacity-80' : 'opacity-0'
                            }`}
                        />
                        
                        
                        <div 
                            className={`absolute inset-0 cursor-pointer md:rounded-2xl flex flex-col justify-between items-start text-white p-6 transition-opacity duration-300 ${
                                isCurrentHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <h3 className='text-3xl font-bold mb-3'>{elem.proName}</h3>
                            <p className='mb-4 md:text-1xl'>{elem.detail}</p>
                            
                            <div className='flex flex-wrap flex-col items-start gap-2 justify-center mb-4'>
                                <label>Languages We Use</label>
                                <div className='flex gap-5 flex-wrap'>
                                    {elem.languagesUse.map(function(e,inx){
                                          return <span key={inx} className='bg-blue-600 px-3 py-1 rounded-[5px] text-sm'>
                                            {e}
                                        </span> 
                                    })}
                                       
                                    
                                </div>
                            </div>
                            
                            <a 
                                href={elem.PageLink} 
                                className='mt-3 w-full text-center cursor-pointer bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectCard;