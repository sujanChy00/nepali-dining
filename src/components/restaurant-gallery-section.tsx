import { AspectRatio } from './ui/aspect-ratio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Image } from './ui/image'

const carouselImages = [
  'https://tblg.k-img.com/restaurant/images/Rvw/280910/150x150_square_dd36ffcabf19313e23ae69070a36ed82.jpg',
  'https://tblg.k-img.com/restaurant/images/Rvw/280910/150x150_square_1956d50a263cb16511a724fdbbfd8dc6.jpg',
  'https://tblg.k-img.com/restaurant/images/Rvw/288992/150x150_square_8098922ef12e0266a89586cf2298bc39.jpg',
  'https://tblg.k-img.com/restaurant/images/Rvw/288992/150x150_square_c5f06b0f5c3af25be3b85a533f6b332d.jpg',
]

const galleries = [
  {
    src: 'https://tblg.k-img.com/restaurant/images/Rvw/280910/150x150_square_58a56cb5e0f092409743b301018405a1.jpg',
    ratio: 4 / 3,
  },
  {
    src: 'https://tblg.k-img.com/restaurant/images/Rvw/283858/150x150_square_975db6ac54218b830a5a2f37df8d7b43.jpg',
    ratio: 3 / 4,
  },
  {
    src: 'https://tblg.k-img.com/restaurant/images/Rvw/280910/150x150_square_a35f5e99f6d5a620d391020f88a10751.jpg',
    ratio: 4 / 3,
  },
  {
    src: 'https://tblg.k-img.com/restaurant/images/Rvw/280910/150x150_square_1956d50a263cb16511a724fdbbfd8dc6.jpg',
    ratio: 3 / 4,
  },
]

export const RestaurantGallerySection = () => {
  return (
    <div className="space-y-12 pt-10 pb-40">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((img, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={16 / 9}>
                <Image src={img} alt="gallery" />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 rounded-none border-none bg-black/10 [&>svg]:text-white h-16 w-10 hover:bg-black/30" />
        <CarouselNext className="right-0 rounded-none border-none bg-black/10 [&>svg]:text-white h-16 w-10 hover:bg-black/30" />
      </Carousel>
      <section className="grid grid-cols-4 items-center gap-12">
        {galleries.map((g, index) => (
          <AspectRatio key={index} ratio={g.ratio}>
            <Image src={g.src} alt="gallery" />
          </AspectRatio>
        ))}
      </section>
    </div>
  )
}
