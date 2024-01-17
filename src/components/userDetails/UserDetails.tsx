"use client"
import { ConnectionStr } from "@/lib/DBConnection/dbConnection";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
    ConnectionStr();
export default  function UserDetails(){
  const router = useRouter();
  const [userdets,setUserdets]=useState({username:"",email:"",address:"",gender:"",image:""})
  const SpecialData = async()=>{
    try{
      const data = await axios.get("/api/users/meUser");
      const dat = data.data.user;
      setUserdets(dat);
    }catch(error:any){
      router.push('/');
      router.refresh();
    }

  }
useEffect(()=>{
  SpecialData();

},[userdets]);
    
    return(
        <main>
       <div id="toogle">
          <div className=" w-full flex items-center justify-center">
          <div className="  h-20 w-20 rounded-full flex items-center justify-center overflow-hidden">
          <img className="" width={100} height={100} src={userdets.image} />
          </div>
        </div>

        <div className=" w-full"> 
          <ul className=" max-sm:text-xs max-sm:pl-1 max-sm:pr-1 text-sm pl-5 pr-5 pt-2 flex flex-col gap-2">
            <li><span>Name:</span ><span>{userdets.username}</span></li>
            <li><span>Email:</span><span>{userdets.email}</span></li>
            <li><span>Address:</span><span>{userdets.address}</span></li>
          </ul>
        </div>

     </div>

        </main>
    )
}