'use client'
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Style from "./signup.module.css";
export default function Signup(){
    const router = useRouter();
    const[user,setUser]=useState({
        username:"",
        email:"",
        mobile:"",
        password:"",
        gender:"",
        identity:"",
        address:"",
        policy:false,
        image:""
    });

    const onSignUp = async(e:any)=>{
        e.preventDefault();
        try{
           const signupData =  await axios.post("/api/users/signup",user);
           if(signupData.data.success){
              router.push("/");
           }
        }catch(error:any){
            console.log("Data not sent");
        }finally{
            router.refresh();
        }
    }



    const convertToBase64 = (e:any)=>{
        e.preventDefault();
        if(e.target.files[0].size > 101376){
            console.log("file is too large");
        }else{
            let reader:any = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload=()=>{
                setUser({...user,image:reader.result});
               
            }
            reader.onerror=(error:any)=>{
                console.log("Error",error);
            }
        }

    };



    return(
        <main id={Style.main} className=" min-h-screen flex flex-col items-center justify-center">
            <span className=" text-white text-2xl p-5 font-semibold">Sign Up</span>
            <div id={Style.signupalatediv} className=" backdrop:filter backdrop-blur-mb opacity-100 text-white backdrop-brightness-100 bg-slate-800/100 h-full lg:p-12 md:p-10 sm:p-8 max-sm:p-8 rounded-md">
               <form id={Style.form} className=" flex flex-col gap-6 md:gap-4 sm:gap-2 max-sm:gap-2">
                <span className=" flex justify-between items-center gap-5">
                    <label form="username">Username: </label>
                    <input 
                    type="text"
                    placeholder="username" 
                    id={Style.inp}
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
                    id={Style.inp}
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
                    id={Style.inp}
                    name="mobile"
                    className=" h-10 pl-4 rounded-sm text-black"
                    value={user.mobile}
                    onChange={(e)=>setUser({...user, mobile:e.target.value})}
                    />
                </span>
                <span className=" flex justify-between items-center gap-5">
                    <label form="username">password: </label>
                    <input
                    type="text"
                    placeholder="password"
                    id={Style.inp}
                    className=" h-10 pl-4 rounded-sm text-black"
                    value={user.password}
                    onChange={(e)=>setUser({...user, password:e.target.value})}
                    />
                </span>
                <span id={Style.genderDiv} className=" flex justify-between gap-5">
                    <label form="username">Gender: </label>
                    <span id={Style.gender} className=" flex w-full justify-center gap-10 pl-52">
                        <label className="flex gap-2 items-center">male<input type="radio" name="gender" value={"male"} onChange={(e)=>setUser({...user, gender:e.target.value})}/></label>
                        <label className="flex gap-2 items-center">female<input type="radio" name="gender" value={"female"} onChange={(e)=>setUser({...user, gender:e.target.value})}/></label>
                    </span>
                </span>
                <span className=" flex justify-between items-center gap-5">
                    <label form="username">ID No: </label>
                    <input
                    type="text"
                    placeholder="identity" 
                    id={Style.inp}
                    name="identity"
                    className=" h-10 pl-4 rounded-sm text-black"
                    value={user.identity}
                    onChange={(e)=>setUser({...user, identity:e.target.value})}
                    />
                </span>
                <span className=" flex justify-between items-center gap-5">
                    <label form="username">Address: </label>
                    <input 
                    type="address"
                    placeholder="address" 
                    id={Style.inp}
                    name="address"
                    className=" h-10 pl-4 rounded-sm text-black"
                    value={user.address}
                    onChange={(e)=>setUser({...user, address:e.target.value})}
                    />
                </span>
                <span id={Style.policyspan} className=" flex justify-between items-center gap-5">
                    <label id={Style.policy} className="flex items-center gap-2"><input type="checkbox" name="policy" onChange={(e)=>setUser({...user, policy:true})}/>policy:</label>
                    <label id={Style.policyText} className=" text-sm font-thin">A privacy policy is a legaldisclose what data you collect from users</label>
                </span>
                <span className=" flex justify-between items-center gap-5">
                    <input
                            accept="image/*"
                            type="file"
                            onChange={convertToBase64}
                           
                        
                        />

                {user.image == "" || user.image == null?"":<img className="" width={100} height={100} src={user.image} />}
                </span>
                <span className=" flex justify-center"><button  onClick={onSignUp}  id={Style.signupBtn} className=" bg-slate-700 text-white h-10 w-40 rounded-lg">Sign Up</button></span>
               </form>
            </div>
        </main>
    );
};