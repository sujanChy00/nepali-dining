import { AspectRatio } from './ui/aspect-ratio'

export const Location = () => {
  return (
    <div className="space-y-8 pt-20">
      <div className="grid xs:grid-cols-2 grid-cols-1 items-start ">
        <section className="space-y-3">
          <h6 className="font-times text-xl font-medium">LOCATION</h6>
          <a
            href="https://maps.app.goo.gl/Xp1TPQA2r7t1QHVD9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground font-dosis hover:underline"
          >
            埼玉県さいたま市中央区大戸1-34-10
          </a>
        </section>
        <section className="text-muted-foreground font-dosis text-lg flex flex-col gap-y-4">
          <h6>
            Here are directions to our location. <br /> We hope to see you soon!
          </h6>
          <a
            href="https://maps.app.goo.gl/Xp1TPQA2r7t1QHVD9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Get Directions
          </a>
          {/* <a
            className="underline"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Parking Information
          </a> */}
        </section>
      </div>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.481285263806!2d139.63296101207004!3d35.861720772414934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c1defe7bbe15%3A0x2bc6da428c2c9ea6!2sSasto%20Sulav%20Express!5e0!3m2!1sen!2snp!4v1754384122546!5m2!1sen!2snp"
          allowFullScreen
          className="w-full h-full ] border-0"
          style={{
            border: 0,
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </AspectRatio>
    </div>
  )
}
