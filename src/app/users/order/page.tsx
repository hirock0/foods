'use client'
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Order(){
     const router = useRouter()
    const[user,setUser]=useState({
        username:"",
        email:"",
        mobile:"",
        address:"",
    });

    const onOrder = async(e:any)=>{
        e.preventDefault();
        try{
           await axios.post("/api/users/order",user);;
        }catch(error:any){
            console.log("Data not sent");
        }
        finally{
            router.refresh();
        }
    }




    return(
        <main className=" bg-black min-h-screen flex flex-col items-center justify-center">
            <span className=" text-white text-2xl p-5 font-semibold">Order Now</span>
            <div className=" backdrop:filter backdrop-blur-mb opacity-100 text-white backdrop-brightness-100 bg-slate-800/100 h-full p-12 rounded-md">
               <form className=" flex flex-col gap-6">
                <span className=" flex justify-between items-center gap-5">
                    <label form="username">Username: </label>
                    <input 
                    type="text"
                    placeholder="username" 
                    id="username"
                    name="username"
                    className=" h-10 pl-4 rounded-sm text-black"
                    value={user.username}
                    onChange={(e)=>setUser({...user, username:e.target.value})}
                    />
                </span>
                <span className=" flex justify-between items-center gap-5">
                    <label form="username">Email: </label>
                    <input 
                    type="email"
                    placeholder="email" 
                    id="email"
                    name="email"
                    className=" h-10 pl-4 rounded-sm text-black"
                    value={user.email}
                    onChange={(e)=>setUser({...user, email:e.target.value})}
                    />
                </span>

                <span className=" flex justify-between items-center gap-5">
                    <label form="username">Mobile: </label>
                    <input
                    type="text"
                    placeholder="mobile" 
                    id="mobile"
                    name="mobile"
                    className=" h-10 pl-4 rounded-sm text-black"
                    value={user.mobile}
                    onChange={(e)=>setUser({...user, mobile:e.target.value})}
                    />
                </span>

                <span className=" flex justify-between items-center gap-5">
                    <label form="username">Address: </label>
                    <input 
                    type="address"
                    placeholder="address" 
                    id="address"
                    name="address"
                    className=" h-10 pl-4 rounded-sm text-black"
                    value={user.address}
                    onChange={(e)=>setUser({...user, address:e.target.value})}
                    />
                </span>
                <span onClick={onOrder} className=" flex justify-center"><button className=" bg-slate-700 text-white h-10 w-40 rounded-lg">Order Place</button></span>
               </form>
            </div>
        </main>
    );
};