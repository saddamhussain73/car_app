
import Link from "next/link"

import Herosection from "./components/Herosection"


export default function Home() {
  return(

<div>

<Herosection />
<div className="bg-slate-100 py-8 px-10 dark:bg-slate-700">
  <div className=" flex justify-between">
    <h1 className=" font-bold text-2xl text-black">Featured New Cars</h1>
    <div className=" text-blue-700 text-sm font-medium hover:text-red-700">View All New Cars</div>
  </div>
  <ul className="flex font-semibold py-6 space-x-10 text-black">
    <li className=" hover:text-red-700">Popular</li>
    <li className=" hover:text-red-700">Upcoming</li>
    <li className=" hover:text-red-700">Newly Launched</li>
  </ul>
  
  <div className="flex space-x-6 text-center ">
    <ul className=" w-1/4 bg-white text-center">
      <Link href="/alto_details"><li className=" hover:opacity-50 trasition duration-300"><img src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100" alt="sorry" /></li></Link>
      <Link href="/alto_details"><li className="text-blue-900 font-semibold hover:text-red-700">Suzuki Alto</li></Link>
      <Link href="/alto_details"><li className="text-green-500 font-semibold hover:text-red-700">PKR 25.5 - 32.5 lacs</li></Link>
    </ul>

    <ul className=" w-1/4 bg-white text-center">
      <Link href="/city_details"><li className=" hover:opacity-50 trasition duration-300"><img src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945" alt="sorry" /></li></Link>
      <Link href="/city_details"><li className="text-blue-900 font-semibold hover:text-red-700">Honda City</li></Link>
      <Link href="/city_details"><li className="text-green-500 font-semibold hover:text-red-700">PKR 25.5 - 32.5 lacs</li></Link>
    </ul>

    <ul className=" w-1/4 bg-white text-center">
      <Link href="/corolla_details"><li className=" hover:opacity-50 trasition duration-300"><img src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="sorry" /></li></Link>
      <Link href="/corolla_details"><li className="text-blue-900 font-semibold hover:text-red-700">Toyota Corolla</li></Link>
      <Link href="/corolla_details"><li className="text-green-500 font-semibold hover:text-red-700">PKR 25.5 - 32.5 lacs</li></Link>
    </ul>

    <ul className=" w-1/4 bg-white text-center">
      <Link href="/honda_details"><li className=" hover:opacity-50 trasition duration-300"><img src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254" alt="sorry" /></li></Link>
      <Link href="/honda_details"><li className="text-blue-900 font-semibold hover:text-red-700">Honda Civic</li></Link>
      <Link href="/honda_details"><li className="text-green-500 font-semibold hover:text-red-700">PKR 25.5 - 32.5 lacs</li></Link>
    </ul>
  </div>
  </div>
</div>




  )

}
