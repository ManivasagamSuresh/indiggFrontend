import React, { useEffect, useState } from "react";
import loader from "../../images/loader.gif"
import { useFormik } from "formik";
import axios from "axios";
import { Config } from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editParticipant } from "../../redux/tourSlice";

function Editparticipant() {
  const [ log,setLog] =useState(false);
  const navigate = useNavigate();
  const {currentUser} = useSelector(state=>state.user);
  const {currentTour} = useSelector(state=>state.tour);
  const params = useParams();
    const dispatch = useDispatch();

  useEffect(()=>{
    const value = currentTour.participants.filter((data)=>{return data._id == currentUser._id});
    console.log(value[0]);
    formik.setValues(value[0]);
  },[])

  const formik = useFormik({
    initialValues:{
      "name":"",
      "email":"",
      "_id":""
    },
    validate:(values)=>{
      let error={};
      if(!values.name){
        error.name = "kindly enter the name"
      }
      if(!values.email){
        error.email = "kindly enter the email id"
      }
      return error;
    },
    onSubmit:async(values)=>{
      try {
        setLog(true);
        console.log(currentUser)
        console.log("params:",params.id)
        const updatedValue = {...values};
        updatedValue._id = currentUser._id;
        console.log(values)
        const user = await axios.put(`${Config.api}/tournament/editParticipants/${params.id}`,updatedValue);
        dispatch(editParticipant(values))
        console.log(user.data);
        setLog(false);
        navigate(`/tournament/${params.id}`);
      } catch (error) {
        console.log(error)
      }
    }
  })


  return <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-sky-400 to-violet-600 ">
    <div className="text-white absolute top-2 right-6 text-2xl cursor-pointer" onClick={()=>{ navigate(`/tournament/${params.id}`);}}>X</div>
    <div className="text-2xl font-semibold italic mb-6 md:text-3xl">EDIT DETAILS</div>
            <form action="" className="flex flex-col items-center justify-center gap-6 md:gap-8" onSubmit={formik.handleSubmit}>
                <input type="text"  placeholder="Name" onChange={formik.handleChange} value={formik.values.name} name="name" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} name="email" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <button type="submit" className="bg-violet-900 px-6 py-1 text-xl font-semibold textColor flex items-center rounded-md">{log ? <><span>Updating</span><img src={loader} alt="" className="w-12"  /> </>:<span className="px-8 py-1">Update</span>  }</button>
            </form>
            
        </div>;
}

export default Editparticipant;
