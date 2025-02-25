import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  const headerMenu = [
    {
      id: 1,
      name: "Ride",
      icon: "/taxi.png",
    },
    {
      id: 2,
      name: "Package",
      icon: "/Package.png",
    },
  ];

  return (
    <div className="p-5 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between">
      <div className='flex gap-24 items-center'>
      <div className="flex flex-col items-center">
      <video 
          className="w-[50px] h-[40px] rounded-md " 
          autoPlay 
          loop 
          muted
        >
          <source src="/hail_12749409.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="text-sm font-semibold mt-2">CabX</h2>
        </div>
        <div className='flex gap-6 items-center'>
            {headerMenu.map((item)=>(
                <div className='flex gap-2 items-center'>
                    <Image src={item.icon}
                    width={30} height={30}/>
                    <h2 className='text-[14px] font-medium'>{item.name}</h2>
                </div>

            ))}
        </div>
      </div>
      <UserButton/>
    </div>
  );
}

export default Header;
