import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Dialog from '../components/Dialog'
import Loader from '../components/Loader'
import Popup from '../components/Popup'
import Skip from '../components/Skip'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Footer from '../containers/Footer'
import PolicyBanner from '../containers/PolicyBanner'

const Library: FC = () => {
  const [ isDialogOpen, setIsDialogOpen ] = useState(false)
  const [ isPopupOpen, setisPopupOpen ] = useState(false)

  return (
    <>
      <Link to="/route">Router Link</Link>

      <Button variant="A">Button A</Button>
      <Button variant="B" onClick={setIsDialogOpen.bind(undefined, true)}>Button B / Open Dialog</Button>
      
      <Dialog isHidden={!isDialogOpen} onClose={setIsDialogOpen.bind(undefined, false)}>
        hello
      </Dialog>

      <Loader />

      <Skip />

      <Popup isShown={!isPopupOpen} onClose={setisPopupOpen.bind(undefined, false)}>
        holi
      </Popup>

      <Text size="xxs">size xxs</Text>
      <Text size="xs">size xs</Text>
      <Text size="s">size s</Text>
      <Text size="m">size m</Text>
      <Text size="l">size l</Text>
      <Text size="xl">size xl</Text>

      <Text weight="semibold">weigth semibold</Text>
      <Text weight="bold">weight bold</Text>
      <Text weight="black">weight black</Text>

      <Subtitle>subtitle normal</Subtitle>
      <Subtitle isSmall>subtitle isSmall</Subtitle>

      <Footer />
      <PolicyBanner />
    </>
  )
}

export default Library
