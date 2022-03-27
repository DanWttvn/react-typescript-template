import type { Meta, Story } from '@storybook/react'

import Loader from '.'
import type { Props } from '.'

import withPadding from '../../storybook/decorators/withPadding'

export default {
  component: Loader,
  decorators: [withPadding()],
  title: 'General/Loader',
} as Meta

const Template: Story<Props> = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {
  isHidden: false,
}
