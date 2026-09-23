import React from 'react'
import Hero from './pages/homeRevers/Hero'
import CategorySection from './pages/homeRevers/CategorySection'
import ComboBuilderPreview from './pages/homeRevers/ComboBuilderPreview'
import ProductSection from './pages/homeRevers/ProductSection'
import ComboSection from './pages/homeRevers/ComboSection'
import HowItWorks from './pages/homeRevers/HowItWorks'
import ReviewSection from './pages/homeRevers/ReviewSection'
import WhyChooseUs from './pages/homeRevers/WhyChooseUs'
import FinalCTA from './pages/homeRevers/FinalCTA'
// import Navbar from './components/navbar/Navbar'
// import Hero from './pages/home/Hero'
// import CategorySection from './pages/home/CategorySection'
// import ComboBuilderPreview from './pages/home/ComboBuilderPreview'
// import ProductSection from './pages/home/ProductSection'
// import ComboSection from './pages/home/ComboSection'
// import HowItWorks from './pages/home/HowItWorks'
// import ReviewSection from './pages/home/ReviewSection'
// import WhyChooseUs from './pages/home/WhyChooseUs'
// import FinalCTA from './pages/home/FinalCTA'

const page = () => {
  return (
    <>
      {/* <main>
        <Hero />
        <CategorySection />
        <ComboBuilderPreview />
        <ProductSection />
        <ComboSection />
        <HowItWorks />
        <ReviewSection />
        <WhyChooseUs />
        <FinalCTA />
      </main> */}

            <main className="bg-cream">
        <Hero />
        <CategorySection />
        <ComboBuilderPreview />
        <ProductSection />
        <ComboSection />
        <HowItWorks />
        <ReviewSection />
        <WhyChooseUs />
        <FinalCTA />
      </main>
    </>
  )
}

export default page
