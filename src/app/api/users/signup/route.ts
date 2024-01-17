import { SignupSchemaData } from "@/lib/DBSchema/schemaData";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionStr } from "@/lib/DBConnection/dbConnection";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcrypt';
ConnectionStr();
export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const{
        username,
        email,
        mobile,
        password,
        gender,
        identity,
        address,
        policy,
        image,}=reqBody;
        
        const Salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password,Salt);
        if(policy){
            let newSchema = await new SignupSchemaData({
                username,
                email,
                mobile,
                password:hashPassword,
                gender,
                identity,
                address,
                policy,
                image
            });
            const data = await newSchema.save();
            const tokenData = {
                id:data._id,
                username:data.username,
                email:data.email
            };
            const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"});
            const response = NextResponse.json({Message:"Data is founded",success:true,data});
            response.cookies.set("token",token,{httpOnly:true});
            return response;
          
        }else{
            console.log("data not found");
            return NextResponse.json({Message:"Policy is not selected",success:false},{status:500});

        }


    }catch(error:any){
        return NextResponse.json({message:"Data is not submited",success:false});
    }
};
export  async function GET(request:NextRequest){
    const data = await SignupSchemaData.find();
    return NextResponse.json({message:"Data found",success:true,data});
};