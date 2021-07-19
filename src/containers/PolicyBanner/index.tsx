import React, { FC, useContext, useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Link from '../../components/Link'
import LanguageContext from '../../contexts/language'
import { checkCookie, setCookie } from '../../helpers/cookies'
import { BaseProps } from '../../models'

const PolicyBanner: FC<BaseProps> = () => {
  const { lang } = useContext(LanguageContext)
  const [ isShown, setIsShown ] = useState(false)

  useEffect(() => {
    if (isShown) return
    const isPolicyAccepted = checkCookie('is_policy_accepted')
    console.log(isPolicyAccepted)
    if (isPolicyAccepted !== 'true') setIsShown(true)
  }, [])

  const handleAccept = () => {
    setCookie('is_policy_accepted', 'true', 15)
    setIsShown(false)
  }

  return (
    <Banner isShown={isShown}>
      <Text size="s" styles={{ flex: 1 }}>
        {lang === 'ES' && 'Esta web utiliza cookies para proporcionar un uso personalizado al usuario del Web. Si continuas la navegación consideramos que aceptas su uso.'}
        {lang === 'EN' && 'This website uses cookies to provide personalized use to the Web user. If you continue browsing we consider that you accept its use.'}
        <Link size="s" href="#">
          {lang === 'ES' && 'Política de Privacidad'}
          {lang === 'EN' && 'Privacy Policy'}
        </Link>
      </Text>
      <Button onClick={handleAccept} styles={{ marginLeft: 'auto' }}>
        {lang === 'ES' && 'Aceptar'}
        {lang === 'EN' && 'Accept'}
      </Button>
    </Banner>
  )
}

export default PolicyBanner
