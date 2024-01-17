'use client'

import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/react";
  import Style from './tableData.module.css';
import { useEffect, useState } from "react";
import DeleteBtn from "@/components/admin/userDeleteBtn/DeleteBtn";

export default function TableData(e:any){
    const data = e.da;
    console.log(e.da)

    const[UsersDets,setUsersDets]=useState([])

    const datFunction = async()=>{
        let data:any = await fetch("/api/admin");
        data = await data.json()
        setUsersDets(data.data)
        
    }
useEffect(()=>{
   datFunction();
},[])

    
   return( 
   <div className=" w-full">
               
    <Table className=" border" aria-label="Example static collection table">
        <TableHeader className="border">
            <TableColumn id={Style.headerText} className="border max-sm:text-xs sm:text-sm md:text-base lg:text-lg">NAME</TableColumn>
            <TableColumn id={Style.headerText} className="border max-sm:text-xs sm:text-sm md:text-base lg:text-lg">EMAIL</TableColumn>
            <TableColumn id={Style.headerText} className="border max-sm:text-xs sm:text-sm md:text-base lg:text-lg">IMAGES</TableColumn>
            <TableColumn id={Style.headerText} className="border max-sm:text-xs sm:text-sm md:text-base lg:text-lg">DELETE</TableColumn>
        </TableHeader>
        <TableBody className="border max-sm:text-xs">
            {
              data.map((item:any)=>(

                <TableRow className="border" key={item.username}>
                    <TableCell id={Style.Username} className="border pl-11 max-sm:pl-1 max-sm:text-xs sm:text-xs md:text-base lg:text-base">{item.username}</TableCell>
                    <TableCell id={Style.email}  className="border pl-20 max-sm:pl-2 max-sm:text-xs sm:text-xs md:text-base lg:text-base">{item.email}</TableCell>
                    <TableCell id={Style.photos}  className="border flex justify-center"><img width={40} src={item.image}/></TableCell>
                    <TableCell id={Style.delBtN} className="border  pl-8 max-sm:pl-2 sm:text-xs sm:pl-2 md:pl-6 lg:pl-20"><DeleteBtn/></TableCell>
                </TableRow>
              ))  
            }
            
        </TableBody>
    </Table>
    </div>
   )
}