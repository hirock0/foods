import Link from "next/link";

export default function Dashboard(){
    return (
        <div>
            <h1>It's a dashboard</h1>
            <Link href={`/foods`}>Home</Link>
        </div>
    )
}