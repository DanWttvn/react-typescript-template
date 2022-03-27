import type { Meta, Story } from '@storybook/react'

import Link from '.'
import type { Props } from '.'

import withPadding from '../../storybook/decorators/withPadding'

export default {
  component: Link,
  decorators: [withPadding()],
  title: 'General/Link',
} as Meta

const Template: Story<Props> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Link children',
  href: 'https://www.google.com',
  target: '_blank',
  weight: 'normal',
  color: 'primary',
  onClick: () => alert('navigate'),
  size: 'inherit',
  isHidden: false,
}
