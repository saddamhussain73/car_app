export default function Navbar(){
    return(
<nav className="w-full h-32 bg-slate-950">

    <div className="flex justify-between px-44 py-2 border-b">    
        <div className=" font-semibold text-white hover:text-red-700 ">Downlod via SMS</div>
        <div className="font-semibold text-white hover:text-red-700">Sing In <span className="border-l mt-2"></span> Sing Up</div>
    </div>

<div className="flex justify-between px-20 mt-10">
<div className="w-20 h-15 font-bold place-content-center text-center text-white hover:opacity-50 transition duration-300"><img className="w-20" src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" alt="sorry" /></div>
<ul className="space-x-10 text-white font-semibold flex py-1">
    <li className=" hover:text-red-700">Used Cars <span className="text-xs">{'v'}</span></li>
    <li className=" hover:text-red-700">New Cars <span className="text-xs">{'v'}</span></li>
    <li className=" hover:text-red-700">Bickes <span className="text-xs">{'v'}</span></li>
    <li className=" hover:text-red-700">Auto Store <span className="text-xs">{'v'}</span></li>
    <li className=" hover:text-red-700">Videos</li>
    <li className=" hover:text-red-700">Forums</li>
    <li className=" hover:text-red-700">Blog</li>
    <li className=" hover:text-red-700">More<span className="text-xs">{'v'}</span></li>
</ul>

<div className=" bg-red-800 w-28 h-8 flex items-center justify-center font-semibold text-center text-white hover:opacity-50 transition duration-300">
    Post an Ad
    <span className=" text-xs ml-1">{'v'}</span>
    </div>
</div>

</nav>

    )
}