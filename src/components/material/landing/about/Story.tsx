import Image from 'next/image'
import React from 'react'
import Banner from "../../../../../public/images/about/StoryBackground.png"

function Story() {
  return (
    <div className='w-full p-8 flex items-center justify-between min-h-[75vh] max-h-screen'>
      {/* title */}
      <div className="flex-[0.4] flex flex-col h-full justify-start gap-y-10">
            <h1 className="text-7xl">Our Story</h1>
            <div className="w-full h-[45vh]">
                  <Image src={Banner} alt="" width={1000} height={1000} quality={80} className="object-cover w-full h-full rounded-2xl" />
            </div>
      </div>
      {/* text */}
      <p className="text-lg 2xl:text-xl flex-[0.5] flex justify-end text-left">
      At ArthaLoka Technology, our story begins with a simple but powerful belief: that technology, when used thoughtfully, can bridge the gap between tradition and innovation. Founded with the goal of harmonizing digital transformation with the unique values of each industry, ArthaLoka emerged as a pioneer in human-centered technology solutions.
      </p>
      
    </div>
  )
}

export default Story