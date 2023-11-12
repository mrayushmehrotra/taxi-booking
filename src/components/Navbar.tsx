import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className="flex">
      <div className="flex gap-10 items-center">
        <Image height={60} width={120} src="/logo.png" alt="Logo" />
        <div className="flex gap-6">
          <h2>Home</h2>
          <h2>History</h2>
          <h2>Help</h2>
        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
