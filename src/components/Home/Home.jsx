import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import logo from "../../images/logo1.png"
import Hometournament from '../Hometournament/Hometournament';

function Home() {
  return (
    <div className='bg-gradient-to-b from-sky-400 to-violet-600 h-fit w-screen flex flex-col md:flex-col md:bg-gradient-to-b'>
        <div className='flex-1'>
            {/* <div className='textColor flex items-center gap-2 justify-end m-3 font-semibold text-xl'>
            <BsPersonCircle />
            <span>test</span>
            </div> */}
            <div className='flex flex-col items-center '>
            <img src={logo} alt="" />
            <h1 className='text-2xl md:text-3xl italic font-extrabold text-center bg-gradient-to-r from-grad-start via-grad-mid to-grad-end text-transparent bg-clip-text text-custom-shadow'>Its Time to turn on your Game Mode</h1>
            <h1 className='text-2xl md:text-3xl italic font-extrabold text-center bg-gradient-to-r from-grad-start via-grad-mid to-grad-end text-transparent bg-clip-text text-custom-shadow'>Join your favorite Tournament here</h1>
            </div>   
        </div>

        <div className='flex-1'>
            
            
            <Hometournament/>
            
            
        </div>
    </div>
  )
}

export default Home