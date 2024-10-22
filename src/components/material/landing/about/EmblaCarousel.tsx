"use client"
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

  return (
    <section className="embla relative w-[80vw] bg-[#212121] rounded-lg">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__content flex items-start justify-between bg-red-40 p-8">
                  <div className="flex-[0.4] h-[45vh]">
                        <Image src={slide.image} alt="profil" width={1000} height={1000} quality={100} className='rounded-xl object-cover w-full h-full' />
                  </div>
                  <div className="flex-1 px-10 flex flex-col gap-y-6">
                        <span className='text-blue-500 text-xl font-semibold'>{slide.job}</span>
                        <h3 className='text-7xl'>{slide.nama}</h3>
                        <div className="flex flex-col gap-y-0">
                              <h1 className="text-[140px] text-orange-500">&quot;
                              <span className='text-gray-100 text-2xl font-semibold'>&quot;{slide.katamutiara}&quot;</span>
                              </h1>
                        </div>
                  </div>
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
