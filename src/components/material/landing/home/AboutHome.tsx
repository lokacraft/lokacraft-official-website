import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function AboutHome() {
  return (
    <div className='w-full p-8 flex flex-col gap-y-5'>
      {/* header */}
      <h1 className="text-lg font-semibold text-blue-500">1. About Us</h1>
      {/* body */}
      <div className="flex items-center justify-between">
            {/* left */}
            <div className="flex flex-col gap-y-3 flex-[0.45]">
                  <h1 className="text-[36px] font-semibold">
                  Our Journey: Crafting the Future, Honoring the Past
                  </h1>
                  <span className="text-lg font-light">
                  ArthaLoka Technology is a tech company dedicated to creating solutions that integrate digital innovation with the core values of each industry.
                  </span>
                  <Link href="about" className='text-lg font-semibold flex items-center gap-x-2 mt-10'>
                  <span>Learn More</span>
                  <ArrowRight className='text-lg' />
                  </Link>
            </div>
            {/*right */}
            <div className="flex-[0.45]">
                  <div className="w-full h-[400px] bg-gray-600"></div>
            </div>

      </div>
      
    </div>
  )
}

export default AboutHome