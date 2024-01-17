'use client'
import Style from './adminNav.module.css'
import SearchForUser from '@/components/search/Search'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export const AdminNav = () => {
    const pathname = usePathname()
    return (
        <div id={Style.header}>
            <button>Users</button>
            {
                pathname == "/admin/users"?<SearchForUser/>:null
            }

            <Link href={`/`}>Home</Link>
    </div>
    )
}
