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
                  <div className="w-full lg:flex-[0.60] flex flex-wrap gap-2">
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-xl font-semibold">Drag-and-Drop Builder : No coding required.</div>
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-xl font-semibold">Responsive Design: Perfect on any device.</div>
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-xl font-semibold">Customizable Templates: Design options for any industry.</div>
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-xl font-semibold">Secure Hosting: Reliable hosting.</div>
                        <div className="px-6 py-2 rounded-lg bg-[#212121] text-xl font-semibold">SEO-Friendly: Built-in tools to improve search rankings.</div>
                  </div>
                  
                  {/* image */}
                  {/* change here for git */}
                  <Image src={Phone} alt="plan" width={1000} height={1000} quality={90}
                  className='w-full lg:w-[30%]' />
            </div>
      </div>
  )
}

export default WhyChooseUs