"use client"

import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const motto = (
  <div className='leading-[100px]'>
  Bridging Tradition and <br /><span className='bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text'>Innovation Through</span><br /> Technology
  </div>
)

const desc = (
  <div className='text-white text-center font-normal text-[38px] mt-[50px]'>
    Human-centered technology solutions that empower <br /> SMEs, education, and industry in Indonesia to digitally <br /> transform.
  </div>
)


function Hero() {
      return (
            <ParallaxBanner
              layers={[
                // { image: '/images/home/background.png', speed: -20 },
                {
                  speed: -70,
                  children: (
                    <div className="p-8 absolute inset-0 flex items-center justify-center flex-col bg-[#121212]">
                      <h1 className="text-[94px] text-white text-center font-normal -mt-[100px] lg:-mt-[10px]">
                      <TextGenerateEffect duration={3} words={motto} />
                      </h1>
                      <TextGenerateEffect duration={3} words={desc}/>
                    </div>
                  ),
                  translateY: [0, 60],
                  scale: [1, 1.1, 'easeOutCubic'],
                  shouldAlwaysCompleteAnimation: true,
                  expanded: false,
                }
              ]}
              className="aspect-[2/1] w-full h-screen"
            />
          );
}

export default Hero