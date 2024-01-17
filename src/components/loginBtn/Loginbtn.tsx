
import Link from "next/link"
export default function Loginbtn(){
    return(
        <button><Link href={{
            pathname:'/users/login',
            query:{
                name:"Hirock",
                village:"Bahadurpur"
            }
    }}>Login</Link></button>
        
    )
}