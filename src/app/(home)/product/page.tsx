import Hero from '@/components/material/landing/product/Hero'
import Brief from '@/components/material/landing/product/Brief'
import React from 'react'
import FeaturedClient from '@/components/material/landing/home/FeaturedClient'

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
      {/* Pricing and Package */}
    </div>
  )
}

export default ProductPage