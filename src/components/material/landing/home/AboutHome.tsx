import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

            
import About from "../../../../../public/images/home/abotNewBanner.png"
import Image from 'next/image'

function AboutHome() {
  return (
    <div className='w-full p-8 flex flex-col gap-y-5'>
      {/* header */}
      <h1 className="text-lg font-semibold text-blue-500">1. About Us</h1>
      {/* body */}
      <div className="flex flex-col lg:flex-row gap-y-6 items-center lg:justify-between">
            {/* top */}
            <div className="lg:hidden w-full">
                  <div className="w-full h-[400px] bg-gray-600 rounded-lg"></div>
            </div>
            {/* left */}
            <div className="flex flex-col gap-y-3 lg:flex-[0.45]">
                  <h1 className="text-head-home">
                  Our Journey: Crafting the Future, Honoring the Past
                  </h1>
                  <span className="text-lg font-light">
                  ArthaLoka Technology is a tech company dedicated to creating solutions that integrate digital innovation with the core values of each industry.
                  </span>
                  <Link href="/about" className='text-lg font-semibold flex items-center gap-x-2 mt-10'>
                  <span>Learn More</span>
                  <ArrowRight className='text-lg' />
                  </Link>
            </div>
            {/*right */}
            <div className="hidden lg:inline-flex lg:flex-[0.45]">
                  <div className="w-full h-[400px]">
                        <Image src={About} alt="perpenka" width={1000} height={1000} quality={100} className='w-full h-full object-cover' />
                  </div>
            </div>

      </div>
      
    </div>
  )
}

export default AboutHome