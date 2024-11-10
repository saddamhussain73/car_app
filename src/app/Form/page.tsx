import Link from "next/link"


export default function Form(){
    return(
        <div>
            <div className="text-5xl font-semibold text-center uppercase mt-10">
                <h1>Enter Your Details</h1>
            </div>
            <div className="p-3">
                <form className="w-full border p-3 flex flex-col justify-center items-center gap-5">
                    <input type="Email" className="border border-blue-300 rounded-lg px-1 w-2/12 mt-40" placeholder="Enter Your Email" />
                    <input type="Password" className="border border-blue-300 rounded-lg px-1 w-2/12 mt-3" placeholder="Enter Your Password" />
                    <input type="Text" className="border border-blue-300 rounded-lg px-1 w-2/12 mt-3" placeholder="Card Number" />
                    <input type="Text" className="border border-blue-300 rounded-lg px-1 w-2/12 mt-3" placeholder="Address" />
                    <Link href="/Thanks" className="p-3 px-7 mt-3 w-1.5/12 border rounded-lg bg-blue-900 text-white font-semibold hover:opacity-50 tranition duration-300">Place Your Order </Link>
                </form>

            </div>
        </div>
    )
}