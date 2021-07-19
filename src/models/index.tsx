import { CSSProperties, FC } from 'react'

export interface BaseProps {
  styles?: CSSProperties
  isHidden?: boolean
  isFullWidth?: boolean
  ref?: any
  className?: string
}

export interface InputProps {
  isError?: boolean
  isRequired?: boolean
}

export interface Route {
  url: string
  content: FC
}

export interface TextProps extends BaseProps {
  onClick?: (x?: any) => void
  isCentered?: boolean
  weight?: 'normal' | 'semibold' | 'bold' | 'black'
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'inherit'
  color?: keyof Theme['colors'] | 'inherit'
}

export interface Theme {
  fonts: {
    main: string
  }
  colors: {
    black: string
    white: string
    primary: string
    secondary: string
  },
  zIndex: {
    low: number
    medium: number
    high: number
  }
  shadows: {
    elevation1: string
    elevation2: string
    elevation3: string
    elevation4: string
  }
  breakpoints: {
    xs: string
    s: string
    sl: string
    m: string
    l: string
    xl: string
  }
}

export interface ThemeProps { theme: Theme }

export type FormDraft<T> = { [P in keyof Partial<T>]: T[P] }

export type Language = 'ES' | 'EN'

export type LanguageOptions = { ES: string, EN: string }