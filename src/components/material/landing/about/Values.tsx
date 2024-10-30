"use client"
import React from 'react'
import { Variants, motion } from 'framer-motion';


function Values() {

      const Intro: Variants = {
            offscreen: {
              y: -40,
              opacity: 0
            },
            onscreen: {
              y: 0,
              opacity: 1,
              // rotate: -10,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 1.8
              }
            }
  };
  return (
    <div className="w-full min-h-screen h-fit flex flex-col p-8 gap-y-12 xl:gap-y-[60px] 2xl:mt-20">
      {/* title */}
      <h1 className="text-head">Discover the Values that Drive Us</h1>
      {/* content */}
      <div className="w-full min-h-[100vh] max-h-fit flex flex-col gap-y-12 lg:gap-y-0 lg:flex-row items-start lg:justify-between mt-12 2xl:mt-20">
            <motion.div
            initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.8 }}
                  variants={Intro}
            className="w-full lg:w-1/3 h-fit flex flex-col p-4 gap-y-10">
                  {/* title */}
                  <h1 className="text-4xl h-[60px] lg:h-[100px]">Authenticity in Innovation</h1>
                  {/* body */}
                  <p className="text-md text-foreign">
                        At ArthaLoka Technology, we are committed to delivering digital solutions that honor the unique characteristics and traditions of each industry. Our innovations are not just about efficiency but also about preserving the authenticity and integrity of the sectors we serve, creating meaningful transformations that stay true to their core values.
                  </p>
            </motion.div>
            <motion.div
            initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.8 }}
                  variants={Intro}
            className="w-full lg:w-1/3 h-fit flex flex-col p-4 gap-y-10">
                  {/* title */}
                  <h1 className="text-4xl h-[60px] lg:h-[100px]">Collaborative Exellence</h1>
                  {/* body */}
                  <p className="text-md text-foreign">
                        At ArthaLoka Technology, we are committed to delivering digital solutions that honor the unique characteristics and traditions of each industry. Our innovations are not just about efficiency but also about preserving the authenticity and integrity of the sectors we serve, creating meaningful transformations that stay true to their core values.
                  </p>
            </motion.div>
            <motion.div
            initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.8 }}
                  variants={Intro}
                  className="w-full lg:w-1/3 h-fit flex flex-col p-4 gap-y-10">
                  {/* title */}
                  <h1 className="text-4xl h-[60px] lg:h-[100px]">Sustainable Growth and Responbility</h1>
                  {/* body */}
                  <p className="text-md text-foreign">
                        At ArthaLoka Technology, we are committed to delivering digital solutions that honor the unique characteristics and traditions of each industry. Our innovations are not just about efficiency but also about preserving the authenticity and integrity of the sectors we serve, creating meaningful transformations that stay true to their core values.
                  </p>
            </motion.div>
      </div>
      
    </div>
  )
}

export default Values