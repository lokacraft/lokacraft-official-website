import React from 'react'
import Phone from "../../../../../public/images/product/Phone.png"
import Image from 'next/image'

function WhyChooseUs() {
  return (
      <div className="mt-20 w-full p-8 min-h-screen flex flex-col gap-y-8">
            <h1 className="text-head ">Why Choose Us</h1>
            {/* content */}
            <div className="w-full flex flex-col lg:flex-row items-center lg:justify-center lg:gap-x-5 gap-y-6">
                  {/* proposition */}
                  <div className="w-full lg:flex-[0.45] flex flex-wrap gap-2">
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-2xl font-semibold">Faster</div>
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-2xl font-semibold">Credible</div>
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-2xl font-semibold">Market Friendly</div>
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-2xl font-semibold">Trusted</div>
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-2xl font-semibold">Futuristic</div>
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-2xl font-semibold">Credible</div>
                  </div>
                  {/* image */}
                  <Image src={Phone} alt="plan" width={1000} height={1000} quality={90}
                  className='w-full lg:w-[40%]' />
            </div>
      </div>
  )
}

export default WhyChooseUs