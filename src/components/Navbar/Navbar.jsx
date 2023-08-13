import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLogout } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userSlice';


function Navbar() {
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

  const handleLogout = ()=>{
        dispatch(logout());
        navigate("/")
  }

  return (
    <>
    {!open ? <div className='absolute right-3 top-3'>
        <GiHamburgerMenu onClick={()=>{setOpen(true)}}  size={"25px"} className='text-white'/>
        
    </div>:null}
    { open && <div className='italic flex flex-col gap-1 m-3 bg-sky-300  items-end justify-center py-8 px-3'>
        <div onClick={()=>{setOpen(false)}} className='text-xl font-semibold absolute right-6 top-3'> X</div>
        
        {
              admin ?
              
              <button className='italic text-white font-bold my-4' onClick={()=>{handleAddTournament();}}>ADD TOURNAMENT</button>
              :
              <button className='italic text-white font-bold my-4'> MY TOURNAMENT</button>
            }
            <div className='flex items-center justify-center gap-2 text-white font-bold' onClick={()=>{handleLogout()}}>
            <AiOutlineLogout/>
            <span >LOGOUT</span>
            </div>


        </div>}
     <div className='textColor hidden items-center gap-8 justify-end m-3 font-semibold text-xl md:flex'>
            {
              admin ?
              
              <button>ADD TOURNAMENT</button>
              :
              <button> MY TOURNAMENT</button>
            }
            <div>
            <AiOutlineLogout/>
            <span>Logout</span>
            </div>
            </div>
    </>
  )
}

export default Navbar