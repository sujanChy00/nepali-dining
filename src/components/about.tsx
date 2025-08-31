export const About = () => {
  return (
    <div className="pt-36 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:items-start items-center md:gap-y-0 gap-y-10 text-center">
      <section className="md:space-y-6 space-y-3">
        <h3 className="font-times font-medium text-xl tracking-[0.5rem]">
          LOCATION
        </h3>
        <a
          href="https://maps.app.goo.gl/Xp1TPQA2r7t1QHVD9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:underline"
        >
          埼玉県さいたま市中央区大戸1-34-10
        </a>
      </section>
      <section className="md:space-y-6 space-y-3">
        <h3 className="font-times font-medium text-xl tracking-[0.5rem]">
          HOURS
        </h3>
        <div className="text-sm text-muted-foreground space-y-3">
          <p>Tue, Wed, Thu, Fri, Sat, Sun, Public Holiday </p>
          <p>11:30 - 14:00</p>
          <p>17:00 - 21:00</p>
          <p>Closed: Monday</p>
        </div>
      </section>
      <section className="md:space-y-6 space-y-3">
        <h3 className="font-times font-medium text-xl tracking-[0.5rem]">
          CONTACT
        </h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <a className="block hover:underline" href={'tel:048-865-3396'}>
            048-865-3396
          </a>
          <a
            className="block hover:underline"
            href={'mailto:jbaral@sierrajapan.com '}
          >
            jbaral@sierrajapan.com
          </a>
        </div>
      </section>
    </div>
  )
}
