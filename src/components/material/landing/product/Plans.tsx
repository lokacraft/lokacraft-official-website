import Image from 'next/image'
import React from 'react'

import StarterPlan from "../../../../../public/images/product/StarterPlan.png"
import ProPlan from "../../../../../public/images/product/ProPlan.png"
import CustomPlan from "../../../../../public/images/product/CustomPlan.png"
function Plans() {
  return (
    <div className="w-full p-8 min-h-screen flex flex-col gap-y-8">
      <h1 className="text-head ">Discover Our Plans</h1>
      {/* content */}
      <div className="w-full flex flex-col gap-y-6 lg:flex-row items-center lg:justify-between lg:gap-x-5">
            {/* starter */}
            <div className="relative w-full lg:w-1/3 rounded-xl h-[360px]">
            <Image src={StarterPlan} alt="plan" width={1000} height={1000} quality={90}
            className='w-full h-full object-cover rounded-xl' />
            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                  <h1 className="text-head font-bold">Starter</h1>
            </div>
            </div>
            {/* business */}
            <div className="relative w-full lg:w-1/3 rounded-xl h-[360px]">
            <Image src={ProPlan} alt="plan" width={1000} height={1000} quality={90}
            className='w-full h-full object-cover rounded-xl' />
            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                  <h1 className="text-head font-bold">Pro</h1>
            </div>
            </div>
            {/* custom */}
            <div className="relative w-full lg:w-1/3 rounded-xl h-[360px]">
            <Image src={CustomPlan} alt="plan" width={1000} height={1000} quality={90}
            className='w-full h-full object-cover rounded-xl' />
            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                  <h1 className="text-head font-bold">Custom</h1>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Plans