import { NextResponse } from "next/server";
export async function GET(requetst:NextResponse){
    const token =await requetst.cookies.get("token")?.value
    return NextResponse.json({message:"Dta is found",token})
}