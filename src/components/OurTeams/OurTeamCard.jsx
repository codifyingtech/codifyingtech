import React from 'react'

const OurTeamCard = () => {
    const TeamData = [
        {
            id: 1,
            Name: "Person 1",
            image : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            Role: "Full Stack Developer"
        },

        {
            id: 2,
            Name: "Person 2",
            image : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            Role: "Fontend Devloper"
        },

        {
            id: 3,
            Name: "Person 3",
            image : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            Role: "Frontend Developer"
        },

        {
            id: 4,
            Name: "Person 4",
            image : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            Role: "Backend Developer"
        },

        {
            id: 5,
            Name: "Person 5",
            image : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            Role: "Full Stack Developer"
        },

        {
            id: 6,
            Name: "Person 6",
            image : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            Role: "Backend Developer"
        },
    ]
    return (
        <div className='w-full flex flex-wrap py-8 px-5 gap-5'>
            {TeamData.map(function (elem,idx) {
                return <div key={idx} className='bg-gray-200 rounded-2xl animate__animated animate__backInDown sm:w-full md:h-[400px] md:w-[48%] lg:h-[300px] lg:w-[31%] xl:w-[23%] xl:h-[350px]'>
                <div className=' w-full h-[70%] flex items-center justify-center p-2'>  
                 <img className='h-[90%] w-[80%] hover:scale-120 transition  object-cover' src={elem.image} alt="" />   
                  </div>
                 <div className='flex flex-col justify-evenly items-center h-[30%]'> 
                <h1 className='text-3xl font-semibold'>{elem.Name}</h1>
                <p className='text-gray-500'>{elem.Role}</p>
                </div>
                </div>
            })}
        </div>
    )
}

export default OurTeamCard
