import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLogout } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSolidHomeAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userSlice';


function Navbar({home,mytour}) {
    const [admin,setAdmin]=useState(false);
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();
    const {currentUser} = useSelector(state=>state.user);
   const dispatch = useDispatch();

  useEffect(()=>{
    if(currentUser.admin == 1){
      setAdmin(true);
    }
  },[])

  const handleAddTournament = ()=>{
    navigate("/AddTournament")
  }

  const handleAMyTournament = ()=>{
    console.log("first")
    navigate("/mytournament")
  }

  const handleLogout = ()=>{
        dispatch(logout());
        navigate("/")
  }

  const handleNavHome = ()=>{
    console.log("first")
    navigate("/home")
  }

  return (
    <>
    <div className='md:hidden'>
    {!open ? <div className='absolute right-3 top-3'>
        <GiHamburgerMenu onClick={()=>{setOpen(true)}}  size={"25px"} className='text-white'/>
        
    </div>:null}
    { open && <div className='italic flex flex-col gap-1 m-3 bg-sky-300  items-end justify-center py-8 px-3'>
        <div onClick={()=>{setOpen(false)}} className={`text-xl font-semibold absolute right-6 top-3 ${home? "homenav":""}`}> X</div>
        
        {
              admin ?
              
              <button className='italic text-white font-bold my-2 cursor-pointer' onClick={()=>{handleAddTournament();}}>ADD TOURNAMENT</button>
              :
              !mytour?<button className='italic text-white font-bold my-2 cursor-pointer' onClick={()=>{handleAMyTournament();}}> MY TOURNAMENT</button>:<></>
            }
            {home && <div className='flex items-center gap-2 text-white font-bold my-2 cursor-pointer' onClick={()=>{handleNavHome()}}><BiSolidHomeAlt2/> HOME</div>}
            <div className='flex items-center justify-center gap-2 text-white font-bold my-2 cursor-pointer'  onClick={()=>{handleLogout()}}>
            <AiOutlineLogout/>
            <span>LOGOUT</span>
            </div>


        </div>}
        </div>
     <div className='textColor hidden items-center gap-8 justify-end m-3 font-semibold text-xl md:flex'>
            {
              admin ?
              
              <button onClick={()=>{handleAddTournament();}} className='hovering italic'>  ADD TOURNAMENT</button>
              :
              !mytour?<button onClick={()=>{handleAMyTournament();}} className='hovering italic'> MY TOURNAMENT</button>:<></>
            }
            {home &&<div className='flex items-center gap-2  font-bold my-2 cursor-pointer hovering italic md:mx-4' onClick={()=>{handleNavHome()}}><BiSolidHomeAlt2/> HOME</div>}
            <div className='flex items-center gap-2 cursor-pointer hovering md:mx-4' onClick={()=>{handleLogout()}}>
            <AiOutlineLogout/>
            <span className='italic '>Logout</span>
            </div>
            </div>
    </>
  )
}

export default Navbar