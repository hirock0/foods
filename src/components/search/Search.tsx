
'use client'

import { usePathname, useRouter,useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchForUser(){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const{replace} = useRouter();
    const searchHandler = (e:any)=>{
        const params = new URLSearchParams(searchParams);
        if(e.target.value.length !== 0){
            params.set("q" ,e.target.value)   
        }else{
            params.delete("q")
        }
        replace(`${pathname}?${params}`)

    }
    return(
        <div>
        <input
        type='text'
        placeholder='search...'
        className=' h-10 pl-2 rounded-md text-black'
        onChange={(e)=>searchHandler(e)}/>
        </div>
    )
}