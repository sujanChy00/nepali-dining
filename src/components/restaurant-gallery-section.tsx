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
  'https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1684052283223-Z354HG5Y7K0NEA8P50UL/image-asset.jpeg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1684314843692-FPSM7KC5I990XZVPPJB5/image-asset.jpeg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1682287091581-MPORAIRG2OC5OOYM7MRA/image-asset.jpeg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1681766910499-XUDFIYOL2D9THFP4P4U2/image-asset.jpeg?format=750w',
]

const galleries = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566969629497-O0TBF6EOQ7TEJI3B1857/yangskitchen_gallery-01.png?format=300w',
    ratio: 4 / 3,
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566969701220-EL03IRBN1SJ9NLSMVA0B/yangskitchen_gallery-02.png?format=300w',
    ratio: 3 / 4,
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566969844624-8JWNJQZEYC7AD8RIMDY7/yangskitchen_gallery-03.png?format=300w',
    ratio: 4 / 3,
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566970037121-WBVPWBZAE2ZELF5ML20L/yangskitchen_gallery-04.png?format=300w',
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
