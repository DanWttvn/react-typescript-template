import type { Meta, Story } from '@storybook/react'

import Image from '.'
import type { Props } from '.'

import withPadding from '../../storybook/decorators/withPadding'

export default {
  component: Image,
  decorators: [withPadding()],
  title: 'General/Image',
} as Meta

const Template: Story<Props> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Image children',
  src: 'https://picsum.photos/300/200',
  hasOverlay: false
}
