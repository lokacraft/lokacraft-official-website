import React from 'react'

function Brief() {
  return (
    <div className="flex min-h-[65vh] h-fit items-center justify-center">
    <div className='w-full h-full p-8 flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 items-start lg:justify-between'>
      {/* title */}
      <div className="flex-[0.4] flex flex-col">
            <h1 className="text-head">Where Innovation</h1>
            <h1 className="text-head">Meets Tradition</h1>
      </div>
      {/* text */}
      <p className="text-foreign text-lg flex-[0.5] flex justify-end text-left">
      At ArthaLoka Technology, we believe in the harmonious blend of cutting-edge digital solutions and the timeless values that shape every industry. Our mission is to drive transformation while preserving the essence of what makes each sector unique. Explore how we connect tradition and innovation to create impactful solutions that elevate businesses without compromising their core values.
      </p>
      
    </div>
    </div>
  )
}

export default Brief