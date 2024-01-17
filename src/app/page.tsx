"use client"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Loginbtn from "@/components/loginBtn/Loginbtn";
import UserDetails from "@/components/userDetails/UserDetails";
export default function Home({searchParams}:{
  searchParams:any
}){
  // all-declaration-variable-start
  const router = useRouter();
  const[tokendd,setTokendd]=useState("");
  const[logout,setLogout]=useState(false);
  const[probt,setPropt]=useState(false);
  const[close,setClose]=useState(false);

   // all-declaration-variable-end

//  data-part-start
  const onLogoutBtn = async()=>{
    let prelogdiv = document.querySelector("#preLoginDiv") as HTMLElement;
    let proplist = document.querySelector("#prop") as HTMLElement;
      try{
          await axios.get("api/users/logout");
          
      }catch(error:any){
          console.log("logout no occur");
      }finally{
        prelogdiv.style.display="none";
        proplist.style.display="none";
        setLogout(false);
        setPropt(false);
        router.refresh();
        
      }

  }
  const tok = async()=>{
    try{
      const tokenD = await axios.get("/api/users/tokenpassing");
      setTokendd(tokenD.data.token);
    }catch(error:any){
      throw new Error("Token not found");
    }
    finally{
      router.refresh();
    }

  }
//  data-part-end


// profile-start
const profile = ()=>{
  let proplist = document.querySelector("#prop") as HTMLElement;
  let Downarrow = document.querySelector("#downarrow") as HTMLElement;
  if(!probt){
    proplist.style.display="block";
    Downarrow.style.rotate=`${180}deg`;
    setPropt((prev)=>!prev);
  }else{
    proplist.style.display="none";
    setPropt((prev)=>!prev);
    Downarrow.style.rotate=`${0}deg`;
  }
}
// profile-end



// navbar logout-start

  const onLogout = ()=>{
    let preLogindiv = document.querySelector("#preLoginDiv") as HTMLElement;
    if(logout){
      preLogindiv.style.display = "none";
      setLogout((prev)=>!prev)
    }else{
      preLogindiv.style.display = "block";
      setLogout((prev)=>!prev);
    }

 }
 // navbar logout-end

//  logout-div-start
  const closeLogout=(e:any)=>{
    let prelogdiv = document.querySelector("#preLoginDiv") as HTMLElement;
    if(!close){
      prelogdiv.style.display="none";
      setLogout(false);
    }
}

//  logout-div-end



// all-window-clicking-event-start
  const allFuntion=()=>{
    let hProfile = document.querySelector("#headProfile") as HTMLElement;
    let proplist = document.querySelector("#prop") as HTMLElement;
    let prelogdiv = document.querySelector("#preLoginDiv") as HTMLElement;
    let lgMain = document.querySelector("#lgmain") as HTMLElement;
    let profile = document.querySelector("#prop") as HTMLElement;
        document.addEventListener("click",(e:any)=>{
          if(!profile.contains(e.target) && !lgMain.contains(e.target) && !lgMain.contains(e.target) && !hProfile.contains(e.target) && e.target.id !== "logoutBtn" ){
                prelogdiv.style.display="none";
                proplist.style.display="none";
                setLogout(false);
                setPropt(false);
               
       
          }
  })
  }
// all-window-clicking-event-end


// useEffect Hook uses-start
  useEffect(()=>{
    tok();
    allFuntion();
  },[logout,probt,tokendd,close]);

  // useEffect Hook uses-end

  return(
    <main id="home_page" className="  p-4 max-sm:p-2 relative">
        {/* home_left-side-start */}
          <div id="home_div" className="  flex flex-col">
            {/* nav-start */}
            <div className=" pt-6 pb-6 flex items-center justify-between pr-10 pl-10">
                <div className="">
                <h1 className="sm:text-2xl md:text-3xl max-sm:text-xl">F<span className=" text-yellow-400">OO</span>D</h1>
                </div>
                <div className=" flex items-center">
                  <ul className=" relative flex items-center justify-between max-sm:gap-2 max-sm:text-sm sm:gap-3 md:gap-4 lg:gap-5">
                    <li><Link href={``}>Home</Link></li>
                    <li className=" max-sm:hidden"><Link href={`/category`}>Categorys</Link></li>
                      
                      <li id="headProfile" >
                      {
                       tokendd?
                       <div  onClick={profile} className=" flex cursor-pointer"><span>Pofile</span><span><Image id="downarrow"  className=" cursor-pointer"  src={"/all_svg/arrow-down-s-line.svg"} alt="downArrow" width={20} height={20}/></span></div>
                       :<div><Loginbtn/></div>
                       }

                    </li>
                    <li>

                    <button id="logoutBtn" onClick={onLogout}>Logout</button>
                    
                    {/* <ProfileDetails/> */}
                    </li>
                    <li>
                    <Link id="logoutBtn" href={`/admin`}>Admin</Link>
                    </li>
                    {/* Profile-start */}
                        <div id="prop" className=" absolute top-12 right-0 shadow-lg bg-green-100 p-2 rounded-md hidden cursor-default">
                          <UserDetails/>
                       </div>
                       {/* Profile-end */}
                  </ul>
                </div>
            </div>
            {/* nav-end */}
            {/* ------- */}
    
            <div id="home_bottom" className=" gap-5 h-full max-sm:pl-2 pl-10 flex flex-col justify-center">           
              <div className=" max-sm:text-3xl text-5xl font-semibold">
                <h1 className=" text-yellow-400">Organic</h1>
                <h1 className=" text-stone-200">Healthy Fresh</h1>
                <h1 className=" text-stone-200">Food For You<span className=" text-yellow-400">.</span></h1>
              </div>
              <div>
                  <p className=" pr-20 max-sm:pr-2 text-white  max-sm:text-sm  ">
                    Lorem, ipsum dolot. Asperiores iusto, distinctio cumque dignissimos fugiat non nulla voluptatibus praesentium. Numquam repudiandae 
                  </p>
              </div>
              <div>
               <Link href={`/foods`}><button id="buybtn" className=" border hover:bg-slate-500/100 p-2 pr-10 pl-10 max-sm:p-1 max-sm:pr-5 max-sm:pl-5 max-sm:text-xs text-white">Foods are available here</button></Link>
              </div>
            </div>
      
          </div>
          
          <div id="preLoginDiv" className=" loginmainDiv hidden absolute h-screen w-full top-20">
              <div className="  h-full w-full flex justify-center pt-20">
                <div id="lgmain" className=" bg-white rounded-md h-44 w-96 flex flex-col items-center justify-between pb-4">
                    <div className=" text-sm flex justify-around w-full pt-8 pr-5 pl-5 ">
                        <span  className=" w-full">Logging Out?</span> <span><Image id="closeBtn" onClick={closeLogout} className=" " src={"/all_svg/close-circle-line.svg"} alt="close" width={20} height={20}/></span>
                    </div>
                    <p className=" text-xs p-2">Thanks for stopping by. See you again soon!</p>
                      <div  className=" flex gap-3">
                        <button  className=" bg-red-500 text-white p-1 text-xs rounded-md hover:bg-red-700 active:bg-red-950" onClick={closeLogout}>Cancel</button>
                        <button onClick={onLogoutBtn}  className=" bg-green-500 text-white p-1 text-xs rounded-md hover:bg-green-700 active:bg-green-950">Log Out</button>
                    </div>
                </div>
              </div>
          </div>  
    </main>
    
  );
};