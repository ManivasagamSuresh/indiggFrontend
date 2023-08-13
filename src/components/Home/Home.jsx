import React, { useEffect, useState } from 'react'
import { AiOutlineLogout } from 'react-icons/ai';
import logo from "../../images/logo1.png"
import Hometournament from '../Hometournament/Hometournament';
import { Config } from '../../config';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTournaments } from '../../redux/tourSlice';
import Navbar from '../Navbar/Navbar';

function Home() {
  const dispatch =useDispatch();
  const [admin,setAdmin]=useState(false);
  const {currentTour} = useSelector(state=>state.tour);
  const {currentUser} = useSelector(state=>state.user);

  useEffect(()=>{
    if(currentUser.admin == 1){
      setAdmin(true);
    }
  },[])
  
 console.log(currentTour)
  return (
    <div className='bg-gradient-to-b from-sky-400 to-violet-600 h-fit w-screen flex flex-col md:flex-col md:bg-gradient-to-b'>
        <div className='flex-1'>
           <Navbar/>
            <div className='flex flex-col items-center my-8'>
            <img src={logo} alt="" className='rotating-logo'/>
            <h1 className='text-2xl md:text-3xl font-times font-extrabold text-center bg-gradient-to-r from-grad-start via-grad-mid to-grad-end text-transparent bg-clip-text text-custom-shadow scalingtext italic'>STRATEGIZE,  PLAY,  CONQUER</h1>
            <h1 className='text-2xl md:text-3xl font-times font-extrabold text-center bg-gradient-to-r from-grad-start via-grad-mid to-grad-end text-transparent bg-clip-text text-custom-shadow italic'>Join your favorite Tournament here</h1>
            </div>   
        </div>

        <div className='flex-1'>
            
            
            <Hometournament />
            
            
        </div>
    </div>
  )
}

export default Home