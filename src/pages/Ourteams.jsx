import React from 'react'
import OurTeamCard from '../components/OurTeams/OurTeamCard'

const Ourteams = () => {
  return (
    <div className=' mt-25 flex min-h-[90lvh] flex-col items-center'>
      <h1 className='text-center  text-cyan-800   p-5 animate__animated animate__bounceInDown   text-5xl font-semibold  '>Meet Our Team</h1>
      <div className='w-full'>
      <OurTeamCard/>
      </div> 
          
    </div>
  )
}

export default Ourteams
