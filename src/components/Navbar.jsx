import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar.css"
import { CgMenuMotion } from "react-icons/cg";
import { useState } from "react";
import { useEffect } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

function Navbar(){
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("hidden");
      } else {
        document.getElementById("navbar").classList.add("hidden");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos])
return (
    <>
   <nav id="navbar" class=" bg-[#151218] flex justify-between w-full items-center py-2 px-4 fixed transition duration-700 ease-in-out z-30 bg-opacity-70">
    <a href="#">
        <h1 class=" mt-2 text-lg text-white">Clever Books</h1>
    </a>
    <div class=" mt-2 hidden md:flex gap-6  ">
        <a href="" class="text-white hover:text-red-300 transition duration-150">Product</a>
        <a href="" class="text-white hover:text-red-300 transition duration-150">Pricing</a>
        <a href="" class="text-white hover:text-red-300 transition duration-150">Industry</a>
        <a href="" class="text-white hover:text-red-300 transition duration-150">Coustomer Stories</a>
        <a href="" class="text-white hover:text-red-300 transition duration-150">About</a>
        <a href="" class="text-white hover:text-red-300 transition duration-150">Blog</a>
    </div>
    <div class="mt-2 hidden md:flex justify-between items-center gap-[1.5rem]">
        <button className="text-fuchsia-600 hover:text-white transition duration-150 px-4">Login</button>
        <button type="button" class="
        transition duration-150   text-white bg-[#FFFFFF] font-medium rounded-full text-sm text-center  px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-r from-[salmon] to-[purple] "><span className="hover:text-black">Talk to Us</span></button>
    </div>
    <div className="flex md:hidden">

    <Sheet >
  <SheetTrigger><div className="flex md:hidden text-white mr-10 h-full text-3xl hover:bg-[#11111]">
    <CgMenuMotion  />
    </div>
    </SheetTrigger>
  <SheetContent >
    <div className="flex flex-col mt-10 gap-3">
        <a href="" className="text-[#151218] text-sm font-medium hover:text-red-300 transition duration-150">Product</a>
        <a href="" class="text-[#151218]  text-sm font-medium hover:text-red-300 transition duration-150">Pricing</a>
        <a href="" class="text-[#151218]  text-sm font-medium hover:text-red-300 transition duration-150">Industry</a>
        <a href="" class="text-[#151218]  text-sm font-medium hover:text-red-300 transition duration-150">Coustomer Stories</a>
        <a href="" class="text-[#151218]  text-sm font-medium hover:text-red-300 transition duration-150">About</a>
        <a href="" class="text-[#151218] text-sm font-medium hover:text-red-300 transition duration-150">Blog</a>
        <button className="text-rose-500 hover:text-black transition duration-150">Login</button>
        <button type="button" class="
        transition duration-150   text-white bg-[#FFFFFF] font-medium rounded-full text-sm text-center  px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-r from-[salmon] to-[purple] "><span className="hover:text-black">Talk to Us</span></button>
        </div>
  </SheetContent>
</Sheet>

    </div>
    
    

    
   </nav>
   
    </>
)
}
export default Navbar