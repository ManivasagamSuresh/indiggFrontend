import React, { useEffect, useState } from 'react'

import HometournamentCard from '../HomeTournamentCard/HometournamentCard'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { Config } from '../../config';

function Hometournament() {
  const {tournament} = useSelector((state)=>state.tour);
  const {currentUser} = useSelector((state)=>state.user);
  const [data,setData]=useState([]);
  const [admin,setAdmin] = useState(false);

useEffect(()=>{
  setData(tournament);
},[tournament])


useEffect(()=>{
  const fetchTournaments = async()=>{
   try {
     const tour = await axios.get(`${Config.api}/tournament/get`);
     setData(tour.data);
   } catch (error) {
     console.log(error)
   }
   
  }
  fetchTournaments();
  
 },[])

  return (
    <>
    
    <div className='my-20 text-4xl text-center textColor font-bold font-times w-full flex items-center justify-around'><hr className='textColor flex-1'/><span className='flex-1'>TOURNAMENTS</span><hr className='flex-1'/></div>
    <div className='flex flex-col items-center justify-center my-8 md:flex-row md:flex-wrap md:justify-around  md:gap-8  md:my-2'>
      
       {
         
         data?.map((tour )=>{
           return <HometournamentCard tour= {tour} key={tour._id}/>
          })
       } 
    </div>
    </>
  )
}

export default Hometournament