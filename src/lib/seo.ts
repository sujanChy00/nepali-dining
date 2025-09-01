export const seo = ({
  title,
  description,
  keywords,
  image,
  url,
}: {
  title?: string
  description?: string
  image?: string
  keywords?: string
  url?: string
}) => {
  const defaultImage = '/logo.png'
  const defaultDescription =
    'Experience the authentic taste of Nepal in the heart of Japan. Our restaurant serves traditional Nepali cuisine prepared by expert chefs, offering a perfect blend of flavors and spices. From classNameic momos to rich curries, we bring the warmth and hospitality of Nepal to your dining experience.'
  const defaultTitle = 'Nepali Dining'
  const defaultKeywords = 'Nepali Dining, South Asian groceries, Nepal, Japan'
  const defaultUrl = 'https://nepali-dining.vercel.app/'

  const tags = [
    { title },
    { name: 'description', content: description || defaultDescription },
    { name: 'keywords', content: keywords || defaultKeywords },
    { name: 'twitter:title', content: title || defaultTitle },
    { name: 'twitter:description', content: description || defaultDescription },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title || defaultTitle },
    { name: 'og:description', content: description || defaultDescription },
    { name: 'og:image', content: image || defaultImage },
    { name: 'og:url', content: defaultUrl + url || defaultUrl },
    { name: 'twitter:image', content: image || defaultImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: image || defaultImage },
  ]

  return tags
}
