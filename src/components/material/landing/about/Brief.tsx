import React from 'react'

function Brief() {
  return (
    <div className='w-full p-8 flex items-center justify-between min-h-[55vh] h-fit'>
      {/* title */}
      <div className="flex-[0.4] flex flex-col h-full justify-start">
            <h1 className="text-7xl">Where Innovation</h1>
            <h1 className="text-7xl">Meets Tradition</h1>
      </div>
      {/* text */}
      <p className="text-lg flex-[0.5] flex justify-end text-left">
      At ArthaLoka Technology, we believe in the harmonious blend of cutting-edge digital solutions and the timeless values that shape every industry. Our mission is to drive transformation while preserving the essence of what makes each sector unique. Explore how we connect tradition and innovation to create impactful solutions that elevate businesses without compromising their core values.
      </p>
      
    </div>
  )
}

export default Brief