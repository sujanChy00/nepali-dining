import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Image } from '@/components/ui/image'
import { motion } from 'motion/react'

export const Banner = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.1,
      }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://tblg.k-img.com/restaurant/images/Rvw/280910/150x150_square_30d97d96aa3c94630ac000b0f560363e.jpg"
          alt="restarurant-banner"
        />
      </AspectRatio>
    </motion.div>
  )
}
