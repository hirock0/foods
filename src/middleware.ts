import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  const isPublic = path === "/users/login" || path === "/users/signup";
  if(isPublic && token){
    return NextResponse.redirect(new URL("/",request.nextUrl))
  }
  if(!isPublic && !token){
    return NextResponse.redirect(new URL("/users/login",request.nextUrl))
  }
}
export const config={
  matcher:[
      '/foods',
      '/users/dashboard',
      '/users//login',
      '/users/signup'
  ]
}
