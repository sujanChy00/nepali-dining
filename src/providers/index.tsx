import { createServerFn } from '@tanstack/react-start'
import { setCookie } from '@tanstack/react-start/server'
import { useState } from 'react'
import { LanguageContext } from './context'
import { LANGUAGE_KEY } from './types'

export const LANGUAGE_COOKIE_KEY = 'lang'

const setLang = createServerFn({
  method: 'POST',
})
  .validator((lang: LANGUAGE_KEY) => lang)
  .handler(({ data }) => {
    return setCookie(LANGUAGE_COOKIE_KEY, data, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    })
  })

export const LanguageProvider = ({
  children,
  defaultLanguage,
}: {
  children: React.ReactNode
  defaultLanguage: LANGUAGE_KEY
}) => {
  const [language, setLanguage] = useState<LANGUAGE_KEY>(defaultLanguage)
  const handleSetLanguage = (language: LANGUAGE_KEY) => {
    setLang({ data: language }).then(() => {
      setLanguage(language)
    })
  }
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
