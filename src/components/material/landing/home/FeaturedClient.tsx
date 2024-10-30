import Image from 'next/image'
import React from 'react'
import Perpenka from "../../../../../public/images/home/Perpenka.png"
import Calanusa from "../../../../../public/images/home/Calanusa.png"
import Nomadique from "../../../../../public/images/home/Nomadique.png"
import Kosen from "../../../../../public/images/home/Kosen.png"
import Pama from "../../../../../public/images/home/Pama.png"

function FeaturedClient() {
  return (
    <div className='w-full'>
      <div className="w-[90%] px-5 min-h-[25vh] flex items-center justify-between mx-auto">
        <Image src={Perpenka} alt="perpenka" width={1000} height={1000} quality={100} className='w-[15%] object-cover' />
        <Image src={Calanusa} alt="perpenka" width={1000} height={1000} quality={100} className='w-[15%] object-cover' />
        <Image src={Nomadique} alt="perpenka" width={1000} height={1000} quality={100} className='w-[15%] object-cover' />
        <Image src={Kosen} alt="perpenka" width={1000} height={1000} quality={100} className='w-[15%] object-cover' />
        <Image src={Pama} alt="perpenka" width={1000} height={1000} quality={100} className='w-[15%] object-cover' />
      </div>

    </div>
  )
}

export default FeaturedClient