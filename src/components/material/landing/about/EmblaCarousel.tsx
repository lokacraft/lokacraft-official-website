"use client"
import { Variants, motion } from 'framer-motion';
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Fade from 'embla-carousel-fade'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type SlideType = {
      image: any
      nama: string
      katamutiara: string
      job: string
    }
type PropType = {
  slides: SlideType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

const bounceIntro: Variants = {
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
                bounce: 0.8,
                duration: 1.5
              }
            }
  };

  return (
    <section className="embla relative w-[80vw] bg-[#212121] rounded-lg">
      <div className="embla__viewport pb-[50px]" ref={emblaRef}>
        <div className="embla__container">
        {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__content flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start lg:justify-between p-8">
                  <span className='inline-flex lg:hidden text-blue-500 text-xl font-semibold'>{slide.job}</span>
                  <div className="w-full lg:flex-[0.4] h-[50vh] lg:h-[45vh]">
                        <Image src={slide.image} alt="profil" width={1000} height={1000} quality={100} className='rounded-xl object-cover w-full h-full' />
                  </div>
                  <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.8 }}
                  variants={bounceIntro}
                  className="w-full lg:flex-1 lg:px-10 flex flex-col gap-y-2 lg:gap-y-6">
                        <span className='hidden lg:inline-flex text-blue-500 text-xl font-semibold'>{slide.job}</span>
                        <h3 className='text-6xl 2xl:text-7xl'>{slide.nama}</h3>
                        <div className="leading-none flex flex-col">
                              <span className="leading-none text-7xl lg:text-[140px] text-orange-500">
                                &quot;
                              </span>
                              <p className='text-foreign text-2xl font-semibold'>&quot;{slide.katamutiara}&quot;</p>
                        </div>
                  </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute right-4 bottom-4">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
