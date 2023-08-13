import React , { useEffect, useState } from 'react'
import pubg from "../../images/pubg.jpg"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTournaments } from '../../redux/tourSlice';
import { useSelector } from 'react-redux'

function HometournamentCard({tour}) {
  const navigate = useNavigate();
  const {currentUser} = useSelector((state)=>state.user);
  const [admin,setAdmin]=useState(false)
  useEffect(()=>{
    console.log(currentUser)
    if(currentUser.admin == 1){
      setAdmin(true);
    }
  },[])
 

  return (
    <>
    <div onClick={()=>{navigate(`/tournament/${tour._id}`)}}  className='w-10/12 rounded-lg bgcard border-gray-500 p-2 my-9 md:h-96  italic md:w-3/12 mx-1 md:gap-4 md:hover:scale-105 hover:transition duration-1000 md:shadow-custome cursor-pointer' >
        <img src={tour.image} alt="" />
        <div className='flex flex-col gap-2 items-center' >
            <div className='text-xl text-center text-indigo-900 font-semibold' >{tour.name}</div>
            <div className='flex items-center justify-between gap-6 text-center'>
                <div> 
                <span className='font-semibold'> Start date </span><br/> {tour.startDate}
                </div>
                <div>
                <span className='font-semibold'>End date </span><br/> {tour.endDate}
                </div>
        </div>
        <div className='text-xl font-semibold text-center text-indigo-900'>TOTAL SLOTS : {tour.TotalParticipants}</div>
        <div><span className='font-semibold'>Status: </span>{tour.status}</div>
        </div>
    
    </div>
    
    
    </>
    
  )
}

export default HometournamentCard