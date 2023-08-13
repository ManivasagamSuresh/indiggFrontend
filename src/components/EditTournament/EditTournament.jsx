import React, { useEffect, useState } from "react";
import loader from "../../images/loader.gif"
import { useFormik } from "formik";
import axios from "axios";
import { Config } from "../../config";
import { useNavigate, useParams } from "react-router-dom";

function EditTournament() {
  const [ log,setLog] =useState(false);
  const navigate = useNavigate();
    const params = useParams();

  useEffect(()=>{
    const fetchData = async()=>{
        const data = await axios.get(`${Config.api}/tournament/get/${params.id}`);
        console.log(data.data)
        formik.setValues(data.data);
    }
    fetchData();
  },[])
  const formik = useFormik({
    initialValues:{
      "name":"",
      "status":"",
      "TotalParticipants":"",
      "startDate":"",
      "endDate":"",
      "prize":"",
      "image":"",
      "coverImg":"",
    },
    validate:(values)=>{
      let error={};
      if(!values.name){
        error.name = "kindly enter the name"
      }
    
       if(!values.TotalParticipants){
        error.TotalParticipants = "kindly enter the TotalParticipants"
      }
      if(!values.startDate){
        error.startDate = "kindly enter the startDate"
      }
      if(!values.endDate){
        error.endDate = "kindly enter the endDate"
      }
      if(!values.prize){
        error.prize = "kindly enter the prize"
      }

      return error;
    },
    onSubmit:async(values)=>{
      try {
        setLog(true);
        console.log(values)
        const user = await axios.put(`${Config.api}/tournament/edit/${params.id}`,values);
        console.log(user.data);
        setLog(false);
        formik.resetForm();
        navigate(  `/tournament/${params.id}`);
      } catch (error) {
        console.log(error)
      }
    }
  })


  return <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-sky-400 to-violet-600 ">
     <div className="text-white absolute top-2 right-6 text-2xl cursor-pointer" onClick={()=>{ navigate( `/tournament/${params.id}`);}}>X</div>
    <div className="text-2xl font-semibold italic mb-6 md:text-3xl">EDIT TOURNAMENT</div>
            <form action="" className="flex flex-col items-center justify-center gap-6 md:gap-8" onSubmit={formik.handleSubmit}>
                <input type="text"  placeholder="Name" onChange={formik.handleChange} value={formik.values.name} name="name" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                
                <select placeholder="Name" defaultValue="Upcoming" className="border-b border-zinc-900 bg-transparent outline-none rounded-sm h-8 md:w-96" onChange={formik.handleChange} value={formik.values.status} name="status">
                <option value="" disabled className="text-gray-200"> Select status</option>
                    <option className="bg-transparent" value="Upcoming">Upcoming</option>
                    <option className="bg-transparent" value="Completed">Completed</option>
                    <option className="bg-transparent" value="Active">Active</option>
                </select>
                <input type="text" placeholder="Total Participants" onChange={formik.handleChange} value={formik.values.TotalParticipants} name="TotalParticipants" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="text" placeholder="prize" onChange={formik.handleChange} value={formik.values.prize} name="prize" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="date" placeholder="Start Date and Time" onChange={formik.handleChange} value={formik.values.startDate} name="startDate" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="date" placeholder="End Date and Time" onChange={formik.handleChange} value={formik.values.endDate} name="endDate" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="text" placeholder="Image Link" onChange={formik.handleChange} value={formik.values.image} name="image" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="text" placeholder="Cover Image Link" onChange={formik.handleChange} value={formik.values.coverImg} name="coverImg" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <button type="submit" className="bg-violet-900 px-6 py-1 text-xl font-semibold textColor flex items-center rounded-md">{log ? <><span>Updating</span><img src={loader} alt="" className="w-12"  /> </>:<span className="px-8 py-1">Update</span>  }</button>
            </form>
             
        </div>;
}

export default EditTournament;
