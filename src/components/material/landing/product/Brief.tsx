import React from 'react'

function Brief() {
  return (
    <div className="flex min-h-[75vh] h-fit items-center justify-center">
    <div className='w-full h-full p-8 flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 items-start lg:justify-between'>
      {/* title */}
      <div className="flex-[0.4] flex flex-col h-full justify-start">
            <h1 className="text-head">Transform Your Ideas into Reality with LokaCraft’s Effortless Website Creation Platform</h1>
      </div>
      {/* text */}
      <p className="text-foreign text-lg flex-[0.5] flex justify-end text-left">
      LokaCraft is your ultimate solution for seamless website creation. Whether you&apos;re a small business, an entrepreneur, or an organization, LokaCraft empowers you to build a stunning, professional website with ease. With its intuitive drag-and-drop interface, you can craft a unique online presence without needing any coding skills. Designed to streamline the digital transformation process, LokaCraft allows you to focus on what matters most—your vision and creativity. From showcasing your products to expanding your brand’s reach, LokaCraft ensures that your website not only looks great but functions flawlessly.
      </p>
      
    </div>
    </div>
  )
}

export default Brief