import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Config } from '../../config'
import { useSelector } from 'react-redux';
import HometournamentCard from '../HomeTournamentCard/HometournamentCard';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiSolidHomeAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


function Mytournaments() {
    const [tours, setTours] = useState([]);
    const {currentUser} = useSelector(state=>state.user);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchdata = async()=>{
            const data = await axios.get(`${Config.api}/tournament/get`);
            const events = data.data;
            console.log(events);
            console.log(currentUser)
            const updatedData = events.filter((a)=>{
            return    a.participants.some(participant => {
                    console.log(participant._id);
                  return  participant._id == currentUser._id})
            })
            setTours(updatedData);
            console.log(updatedData);
        }
        fetchdata();
    },[currentUser.tournaments]);

    const handleNavigateHome = ()=>{
        navigate("/home")
    }

  return (
  
    <div className="bg-gradient-to-b from-sky-400 to-violet-600 h-screen w-screen  flex flex-col italic">
        {/* <div className='textColor  w-full '>
            <div className='flex items-end w-full justify-end p-3 md:p-5 cursor-pointer' onClick={()=>{handleNavigateHome();}}><BiSolidHomeAlt2 size={"25px"}/></div> 
        </div> */}
        <Navbar home={true} mytour={true}/>
        <div className='flex flex-col h-fit bg-gradient-to-b from-sky-400 to-violet-600'>
    <div className='text-center text-3xl my-16 font-bold bg-gradient-to-r from-grad-start via-grad-mid to-grad-end text-transparent bg-clip-text text-custom-shadow'>MY TOURNAMENTS</div>
    <div className='flex flex-col md:flex-row items-center justify-around'>
        {   
            
            tours.map((tournament)=>{
                return <HometournamentCard tour={tournament}/>
            })
        }
      
    </div>
    </div>
    {
            tours.length == 0 ? <div className='flex flex-col items-center gap-8 h-full justify-center'>
                <div className='text-4xl text-center'>You have not Joined any Tournament</div>
            <button className='font-bold md:text-xl flex items-center gap-3 italic textColor'>Join tournaments <AiOutlineArrowRight/></button>
            </div> : null
        }
    </div>
    
  )
}

export default Mytournaments