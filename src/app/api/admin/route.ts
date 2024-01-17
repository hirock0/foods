
import { NextRequest, NextResponse } from "next/server";
import { ConnectionStr } from "@/lib/DBConnection/dbConnection";
import { SignupSchemaData } from "@/lib/DBSchema/schemaData";
ConnectionStr();

export async function GET(request:NextRequest,content:NextRequest){
    try{
        const data = await SignupSchemaData.find()
        return NextResponse.json({data})
    }catch(error:any){
        throw new Error("File not found")
    }

};