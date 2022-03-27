import type { Meta, Story } from '@storybook/react'

import Banner from '.'
import type { Props } from '.'

import withPadding from '../../storybook/decorators/withPadding'

export default {
  component: Banner,
  decorators: [withPadding()],
  title: 'General/Banner',
} as Meta

const Template: Story<Props> = (args) => <Banner {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Banner children',
  isShown: true,
}
