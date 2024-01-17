"use client"

import axios from "axios";
import {useState } from "react";
import {  useRouter } from "next/navigation";
import Link from "next/link";
import Style from './login.module.css';


export default function Login(){
    const router = useRouter();
    const [visivle,setVisible]=useState(false);
    const[data,setData]=useState({email:"",password:""});
    const onLogin = async(e:any)=>{
        e.preventDefault();
        try{  
           const loginData =  await axios.post("/api/users/login",data);
           if(loginData.data.success){
            router.push('/', {scroll:true});
           }
           
        }catch(error:any){
            alert("Data not found");

        }finally{
            router.refresh();
        }


    }
    return(
        <main id={Style.main} className=" min-h-screen flex items-center justify-center">
            <div  className=" flex flex-col items-center justify-center max-sm:gap-4 sm:gap-4">
                <label htmlFor="Login_page">Login Page</label>
                <div id={Style.loginpalateDiv} className=" backdrop:filter backdrop-blur-3xl bg-slate-700/80 opacity-90  text-white lg:p-40 md:p-36 sm:p-16 max-sm:p-16  flex items-center rounded-lg justify-center flex-col">
                    <form className=" flex flex-col items-center justify-center gap-4">
                        <span className=" flex flex-col gap-2">
                        <label htmlFor="Emain or UserName">Email or UserName</label>
                        <input
                            type="text"
                            placeholder="Email or Username"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(e)=>setData({...data, email:e.target.value})}
                            className="h-10 pl-3 rounded-sm text-black"
                        />
                        </span>
                        <span className=" flex flex-col gap-2">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="text"
                            placeholder="Password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={(e)=>setData({...data,password:e.target.value})}
                            className=" h-10 pl-3 rounded-sm text-black"
                        />
                        </span>
                        <button onClick={onLogin} className=" bg-red-400 pl-10 pr-10 p-1 rounded-md text-white">Login</button>
                    </form>
                    <Link href={`/users/signup`}><button className="mt-10">Sign Up</button></Link>
                </div>
                
            </div>
        </main>
    );
};