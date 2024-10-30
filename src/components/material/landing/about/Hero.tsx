import Image from 'next/image'
import React from 'react'
import Banner from "../../../../../public/images/about/AboutHero.png"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

function Hero() {
      const words = `Meet the Minds Behind`
  return (
    <div className="w-full h-[75vh] relative flex items-center justify-center">
      {/* Image */}
      <Image src={Banner} alt="about banner" width={1400} height={1400} quality={100} className='h-full w-full object-cover' />
      {/* absolute */}
      <div className="absolute top-0 left-0 w-screen h-full flex flex-col justify-center gap-y-2 p-8">
            <h1 className="font-thin text-2xl lg:text-4xl">
            <TextGenerateEffect duration={3} words={words} />
            </h1>
            <h1 className="text-7xl lg:text-[140px]">ArthaLoka</h1>
            <button className="mt-8 p-[3px] relative w-[220px]">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Lets Work Together
            </div>
            </button>
      </div>
    </div>
  )
}

export default Hero