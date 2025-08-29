import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { buttonVariants } from './ui/button'
import { Image } from './ui/image'

export const Sidebar = () => {
  const [opened, setOpend] = useState(false)
  return (
    <Drawer open={opened} onOpenChange={setOpend}>
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <Link to="/" className="text-2xl font-normal font-atma">
              Nepali Dining
            </Link>
          </DrawerTitle>
        </DrawerHeader>
        <section className="size-full flex justify-center items-center p-3 pb-8">
          <div className="grid grid-cols-3 justify-center gap-3">
            <Link
              onClick={() => setOpend(false)}
              to="/menu"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                }),
                'line-clamp-1 font-dosis',
              )}
              activeProps={{
                className: 'underline text-primary',
              }}
            >
              1. View Our Menu
            </Link>
            <Link
              onClick={() => setOpend(false)}
              className={cn(
                buttonVariants({
                  variant: 'outline',
                }),
                'line-clamp-1 font-dosis',
              )}
              activeProps={{
                className: 'underline text-primary',
              }}
              to="/reservation"
            >
              2. Make a Reservation
            </Link>
            {/* <Link
              onClick={() => setOpend(false)}
              className={cn(
                buttonVariants({
                  variant: 'outline',
                }),
                'line-clamp-1 font-dosis',
              )}
              activeProps={{
                className: 'underline text-primary',
              }}
              to="/takeout"
            >
              3. Order takeout
            </Link> */}
            <a
              className={cn(
                buttonVariants({
                  variant: 'outline',
                }),
                'line-clamp-1 font-dosis flex items-center',
              )}
              href="https://new.sastosulavexpress.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo_transparent.png"
                alt="logo"
                className="size-4 rounded-xl border-accent"
              />{' '}
              Sasto Sulav
            </a>
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  )
}
