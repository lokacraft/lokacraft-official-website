import Brief from '@/components/material/landing/about/Brief'
import Hero from '@/components/material/landing/about/Hero'
import Team from '@/components/material/landing/about/Team'
import Story from '@/components/material/landing/about/Story'
import Values from '@/components/material/landing/about/Values'
import React from 'react'

function AboutPage() {
  return (
      <div className="w-full flex flex-col">
            {/* Hero */}
            <Hero />
            {/* Brief */}
            <Brief />
            {/* Team */}
            <Team />
            {/* Story */}
            <Story />
            {/* Values */}
            <Values />
      
    </div>
  )
}

export default AboutPage