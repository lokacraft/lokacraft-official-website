"use client"

import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Globe from "../../../../../public/images/home/globe.png"
import Background from "../../../../../public/images/home/ContactBanner.png"
import Image from 'next/image';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { Button } from '@/components/ui/button';

const words = `Bridging Tradition and Innovation Through Technology`
function ContactBanner() {
      return (
            <ParallaxBanner
                  layers={[
                  { image: '/images/home/ContactBanner.png', speed: -30 },
                  ]}
                  className="aspect-[2/1] w-screen h-[60vh]"
            >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-12 p-8">
                  <h1 className="text-5xl 2xl:text-8xl font-thin text-center 2xl:text-left">Ready to Transform? Lets Build the Future Together</h1>
                        <div className="flex items-center justify:center w-full gap-x-5">
                              <Button className="p-6 bg-blue-400 text-2xl" >Contact</Button>
                              <Button variant="outline" className="p-6 text-2xl" >Contact</Button>

                        </div>
                  </div>
            </ParallaxBanner>
      );
}

export default ContactBanner