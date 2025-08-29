import { Highlighter } from './ui/highlighter'

export const BusinessHours = () => {
  return (
    <section className="text-center space-y-5">
      <h3 className="font-bold">BUSINESS HOURS</h3>
      <p className="font-dosis">Tue, Wed, Thu, Fri, Sat, Sun, Public Holiday</p>
      <div className="space-y-1">
        <p className="font-dosis">11:30 - 14:00</p>
        <p className="font-dosis">17:00 - 21:00</p>
      </div>
      {/* <p className="font-dosis">Saturday & Sunday 9:00am - 2:30pm </p>
      <p className="font-dosis">DINNER: Thursday & Sunday 5:00pm - 9:00pm</p>
      <p className="font-dosis">Friday & Saturday 5:00pm - 10:00pm</p>
      <p className="font-dosis">CLOSED Tuesdays & Wednesdays</p> */}
      {/* <p className="font-dosis font-medium">
        Dine-in, takeout, and delivery (via DoorDash & UberEats) available
      </p> */}
      <p className="font-dosis font-medium">
        Hours and closed days may change, so please call{' '}
        <a href="tel:048-865-3396" className="underline font-semibold">
          <Highlighter isView action="underline" color="#abe5fc">
            048-865-3396
          </Highlighter>
        </a>{' '}
        before visiting.
      </p>
      {/* <Link
        to="/takeout"
        className={cn(
          buttonVariants({
            variant: 'outline',
          }),
          'rounded-none group relative overflow-hidden border-2 border-black hover:text-white min-h-16 px-16 font-times font-semibold',
        )}
      >
        <p className="relative z-20">ORDER ONLINE</p>
        <div className="absolute w-full bottom-0 left-0 h-0 bg-black group-hover:h-full transition-all duration-300 ease-in-out" />
      </Link> */}
    </section>
  )
}
