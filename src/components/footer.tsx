import { Link } from '@tanstack/react-router'
import { Instagram } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-y-8">
      <div className="flex sm:flex-nowrap flex-wrap items-center gap-6">
        <Link to="/">Nepali Dining</Link>{' '}
        <p> 埼玉県さいたま市中央区大戸1-34-10</p>{' '}
        <a href="tel:048-865-3396">048-865-3396</a>{' '}
        <a href="mailto:me.pkr@gmail.com">me.pkr@gmail.com</a>
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
