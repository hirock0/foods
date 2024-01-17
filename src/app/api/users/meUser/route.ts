import { NextRequest, NextResponse } from "next/server";
import { GetTokenData } from "@/lib/helper/Helper";
import { SignupSchemaData } from "@/lib/DBSchema/schemaData";
import { ConnectionStr } from "@/lib/DBConnection/dbConnection";
ConnectionStr()
export async function GET(request:NextRequest){
    try{
        const userID = await GetTokenData(request);
        const user:any = await SignupSchemaData.findOne({_id:userID})
        return NextResponse.json({message:"Data is gotten", user})
    
    }catch(error:any){
        
        throw new Error("File not found")
    }

   
}