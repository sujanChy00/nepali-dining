import { About } from '@/components/about'
import { Banner } from '@/components/banner'
import { BusinessHours } from '@/components/business-hours'
import { DinnerReservation } from '@/components/dinner-reservation'
import { Location } from '@/components/location'
import { PressMediaSection } from '@/components/media-section'
import { PaymentMethods } from '@/components/payment-methods'
import { RestaurantGallerySection } from '@/components/restaurant-gallery-section'
import { Showcase } from '@/components/showcase'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Image } from '@/components/ui/image'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="pt-12">
      <Banner />
      <div className="pt-20 space-y-10">
        <DinnerReservation />
        <PaymentMethods />
        <BusinessHours />
      </div>
      <About />
      <Showcase />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            alt="banner"
            src="https://tblg.k-img.com/restaurant/images/Rvw/291705/150x150_square_65b426e8b6328b486ac5b5a35fa89baf.jpg"
          />
        </AspectRatio>
      </motion.div>
      <Location />
      <PressMediaSection />
      <RestaurantGallerySection />
    </div>
  )
}
