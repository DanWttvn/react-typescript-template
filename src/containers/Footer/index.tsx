import React, { FC, useContext } from 'react'
import Text from '../../components/Text'
import LanguageContext from '../../contexts/language'
import { BaseProps } from '../../models'
import Styled from './styles'

export type Props = BaseProps

const Footer: FC<Props> = () => {
  const { lang, setLang } = useContext(LanguageContext)

  return (
    <Styled>
      footer
      <Text isFullWidth>
        {lang === 'ES' && 'Holi'}
        {lang === 'EN' && 'Hi'}
      </Text>
      <Text onClick={setLang.bind(undefined, 'ES')}>change to ES</Text>
      /
      <Text onClick={setLang.bind(undefined, 'EN')}>change to EN</Text>
    </Styled>

  )
}

export default Footer
