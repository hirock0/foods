import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const reqBody = await request.json();
    const {image} = reqBody
    console.log(image)
    return NextResponse.json({Message:"Data is found"})
}

export async function GET(request:NextRequest){
    return NextResponse.json({Message:"Data is found"})
}