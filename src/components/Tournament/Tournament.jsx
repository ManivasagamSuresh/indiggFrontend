import React, { useEffect, useState } from "react";
import pubg from "../../images/pubgbg.jpg"
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { addParticipant, removeParticipant, setTournaments } from "../../redux/tourSlice";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Config } from "../../config";
import { current } from "@reduxjs/toolkit";
import { addTournament, removeTournament } from "../../redux/userSlice";
import { BiSolidHomeAlt2 } from 'react-icons/bi';

function Tournament() {
    const [open,setOpen] = useState(false);
    const [register,setRegister] = useState(false);
    const [event,setEvent]= useState([]);
    const {currentTour} = useSelector(state=>state.tour);
    const {currentUser} = useSelector(state=>state.user);
    const [admin,setAdmin]=useState(false)
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    
  useEffect(()=>{
    console.log(currentUser)
    
    const reg = currentUser.tournaments.some((id)=>params.id == id );
          console.log(reg)
          if(reg){
            setRegister(true)
          }else{
            setRegister(false);
          }
          // console.log(currentTour)
          setEvent(currentTour);
  },[currentUser.tournaments,currentTour.participants])



    useEffect(()=>{
     const fetchData=async()=>{
        try {
          if(currentUser.admin == 1){
            setAdmin(true);
          }
          const eve = await axios.get(`${Config.api}/tournament/get/${params.id}`)
          console.log(eve.data);
          setEvent(eve.data);
           
          dispatch(setTournaments(eve.data));          
        } catch (error) {
          console.log(error);
        }
      }
     fetchData();
    },[])
    
    
    const addParticipants = async()=>{
      try {
        const data = await axios.put(`${Config.api}/tournament/addParticipant/${params.id}`,currentUser);
        dispatch(addParticipant(currentUser));
        dispatch(addTournament(params.id));
        alert("Registered");
      } catch (error) {
        console.log(error);
      }
    }

    const removeParticipants = async()=>{
     
        try {
          const data = await axios.put(`${Config.api}/tournament/deleteParticipant/${params.id}`,currentUser);
          dispatch(removeParticipant(currentUser));
          dispatch(removeTournament(params.id));
          alert("cancelled");
        } catch (error) {
          console.log(error);
        }   
    
    }

    const HandleEditTournament = ()=>{
      navigate(`/editTournament/${event._id}`)
    } 

    const HandleDeleteTournament = async()=>{
      try {
        const data = await axios.delete(`${Config.api}/tournament/delete/${params.id}`);
        alert("Tournament Deleted");
        navigate(`/home`)
      } catch (error) {
        console.log(error);
      }    
    } 

    const handleNavigateHome = ()=>{
      navigate("/home")
  }

  return (
    <div className="bg-gradient-to-b from-sky-400 to-violet-600 p-2 ">
      
    <div className="flex flex-col gap-4 h-fit items-center italic  bgcard">
    {/* <div className='absolute textColor top-3 right-5 p-3 md:p-5 cursor-pointer flex items-center gap-2 md:text-black md:top-0 md:right-0' onClick={()=>{handleNavigateHome();}}><BiSolidHomeAlt2 size={"25px"}/><span className="hidden md:block">HOME</span></div> */}

      <div className="w-full flex flex-col items-center ">
        <img src={event.coverImg} alt="" className="h-48 w-full  object-center md:h-96 md:w-10/12 md:my-8"/>
        <div className="absolute top-44  h-fit w-72 md:w-fit text-lg font-semibold italic skew-x-12 px-2 text-center left-auto right-auto bgcard boxshadowgray md:top-96 md:h-14 md:px-9 md:text-3xl">
            {event.name}
        </div>
      </div>
      <div className="my-8 flex flex-col text-xl items-center bgcard gap-4 p-3 w-11/12 ">
        <div className="flex flex-col md:flex-row md:gap-9"> 
        <span ><span className="font-semibold">Start Date: </span>{event.startDate}
        </span>
        <span ><span className="font-semibold">End Date:</span> {event.endDate}</span>
        </div>
      
        <div className="flex gap-3 md:flex-row md:gap-9">

        <div ><span className="font-semibold" >Total slots: </span>{event.TotalParticipants}</div>
        <div ><span className="font-semibold">Slots Filled: </span> { event?.participants?.length}</div>
        </div>
        <div ><span className="font-semibold">Status: </span>{event.status}</div>
        <div className="text-violet-600 font-bold text-3xl text-center">Winner Grabs <span>{event.prize}</span></div>
      </div>
      <div className="flex flex-col items-center">
            {
                admin ?
                <div className="flex gap-5 flex-col  md:flex-row md:gap-9 w-3/4 items-center justify-center">
          <button onClick={HandleEditTournament}  className="text-xl bg-violet-600 px-4 py-2 rounded-lg font-semibold textColor italic w-full md:py-1" >
           Edit  Tournament
          </button>
          <button onClick={HandleDeleteTournament} className="text-xl bg-red-600 px-4 py-2 rounded-lg font-semibold textColor italic w-full md:py-1" >
           Delete Tournament
          </button>
      </div>
             : <>{
                !register ? <button onClick={addParticipants} className="text-xl bg-violet-600 px-4 py-2 rounded-lg font-semibold textColor italic" >
                REGISTER
            </button>
                : <div className="flex gap-5 flex-col md:flex-row md:gap-9">
                        <button onClick={()=>navigate(`/editParticipant/${event._id}`)} className="text-xl bg-violet-600 px-4 py-2 rounded-lg font-semibold textColor italic" >
                         Edit Details
                        </button>
                        <button onClick={removeParticipants} className="text-xl bg-red-600 px-4 py-2 rounded-lg font-semibold textColor italic" >
                         Cancel Registration
                        </button>
                    </div>
                }</>
            }
            
            
              
           
      </div>
      <div className="bgcard w-full p-2 md:w-9/12 ">
       {
        !open ?
        <div className="font-semibold text-center flex items-center justify-center cursor-pointer" onClick={()=>{setOpen(true)}}> View participants <AiOutlineArrowRight/></div>
        :<div className="font-semibold text-center flex items-center justify-center cursor-pointer" onClick={()=>{setOpen(false)}}> Hide participants</div>
       } 
       {
            open? <div className="h-20 overflow-auto border my-2 md:h-32">
            <table className="text-sm w-full text-center" cellSpacing={"25px"} >
            <thead>
            <tr>
                  <th className="text-violet-600 md:text-xl">Sl.No</th>
                  <th className="text-violet-600 md:text-xl">Name</th>
                  {/* <th className="text-violet-600 md:text-xl"></th> */}
                </tr>
            </thead>
                <tbody>
            {event.participants.map((participant, index)=>{
                return  <tr  className="" key={participant._id}>
                <td className="">{index+1}</td>
                <td className="">{participant.name}</td>
              </tr>
            })}
            </tbody>
            </table>
            
            </div>:null
            
        }

      </div>
    </div>
    </div>
  );
}

export default Tournament;
