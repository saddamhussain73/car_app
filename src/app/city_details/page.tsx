import Link from "next/link"
import Navbar from "../components/Navbar"

export default function city_details(){
    return(
        <div>
            {/* <Navbar /> */}

            <div className="p-8">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-semibold underline"> Honda City 2024 price in pakistan,images,reviews & specs</h1>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="w-1/6"><img src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945" alt="" /></div>
                </div>

<div className="flex justify-center space-x-4 py-10">
    <button className="bg-white text-blue-900 border border-blue-900 p-[6px] px-[14px] rounded-md hover:bg-blue-900 hover:text-white">Book atest drive</button>
    <button className="bg-white text-blue-900 border border-blue-900 p-[6px] px-[14px] rounded-md hover:bg-blue-900 hover:text-white">request bank finance</button>
    <button className="bg-white text-blue-900 border border-blue-900 p-[6px] px-[14px] rounded-md hover:bg-blue-900 hover:text-white">visit price</button>
    <button className="bg-white text-blue-900 border border-blue-900 p-[6px] px-[14px] rounded-md hover:bg-blue-900 hover:text-white">car inspection</button>
</div>

<div className="flex justify-center">
    <h1 className="text-2xl">Vehicle Discription</h1>
</div>

<ul>
    <li className="text-black font-semibold">Number of doors<span className="text-slate-500">4</span></li>
    <li className="text-black font-semibold">Engine<span className="text-slate-500">660 cc</span></li>
    <li className="text-black font-semibold">Condition<span className="text-slate-500">9.5 / 10</span></li>
    <li className="text-black font-semibold">Driven<span className="text-slate-500">4,500 km</span></li>
    <li className="text-black font-semibold">Suspenion Type<span className="text-slate-500">Soft Suspension</span></li>
    <li className="text-black font-semibold">Avg<span className="text-slate-500">22 Km pr ltr</span></li>
    <li className="text-black font-semibold">Transmission<span className="text-slate-500">Automtic</span></li>
    <li className="text-black font-semibold">Fuel Type<span className="text-slate-500">High octane</span></li>
</ul>
<div className="flex justify-center py-10">
    <h1 className="font-semibold text-2xl text-green-500">PKR 2500000</h1>
</div>

<div className="flex justify-center mt-3">
    <Link href="/Form" className="bg-blue-900 text-white p-[12px] px-[20px] rounded-md font-semibold hover:opacity-50 transition duration-300">Make Payment</Link>
</div>

            </div>
            {/* <Footerother /> */}
        </div>
    )
}