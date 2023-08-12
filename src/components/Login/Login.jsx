import React, { useState } from "react";
import loader from "../../images/loader.gif"
import { useFormik } from "formik";
import axios from "axios";
import { Config } from "../../config";
import { useNavigate } from "react-router-dom";

function Login() {
    const [ log,setLog] =useState(false);
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues:{
        "email":"",
        "password":"",
      },
      validate:(values)=>{
        let error={};
        if(!values.email){
          error.email = "kindly enter the email id"
        }
         if(!values.password){
          error.email = "kindly enter the password"
        }
        return error;
      },
      onSubmit:async(values)=>{
        try {
          console.log(values)
          const user = await axios.post(`${Config.api}/user/login`,values);
          console.log(user.data);
          formik.resetForm();
          if(user.data === "success"){
            navigate("/")
          }
        } catch (error) {
          console.log(error)
        }
      }
    })
    const handleSignup = ()=>{
      navigate("/signup")
    }
  return <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-sky-400 to-violet-600 ">
    <div className="text-2xl font-bold italic mb-6 md:text-3xl">LOGIN</div>
            <form action="" className="flex flex-col items-center justify-center gap-6 md:gap-8" onSubmit={formik.handleSubmit}>
                
                <input type="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} name="email" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <input type="pasword" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} name="password" className=" border-b border-zinc-900  bg-transparent  outline-none rounded-sm h-8 md:w-96"/>
                <button type="submit" className="bg-violet-900 px-6 py-1 text-xl font-semibold textColor flex items-center rounded-md">{log ? <><span>Logging In</span><img src={loader} alt="" className="w-12"  /> </>:<span className="px-8 py-1">Log in</span>  }</button>
            </form>
                <div  className="textColor my-2" >Don't have an account?. <span onClick={handleSignup} className="cursor-pointer underline">Sign Up</span></div>
        </div>;
}

export default Login;