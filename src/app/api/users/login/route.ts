import { NextRequest, NextResponse } from "next/server";
import { SignupSchemaData } from "@/lib/DBSchema/schemaData";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcrypt';
export async function POST(request:NextRequest){

    try{
        const reqBody = await request.json();
        const {email,password}=reqBody;
        const validData = await SignupSchemaData.findOne({email});
        if(!validData){
            console.log("Data not exists in db")
        }else{
            const validPassword = await bcryptjs.compare(password,validData.password);
            if(!validPassword || !validData){
                return NextResponse.json({reuslt:"data not fund",success:false},{status:400})
            }else{
                const tokenData = {
                    id:validData._id,
                    username:validData.username,
                    email:validData.email
                }
                const token:any = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"});
                const response = NextResponse.json({message:"Data is ready",success:true});
                response.cookies.set("token",token,{httpOnly:true});
                return response;
            }
            
        }

    }catch(error:any){
        return NextResponse.json({reuslt:"Data not login",success:false},{status:400})
    }

    
}
export async function GET(){
    return NextResponse.json({message:"th"})
}