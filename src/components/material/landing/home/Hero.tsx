"use client"

import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Globe from "../../../../../public/images/home/globe.png"
import Background from "../../../../../public/images/home/background.png"
import Image from 'next/image';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

const words = `Bridging Tradition and Innovation Through Technology`
function Hero() {
      return (
            <ParallaxBanner
              layers={[
                // { image: '/images/home/background.png', speed: -20 },
                  {children: (
                  <>
                           <ShootingStars />
                           <StarsBackground />
                  </>
                  ),
                  expanded: false,
                  speed: -20,
                  scale: [1, 0.8],
                  shouldAlwaysCompleteAnimation: true,
                  // opacity: [0.9, 1],      
            },
    
                {
                  speed: -70,
                  children: (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h1 className="text-4xl text-white font-semibold -mt-[240px]">
                      <TextGenerateEffect duration={3} words={words} />
                      </h1>
                    </div>
                  ),
                  translateY: [0, 60],
                  scale: [1, 1.1, 'easeOutCubic'],
                  shouldAlwaysCompleteAnimation: true,
                  expanded: false,
                },
                {children: <Image src={Globe} quality={100} width={1000} height={1000} className='w-screen' alt="background"    />,
                  expanded: false,
                  speed: -20,
                  scale: [1, 1.5],
                  opacity: [1, 1],      
            },
              ]}
              className="aspect-[2/1] w-full h-screen"
            />
          );
}

export default Hero