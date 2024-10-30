import Hero from '@/components/material/landing/product/Hero'
import Brief from '@/components/material/landing/product/Brief'
import React from 'react'
import FeaturedClient from '@/components/material/landing/home/FeaturedClient'
import Plans from '@/components/material/landing/product/Plans'
import WhyChooseUs from '@/components/material/landing/product/WhyChooseUs'

function ProductPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <Hero />
      {/* Brief */}
      <Brief />
      {/* Porto */}
      <FeaturedClient />
      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* Pricing and Package */}
      <Plans />
    </div>
  )
}

export default ProductPage