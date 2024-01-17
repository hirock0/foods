import { RequestSchemaData } from "@/lib/DBSchema/schemaData";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionStr } from "@/lib/DBConnection/dbConnection";
ConnectionStr()
export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const{
        username,
        email,
        mobile,
        address,}=reqBody;
        
            let newSchema = await new RequestSchemaData({
                username,
                email,
                mobile,
                address,
            });
            let data = await newSchema.save()
            console.log("user order data found",data)
            return NextResponse.json({Message:"Data is founded",success:true,data})
          

    }catch(error:any){
        return NextResponse.json({message:"Data is not submited",success:false})
    }
}
export  async function GET(request:NextRequest){
    const data = await RequestSchemaData.find()
    return NextResponse.json({message:"Data found",success:true,data})
}