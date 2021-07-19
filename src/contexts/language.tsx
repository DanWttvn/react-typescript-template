import React, { useState } from 'react'
import { Language } from '../models'

export interface LanguageContext {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = React.createContext<LanguageContext>({
  lang: 'ES',
  setLang: (lang: Language) => console.log(lang)
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const LanguageContextProvider = ({ children }) => {
  const [ lang, setLang ] = useState<Language>('ES')

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
