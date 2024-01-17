'use client'
import Style from './delBtn.module.css'
import { useRouter } from "next/navigation";
export default function DeleteBtn(props:any){
    const router = useRouter();
    const id = props;
    const onDelete = async()=>{
        try{
            let passId = await fetch(`/api/admin/${id.id}`,{
                method:"DELETE"
            })

        }catch(error:any){
            alert("data not found");
        }finally{
            router.refresh();
        }

        
    };
    
    
    return(
        <button id={Style.delBtn} onClick={onDelete} className=" bg-red-500 hover:bg-red-600 active:bg-red-900 max-sm:text-xs p-1 rounded-md">Delete</button>
    );
};