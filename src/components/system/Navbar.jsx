"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="p-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl z-50 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="h-8 w-auto whitespace-nowrap flex gap-2 justify-start items-center p-1 rounded-md hover:bg-[rgba(225,225,225,0.05)]"
        >
          <Image
            src={Logo}
            placeholder="blur"
            alt="Logo"
            width={500}
            height={500}
            className="h-full w-auto"
          />
          <span>Customer Connect Portal</span>
        </Link>
        <div className="w-full flex justify-end items-center gap-2">
          {user ? (
            <Button
              className="bg-red-500 !text-white rounded hover:backdrop-blur-lg"
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <Link href="/auth">
              <Button className="bg-[#00aeef] !text-white rounded hover:backdrop-blur-lg">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;