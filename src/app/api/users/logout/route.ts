
import { NextResponse } from "next/server";
export async function GET(request:NextResponse){
    try{
        const response:any =  NextResponse.json({message:"token deleted",success:true});
        response.cookies.set("token","",{httpOnly:true,expires:new Date(0)});
        return response
    }catch(error:any){
        console.log("Data Not Correct")
    }


}