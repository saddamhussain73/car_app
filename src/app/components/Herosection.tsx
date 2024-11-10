export default function Herosection(){
    return(
        <div>
        <div className="flex justify-evenly p-3">
            <div className="w-1/3 border p-12 bg-white">
                <h1 className="font-bold text-blue-900">Post Your Ad On SHwheels</h1>
            <ul>
                <li className="text-xs font-semibold mt-3 p-1">Post Your Ad for Free in 3 Easy Steps</li>
                <li className="text-xs font-semibold p-1">Get Genuine offers from verified Buyers</li>
                <li className="text-xs font-semibold p-1">Sell your car Fast at the Best price</li>
            </ul>
            <button className="bg-red-700 text-white font-semibold p-[6px] px-[28px] mt-5 rounded-md hover:opacity-50 transition duration-300">Post Your Ad</button>

            </div>
            <div className="font-semibold text-2xl mt-32 text-slate-600 ">OR</div>
            <div className="w-1/3 border p-12 bg-white">
                <h1 className="font-bold text-blue-900">Try SHwheels sales it for me</h1>
                <ul>
                    <li className="text-xs font-semibold mt-3 p-1">Dedicated Sales Expert to Sell your car</li>
                    <li className="text-xs font-semibold p-1">We Bargain for you and share the Best offer</li>
                    <li className="text-xs font-semibold p-1">We ensure sale & secure Transaction</li>
                </ul>
                <button className="bg-sky-600 text-white font-semibold p-[6px] px-[28px] mt-5 rounded-md hover:opacity-50 transition duration-300">Register Your Car</button>
            </div>

        </div>
        </div>
    )
}