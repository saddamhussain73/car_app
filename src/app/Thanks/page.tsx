import Link from "next/link"

export default function Thanks(){
    return(
        <div>
            <div className="w-full place-content-center bg-white text-center my-48">

<div className=" text-blue-500 text-6xl font-bold">Thank You For Shopping!!!</div>
<div className="font-thin my-10 text-black">Your Order Will Be Delivered In 3 Days</div>
<Link href="/" className="bg-blue-800 p-[6px] px-[12px] hover:opacity-50 transition duration-300 hover:text-white rounded-md">GO TO HOME</Link>
            </div>
        </div>
    )
}