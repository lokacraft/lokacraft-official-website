import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Alan from "../../../../../public/images/about/Alan.png"
import Yusuf from "../../../../../public/images/about/Yusuf.png"
import Ahadan from "../../../../../public/images/about/Ahadan.png"
import Syadda from "../../../../../public/images/about/Syadda.png"

function Team() {
  const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
  const slides = [
    { image: Syadda ,nama: 'Syadda Abdullah', katamutiara: 'Effective ways of working on earth with technological inovation', job: 'Head of Design' },
    { image: Ahadan ,nama: 'M. Ahadan Nur Fauzan', katamutiara: 'Transforming Throughout the world within technology', job: 'Head of Developer' },
    { image: Yusuf ,nama: 'M. Yusuf Sulaiman', katamutiara: 'Go Big or Go Home', job: 'Head of Marketing' },
    { image: Alan ,nama: 'Fadhlan Ridhwana M', katamutiara: 'Carrying out transformation with an authentic style that can produce inovative work', job: 'Head of Finance' },
  ]
  return (
    <div className="w-full h-[75vh]">
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
  )
}

export default Team