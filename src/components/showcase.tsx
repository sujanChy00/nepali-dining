import { AspectRatio } from './ui/aspect-ratio'
import { Image } from './ui/image'

export const Showcase = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-28 pt-20 pb-32 sm:gap-y-0 gap-y-10">
      <section className="flex flex-col gap-y-3">
        <AspectRatio ratio={4 / 3}>
          <Image
            alt="banner"
            src="https://tblg.k-img.com/restaurant/images/Rvw/280910/150x150_square_fc787fe9a393b37590348314d31f2e9e.jpg"
          />
        </AspectRatio>
        <p className="text-sm font-dosis text-muted-foreground">
          Images shot on location at{' '}
          <a
            href="https://maps.app.goo.gl/Xp1TPQA2r7t1QHVD9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Nepali Cuisine
          </a>
        </p>
        <div className="sm:flex hidden flex-1 w-full items-center justify-center">
          <Image
            src="/logo_transparent.png"
            className="size-32 object-contain"
            alt="logo"
          />
        </div>
      </section>
      <section className="space-y-12">
        <AspectRatio ratio={3 / 4}>
          <Image
            alt="banner"
            src="https://tblg.k-img.com/restaurant/images/Rvw/288992/150x150_square_ed35b000a40e6bc40bc3dbc9067c4c14.jpg"
          />
        </AspectRatio>
        <Image
          src="/logo_transparent.png"
          className="size-32 object-contain sm:hidden block mx-auto"
          alt="logo"
        />
        <p className="font-dosis text-muted-foreground">
          Nepali Dining strives to source local, sustainable and organic when
          possible. We work hard to source premium ingredients and we cook
          everything from scratch with love. We also do our best to pay our
          employees living wages (tips are shared with all employees, including
          kitchen staff) and to reduce our environmental footprint wherever we
          can. Overall, these factors translate to higher menu prices, but we
          hope that you find value and feel a sense of comfort in knowing that
          we aim to get better everyday at doing what is important to us.
        </p>
      </section>
    </div>
  )
}
