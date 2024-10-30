import { FocusCards } from '@/components/ui/focus-cards';
import React from 'react'
import Mission1 from "../../../../../public/images/home/Mission1.png"
import Mission2 from "../../../../../public/images/home/Mission2.png"
import Mission3 from "../../../../../public/images/home/Mission3.png"
import Mission4 from "../../../../../public/images/home/Mission4.png"

function VisiMisi() {
      const cards = [
            {
              title: "Empowering Authentic Solutions",
              src: Mission1,
            },
            {
              title: "Collaborative Innovation",
              src: Mission2,
            },
            {
              title: "Human-Centered Design",
              src: Mission3,
            },
            {
              title: "Sustainable Growth",
              src: Mission4,
            },
          ];
  return (
      <div className='w-full p-8 flex flex-col gap-y-5'>
      {/* header */}
      <h1 className="text-lg font-semibold text-blue-500">2. Vision and Mission</h1>
      <h1 className="text-head-home">
      Driven by Innovation, Anchored by Values
      </h1>
      {/* vision */}
      <div className="rounded-lg bg-[#212121] text-lg w-full p-4 flex flex-col gap-y-3">
      <h1 className="text-lg font-semibold text-blue-500">Vision</h1>
      <p>
      To become a pioneer in digital transformation, integrating technology into every aspect of life without compromising the fundamental values and essence of each field.
      </p>
      </div>
      {/* Mission */}
      <div className="rounded-lg bg-[#212121] text-lg w-full p-4 flex flex-col gap-y-3">
      <h1 className="text-lg font-semibold text-blue-500">Mission</h1>
      <FocusCards cards={cards} />
      </div>
      
    </div>
  )
}

export default VisiMisi