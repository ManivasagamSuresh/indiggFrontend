import React from 'react'
import pubg from "../../images/pubg.jpg"
import { useNavigate } from 'react-router-dom';

function HometournamentCard() {
  const navigate = useNavigate();
  return (
    <>
    <div className='w-10/12 rounded-lg bgcard border-gray-500 p-2 my-9  italic md:w-3/12 mx-1 md:gap-4 md:hover:scale-105 hover:transition duration-1000 md:shadow-custome cursor-pointer' onClick={()=>{navigate(`/tournament/21`)}} >
        <img src={pubg} alt="" />
        <div className='flex flex-col gap-2'>
            <div className='text-xl text-center text-indigo-900 font-semibold' >PlayerUnknown's Battlegrounds</div>
            <div className='flex items-center justify-around text-center'>
                <div> 
                <span className='font-semibold'> Start date </span> 14/7/2023
                </div>
                <div>
                <span className='font-semibold'>End date </span> 14/08/2023
                </div>
        </div>
        <div className='text-xl font-semibold text-center text-indigo-900'>TOTAL SLOTS : 12</div>
        

        </div>
    
    </div>
    
    
    </>
    
  )
}

export default HometournamentCard