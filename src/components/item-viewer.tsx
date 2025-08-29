import { AspectRatio } from './ui/aspect-ratio'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Image } from './ui/image'

interface Props extends React.ComponentProps<typeof DialogTrigger> {
  item: {
    name: string
    price: string
    description: string
    details: string
    addOn?: string
    image: string
  }
}

export const ItemViewer = ({ item, ...rest }: Props) => {
  return (
    <Dialog>
      <DialogTrigger {...rest} />
      <DialogContent
        showCloseButton={false}
        className="p-0 block overflow-hidden"
      >
        <DialogHeader className="border-b py-6">
          <DialogTitle className="text-center font-atma font-medium">
            {item.name}
          </DialogTitle>
        </DialogHeader>
        <div>
          <AspectRatio ratio={16 / 9}>
            <Image src={'/logo.png'} alt={item.name} />
          </AspectRatio>
          <div className="p-6 text-sm bg-gray-100">
            <p>{item.details}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
