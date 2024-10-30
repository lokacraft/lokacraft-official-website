import Image from 'next/image'
import React from 'react'
import Logo1 from "../../../../public/images/ArthalokaLogo.png"
import Link from 'next/link'
import { Table } from 'lucide-react'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { IconBrandFacebook, IconBrandGmail, IconBrandTiktok } from '@tabler/icons-react'

function Footer() {
  return (
    <div className="w-screen min-h-[50vh] mt-20 flex flex-col lg:items-center lg:flex-row gap-y-10 lg:gap-x-8 p-8 overflow-x-hidden">
      {/* left / top */}
      <div className="w-full h-full lg:w-1/3 flex flex-col gap-y-6 divide-y-2 divide-gray-300">
      <Link href='/' className='scale-[0.8] lg:scale-100 flex items-center justify-start space-x-2 cursor-pointer'>
            <Image priority quality={100} alt="image" src={Logo1} width={800} height={500} className='w-10 h-10' />
            <div className={`flex flex-col`}>
              <span className="text-sm font-semibold">ARTHA LOKA</span>
              <span className="text-sm font-semibold">TECHNOLOGY</span>
            </div>
      </Link>
      <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione minus tenetur nihil in, numquam adipisci aut delectus nostrum temporibus voluptates sunt possimus eum totam corrupti deleniti. Quam, recusandae suscipit.
      </p>
      </div>
      <div className='hidden lg:inline-flex h-20 w-1 bg-gray-300 rounded-[2px]' />
      <div className='lg:hidden inline-flex h-1 w-20 mx-auto bg-gray-300 rounded-[2px]' />
      {/* middle / middle */}
      <div className="w-full h-full lg:w-1/4 flex flex-col lg:items-center gap-y-4">
      <h1>Contact</h1>
      <h1>Address</h1>
      <h1>Copyright</h1>
      </div>
      <div className='hidden lg:inline-flex h-20 w-1 bg-gray-300 rounded-[2px]' />
      <div className='lg:hidden inline-flex h-1 w-20 mx-auto bg-gray-300 rounded-[2px]' />
      {/* right / bottom */}
      <div className="w-full lg:w-1/3 h-full flex flex-wrap gap-4">
            <Link href="#" className="w-full lg:w-[45%] p-2 rounded-lg border-2 border-gray-200 flex items-center justify-center lg:justify-start space-x-4">
                  <InstagramLogoIcon className='w-8 h-8' />
                  <span className="text-lg font-semibold">Instagram</span>
            </Link>
            <Link href="#" className="w-full lg:w-[45%] p-2 rounded-lg border-2 border-gray-200 flex items-center justify-center lg:justify-start space-x-4">
                  <IconBrandTiktok className='w-8 h-8' />
                  <span className="text-lg font-semibold">Tiktok</span>
            </Link>
            <Link href="#" className="w-full lg:w-[45%] p-2 rounded-lg border-2 border-gray-200 flex items-center justify-center lg:justify-start space-x-4">
                  <IconBrandFacebook className='w-8 h-8' />
                  <span className="text-lg font-semibold">Facebook</span>
            </Link>
            <Link href="#" className="w-full lg:w-[45%] p-2 rounded-lg border-2 border-gray-200 flex items-center justify-center lg:justify-start space-x-4">
                  <IconBrandGmail className='w-8 h-8' />
                  <span className="text-lg font-semibold">Email</span>
            </Link>
            
            
            
      </div>
      
    </div>
  )
}

export default Footer