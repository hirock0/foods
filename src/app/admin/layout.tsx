'use client'
import Link from 'next/link'
import Style from './admin.module.css'
import { AdminNav } from '@/components/admin/adminNav/AdminNav'
export default function DashboardLayout({children}:{
    children:React.ReactNode
}){
 return(
        <main>
            <AdminNav/>
            
            <div id={Style.Body}>
                <div className='' id={Style.Sidebar}>
                    <ul id={Style.Ul} className=' max-sm:text-xs'>
                        <Link href={`/admin/products`}><li>Ecomics</li></Link>
                        <Link href={`/admin/products`}><li>Analitics</li></Link>
                        <Link href={`/admin/products`}><li>Pages</li></Link>
                        <Link href={`/admin/products`}><li>Products</li></Link>
                        <Link href={`/admin/dashboard`}><li className=''>Dashboard</li></Link>
                        <Link href={`/admin/users`}> <li>user</li></Link>
                    </ul>
                </div>
                <div id={Style.InforBody} className=' pl-5 pr-5 pt-5 text-white'>
                    {children}
                </div>
               
            </div>
        </main>
    )
}