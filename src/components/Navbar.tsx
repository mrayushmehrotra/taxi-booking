import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className="flex justify-between p-3 px-10 border-b-[4px] shadow-sm  ">
      <div className="flex gap-10 items-center">
        <Image height={60} width={120} src="/logo.png" alt="Logo" />
        <div className=" hidden md:flex gap-6">
          <h2
            className="hover:bg-gray-100 p-2 cursor-pointer 
           rounded-md coursor-pointer transition-all"
          >
            Home
          </h2>
          <h2
            className="hover:bg-gray-100 p-2 cursor-pointer 
           rounded-md coursor-pointer transition-all"
          >
            History
          </h2>
          <h2
            className="hover:bg-gray-100 p-2 cursor-pointer 
           rounded-md coursor-pointer transition-all"
          >
            Help
          </h2>
        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
