import Hero from '@/components/material/landing/about/Hero'
import Team from '@/components/material/landing/about/Team'
import Story from '@/components/material/landing/about/Story'
import Values from '@/components/material/landing/about/Values'
import AboutUs from '@/components/material/landing/about/AboutUs'
import Achievements from '@/components/material/landing/about/Achievements'
import Quotes from '@/components/material/landing/about/Quotes'
import React from 'react'
import Blog from '@/components/material/landing/about/Blog'
import ContactAbout from '@/components/material/landing/about/ContactAbout'

function AboutPage() {
  return (
      <div className="w-full flex flex-col">
            {/* Hero */}
            <Hero />
            {/* About Us */}
            <AboutUs/>
            {/* Achievements */}
            <Achievements />
            {/* quotes */}
            <Quotes />
            {/* Blog */}
            <Blog />
            {/* Contact About */}
            <ContactAbout />
    </div>
  )
}

export default AboutPage