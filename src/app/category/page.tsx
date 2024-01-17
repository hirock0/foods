import Link from "next/link";

export default function Category(){
    return(
        <div className=" min-h-screen bg-zinc-600 text-white">
            <h1>this is a category page</h1>
            <Link href={`/`}>Home</Link>
        </div>
    )
}