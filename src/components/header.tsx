import { Link } from '@tanstack/react-router'
import { Highlighter } from './ui/highlighter'
import { Image } from './ui/image'

export const Header = () => {
  return (
    <div className="md:grid grid-cols-3 justify-between items-center">
      <div className="md:block hidden" />
      <Link
        to="/"
        className="font-atma text-4xl font-medium text-center text-nowrap block"
      >
        <Highlighter color="#abe5fc">Nepali Dining</Highlighter>
      </Link>

      <section className="font-dosis md:flex hidden font-medium uppercase  flex-col ml-auto text-gray-600">
        <Link
          to="/menu"
          activeProps={{
            className: 'underline text-primary',
          }}
          className="py-1 hover:underline"
        >
          1 View Our Menu
        </Link>
        <Link
          to="/reservation"
          className="py-1 hover:underline"
          activeProps={{
            className: 'underline text-primary',
          }}
        >
          2 Make a Reservation (dinner)
        </Link>
        <div className="flex items-center gap-3">
          {/* <Link
            activeProps={{
              className: 'underline text-primary',
            }}
            className="py-1 hover:underline"
            to="/takeout"
          >
            3 Order takeout
          </Link> */}
          <a
            className="py-1 flex items-center gap-1 hover:underline font-bold text-tertiary"
            href="https://new.sastosulavexpress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo_transparent.png"
              alt="logo"
              className="size-5 rounded-xl border-accent"
            />
            Sasto Sulav Express
          </a>
        </div>
      </section>
    </div>
  )
}
