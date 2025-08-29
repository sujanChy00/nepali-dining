export function PressMediaSection() {
  const pressQuotes = {
    column1: [
      {
        quote: 'Ranked No. 2 Best Brunch Restaurant in LA',
        source: '(March 2023)',
      },
      {
        quote: 'The 40 best restaurants in Los Angeles you need to try',
        source: '',
      },
      {
        quote: 'Dinner Review (July 2023)',
        source: '',
      },
      {
        quote: 'The 15 best new Los Angeles restaurants of 2019',
        source: '',
      },
    ],
    column2: [
      {
        quote: "LA's 10 Best New Restaurants of 2019",
        source: '',
      },
    ],
    column3: [
      {
        quote: 'Restaurant Review (Feb 2023)',
        source: '',
      },
      {
        quote: "LA's Best New Restaurants of 2019",
        source: '',
      },
    ],

    column4: [
      {
        quote: 'Best New Restaurants in LA, 2019 With The Infatuation',
        source: '',
      },
    ],
  }

  return (
    <section className="pt-36">
      {/* <div className="mb-12">
        <h2 className="text-lg font-times font-medium tracking-[0.2em]  mb-8">
          AS SEEN IN...
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 mb-16 md:max-w-4xl font-dosis mx-auto">
        {Object.values(pressQuotes).map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-6">
            {column.map((item, itemIndex) => (
              <div key={itemIndex}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  className="text-gray-800 leading-relaxed mb-1 hover:text-gray-600"
                >
                  "{item.quote}"
                </a>
                {item.source && (
                  <p className="text-gray-500 text-xs">{item.source}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div> */}

      <div className="xs:flex xs:space-y-0 space-y-6 md:max-w-4xl mx-auto xs:gap-32">
        <h3 className="text-xl font-times uppercase tracking-[0.5em]">
          social <br /> media
        </h3>
        <div className="space-y-3">
          <p className="text-gray-800">
            Follow us for featured menu items and restaurant updates!
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 underline underline-offset-4 decoration-gray-800"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
