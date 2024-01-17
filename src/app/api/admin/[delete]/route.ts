import { SignupSchemaData } from "@/lib/DBSchema/schemaData";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request:NextRequest,content:any){
    try{
        const id = await content.params.delete
        await SignupSchemaData.findByIdAndDelete(id);
        return NextResponse.json({message:"file delete successfully", success:true})
    }catch(error:any){
        throw new Error("File not found")
    }
  

}