"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import Logo from '../../public/img/navbar/logo.png'
// import Logo1 from '../../public/img/navbar/logo1.png'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
// import { CgMenuLeft } from "react-icons/cg";
import { Menu } from 'lucide-react'
import Logo1 from "../../../../public/images/ArthalokaLogo.png"



function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
      useEffect(() => {
        const scrollHeader = () => {
          if(window.scrollY >= 480) {
            setShowNavbar(true)
          } else {
            setShowNavbar(false)
          }
        }
        window.addEventListener('scroll', scrollHeader);
        return () => {
          window.removeEventListener('scroll', scrollHeader);
        }
    
      }, []);
  return (
    <div className={`${showNavbar===false? "bg-transparent text-white" : "bg-[#121212] text-white shadow-sm shadow-gray-200 transition-all ease-in duration-300"} fixed z-50 top-0 left-0 w-screen h-[90px] px-[5vw] flex items-center justify-between overflow-x-hidden`}>
      {/* left */}
      <a href='/' className='scale-[0.8] lg:scale-100 flex items-center justify-start space-x-2 cursor-pointer'>
            <Image priority quality={100} alt="image" src={Logo1} width={800} height={500} className='w-10 h-10' />
            <div className={`${showNavbar===false? "hidden" : "flex flex-col"}`}>
              <span className="text-sm font-semibold">ARTHA LOKA</span>
              <span className="text-sm font-semibold">TECHNOLOGY</span>
            </div>
      </a>
      {/* right lg */}
      <div className={`${showNavbar===false? "hidden" : "hidden flex-1 lg:flex lg:items-center lg:justify-center space-x-7 text-lg"}`}>
            <a href={"/"} className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150">Home</a>
            <a href={"/about"} className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150">About Us</a>
            <a href={"/services"} className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150">Services</a>
            <a href={"/product"} className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150">Products</a>
            <a href={"/portfolio"} className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150">Portfolio</a>
            {/* <a href={"/contact"} className="hover:scale-105 hover:text-[#1E86FF] transition-all ease-in duration-150">Contact</a> */}
      </div>
      <a href={"/contact"} className='hidden lg:inline-flex px-4 py-3 hover:bg-[#1E86FF] transition-all duration-300 rounded-md bg-[#012169] text-white'>Contact Us</a>
      {/* deskripsi sm */}
      <div className='inline-flex lg:hidden'>
                  <Sheet>
                          <SheetTrigger>
                            <Menu className='h-6 w-6 hover:rotate-[360deg] hover:scale-105 duration-300' />
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetDescription>
                              <div className='flex  flex-col  font-semi-bold items-start justify-start space-y-8 mt-[100px]'>
                                  <a href={"/"} className='flex items-center justify-start space-x-2'>
                                    <h1>Home</h1>  
                                  </a> 
                                  <a href={"/about"} className='flex items-center justify-start space-x-2'>
                                    <h1>About</h1>  
                                  </a>
                                  <a href={"/product"} className='flex items-center justify-start space-x-2'>
                                    <h1>Product</h1>  
                                  </a> 
                                  <a href={"/services"} className='flex items-center justify-start space-x-2'>
                                    <h1>Services</h1>  
                                  </a> 
                                  <a href={"/portfolio"} className='flex items-center justify-start space-x-2'>
                                    <h1>Portfolio</h1>  
                                  </a> 
                                  <a href={"/contact"} className='flex items-center justify-start space-x-2'>
                                    <h1>Contact</h1>  
                                  </a> 
                              </div>
                              </SheetDescription>
                            </SheetHeader>
                          </SheetContent>
                  </Sheet>
                </div>

      
    </div>
  )
}

export default Navbar