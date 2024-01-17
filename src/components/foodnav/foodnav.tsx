"use client"
import Image from "next/image"
import Link from "next/link"
import Style from './foodnav.module.css'
import { useEffect, useState } from "react"



export default function FoodNav(){
    const[side,setSlide]=useState(false)

const menuSide=()=>{
    let foodSideBar = document.querySelector("#foodSidebar") as HTMLElement;
    if(!side){
        foodSideBar.style.transform = `translateX(${0}px)`
        setSlide((prev)=>!prev);
    }else{
        foodSideBar.style.transform = `translateX(${-200}px)`
        setSlide((prev)=>!prev);
    }
    
}
const foodsSidebarOutClicking =()=>{
    let foodSideBar = document.querySelector("#foodSidebar") as HTMLElement;
    document.addEventListener("click",(e:any)=>{
        if(!foodSideBar.contains(e.target) && e.target.id !== "menuLine"){
            foodSideBar.style.transform = `translateX(${-200}px)`
            setSlide(false);
        }
    })
}

useEffect(()=>{
    foodsSidebarOutClicking()
   
},[side])
    return(
        
        <div className=" w-screen backdrop:filter backdrop-blur-lg opacity-100 bg-gray-800/80 h-24 flex items-center justify-between pl-10 pr-10 fixed top-0 right-0 left-0 z-40">
            <div className=" flex gap-3">
                <Image
                    src={`/all_svg/menu-line.svg`}
                    alt={`hambergermenu`}
                    width={20}
                    height={20}
                    id='menuLine'
                    className=" cursor-pointer"
                    onClick={menuSide}
                />
                <Link href={`/users/dashboard`}><button className=" text-white">Dahboard</button></Link>
            </div>
            <div className=" text-white">
                logo div
            </div>
            <div>
                <ul id={Style.variousfood} className=" headerUl list-none deco flex gap-4 text-white max-sm:text-sm sm:text-xl md:text-xl">
                    <li><Link href={'/'}>Home</Link></li>

                </ul>
            </div>
        </div>
    )
}