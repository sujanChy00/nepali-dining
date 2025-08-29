import { TanstackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import { Container } from '@/components/container'
import { DefaultCatchBoundary } from '@/components/default-catch-boundry'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { NotFound } from '@/components/not-found'
import { TooltipProvider } from '@/components/ui/tooltip'
import { seo } from '@/lib/seo'
import { LANGUAGE_COOKIE_KEY, LanguageProvider } from '@/providers'
import { LANGUAGE_KEY } from '@/providers/types'
import { createServerFn } from '@tanstack/react-start'
import { getCookie } from '@tanstack/react-start/server'
import appCss from '../styles.css?url'

const getLanguage = createServerFn({ method: 'GET' }).handler(() => {
  const cookie = getCookie(LANGUAGE_COOKIE_KEY)
  return {
    language: typeof cookie === 'string' && cookie.length ? cookie : 'jp',
  }
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'Nepali Dining',
        description:
          'Experience the authentic taste of Nepal in the heart of Japan. Our restaurant serves traditional Nepali cuisine prepared by expert chefs, offering a perfect blend of flavors and spices. From classNameic momos to rich curries, we bring the warmth and hospitality of Nepal to your dining experience.',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: () => <NotFound />,
  errorComponent: DefaultCatchBoundary,
  beforeLoad: async () => await getLanguage(),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const ctx = Route.useRouteContext() as { language: LANGUAGE_KEY }
  const lang = ctx?.language ?? 'jp'
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider defaultLanguage={lang as LANGUAGE_KEY}>
          <TooltipProvider>
            <Container className="py-10">
              <Header /> {children} <Footer />
            </Container>
          </TooltipProvider>
        </LanguageProvider>
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
