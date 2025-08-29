import { Link } from '@tanstack/react-router'
import { Instagram } from 'lucide-react'
import { Highlighter } from './ui/highlighter'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-y-8">
      <div className="flex sm:flex-nowrap flex-wrap items-center gap-6">
        <Link to="/" className="font-atma font-medium">
          <Highlighter color="#abe5fc" action="box" isView>
            Nepali Dining
          </Highlighter>
        </Link>{' '}
        <a
          href="https://maps.app.goo.gl/Xp1TPQA2r7t1QHVD9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {' '}
          埼玉県さいたま市中央区大戸1-34-10
        </a>{' '}
        <a className="hover:underline" href="tel:048-865-3396">
          048-865-3396
        </a>{' '}
        <a className="hover:underline" href="mailto:me.pkr@gmail.com">
          me.pkr@gmail.com
        </a>
      </div>
      <a href="" target="_blank" rel="noopener noreferrer">
        <Instagram className="size-8" />
      </a>
      <small>
        © {new Date().getFullYear()} Nepali Dining. All rights reserved.
      </small>
    </footer>
  )
}
