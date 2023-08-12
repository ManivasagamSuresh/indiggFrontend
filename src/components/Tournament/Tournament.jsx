import React, { useState } from "react";
import pubg from "../../images/pubgbg.jpg"
import { AiOutlineArrowRight } from 'react-icons/ai';

function Tournament() {
    const [open,setOpen] = useState(false);
    const [register,setregister] = useState(true);
  return (
    <div className="bg-gradient-to-b from-sky-400 to-violet-600 p-2 ">
    <div className="flex flex-col gap-4 h-fit items-center italic  bgcard">
      <div className="w-full flex flex-col items-center ">
        <img src={pubg} alt="" className="h-48 w-full  object-center md:h-96 md:w-10/12 md:my-8"/>
        <div className="absolute top-48 h-8 text-lg font-semibold italic skew-x-12 px-2 text-center left-auto right-auto bgcard boxshadowgray md:top-96 md:h-14 md:px-9 md:text-3xl">
            PlayerUnknown's Battlegrounds
        </div>
      </div>
      <div className="my-4 flex flex-col text-xl items-center bgcard gap-4 p-3 w-11/12 ">
        <div className="flex flex-col md:flex-row md:gap-9"> 
        <span ><span className="font-semibold">Start Date: </span>12/08/2023</span>
        <span ><span className="font-semibold">End Date:</span> 12/08/2023</span>
        </div>
      
        <div className="flex gap-3 md:flex-row md:gap-9">

        <div ><span className="font-semibold" >Total slots:</span> 50</div>
        <div ><span className="font-semibold">Slots Filled:</span> 12</div>
        </div>
        <div ><span className="font-semibold">Status:</span> Upcoming </div>
        <div className="text-violet-600 font-bold text-3xl">Winner Grabs 20,000</div>
      </div>
      <div className="flex flex-col items-center">
            {
                !register ? <button className="text-xl bg-violet-600 px-4 py-2 rounded-lg font-semibold textColor italic" >
                REGISTER
            </button>
                : <div className="flex gap-5 flex-col md:flex-row md:gap-9">
                        <button className="text-xl bg-violet-600 px-4 py-2 rounded-lg font-semibold textColor italic" >
                         Edit Details
                        </button>
                        <button className="text-xl bg-red-600 px-4 py-2 rounded-lg font-semibold textColor italic" >
                         Cancel Registration
                        </button>
                    </div>
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
            <tr>
                  <th className="text-violet-600 md:text-xl">Sl.No</th>
                  <th className="text-violet-600 md:text-xl">Name</th>
                  <th className="text-violet-600 md:text-xl">Registration Date</th>
                </tr>
            {[...Array(8)].map(()=>{
                return  <tr  className="">
                <td className="">1</td>
                <td className="">Name</td>
                <td className="">registrationDate</td>
              </tr>
            })}
            </table>
            
            </div>:null
            
        }

      </div>
    </div>
    </div>
  );
}

export default Tournament;
