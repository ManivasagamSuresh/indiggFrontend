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
  // const [tours,setTours] = useState([]);
// console.log(tours)
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
    <div className='flex flex-col items-center justify-center my-8 md:flex-row md:flex-wrap md:justify-around  md:gap-8  md:my-2'>
       {
        
        data?.map((tour )=>{
            return <HometournamentCard tour= {tour} key={tour._id}/>
        })
       } 
    </div>
  )
}

export default Hometournament