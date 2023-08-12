import React, { useState } from "react";
import loader from "../../images/loader.gif"
import { useFormik } from "formik";
import axios from "axios";
import { Config } from "../../config";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [ log,setLog] =useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      "name":"",
      "email":"",
      "password":"",
      "confirmpassword":""
    },
    validate:(values)=>{
      let error={};
      if(!values.name){
        error.name = "kindly enter the name"
      }
      if(!values.email){
        error.email = "kindly enter the email id"
      }
       if(!values.password){
        error.password = "kindly enter the password"
      }
      if(!values.confirmpassword){
        error.confirmpassssword = "kindly enter the password"
      }
      if(values.confirmpassword == values.password){
        console.log("password matches")
      }else{
        error.confirmpassword = "confirm passsword does not matches the password"
      }
      return error;
    },
    onSubmit:async(values)=>{
      try {
        console.log(values)
        const user = await axios.post(`${Config.api}/user/signup`,values);
        console.log(user.data);
        formik.resetForm();
        navigate("/login");
      } catch (error) {
        console.log(error)
      }
    }
  })

const handleSignin = ()=>{
  navigate("/login")
}
  return <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-sky-400 to-violet-600 ">
    <div className="text-2xl font-semibold italic mb-6 md:text-3xl">Sign Up</div>
            <form action="" className="flex flex-col items-center justify-center gap-6 md:gap-8" onSubmit={formik.handleSubmit}>
                <input type="text"  placeholder="Name" onChange={formik.handleChange} value={formik.values.name} name="name" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} name="email" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} name="password" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="password" placeholder="Confirm Password" onChange={formik.handleChange} value={formik.values.confirmpassword} name="confirmpassword" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <button type="submit" className="bg-violet-900 px-6 py-1 text-xl font-semibold textColor flex items-center rounded-md">{log ? <><span>Signing Up</span><img src={loader} alt="" className="w-12"  /> </>:<span className="px-8 py-1">Sign Up</span>  }</button>
            </form>
            <div className="textColor my-2" >Already have a account. <span onClick={()=>{handleSignin()}} className="cursor-pointer underline"> Sign In</span></div>
        </div>;
}

export default Signup;
