import type { Meta, Story } from '@storybook/react'

import Dialog from '.'
import type { Props } from '.'

import withPadding from '../../storybook/decorators/withPadding'

export default {
  component: Dialog,
  decorators: [withPadding()],
  title: 'General/Dialog',
} as Meta

const Template: Story<Props> = (args) => <Dialog {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Dialog children',
  onClose: () => alert('closed')
}
