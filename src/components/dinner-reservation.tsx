import { Link } from '@tanstack/react-router'
import { Highlighter } from './ui/highlighter'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export const DinnerReservation = () => {
  return (
    <section className="text-center space-y-5">
      <h3 className="font-bold">DINNER RESERVATIONS!</h3>
      <p className="font-dosis">
        We are now open for dinner service Tuesday through Sunday! We&apos;ll be
        accepting limited walk-ins and <br />{' '}
        <Link
          to="/reservation"
          className="underline decoration-muted-foreground underline-offset-4 font-semibold"
        >
          <Highlighter color="#abe5fc" isView action="underline">
            reservations
          </Highlighter>
        </Link>{' '}
        on{' '}
        <Tooltip>
          <TooltipTrigger>
            {' '}
            <a
              className="underline font-semibold text-muted-foreground decoration-muted-foreground underline-offset-4"
              href="https://tabelog.com/en/saitama/A1101/A110101/11064365/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Highlighter color="#797152" isView action="underline">
                Tablelog
              </Highlighter>
            </a>
          </TooltipTrigger>
          <TooltipContent>visit Tablelog to make a reservation</TooltipContent>
        </Tooltip>
        .
      </p>
      <p className="font-dosis">
        For brunch, we still do not take reservations as we seat guests on a
        first come first serve basis. However, you <br /> can join our Yelp!
        Waitlist to save your spot ahead of time (same day only)!
      </p>
    </section>
  )
}
