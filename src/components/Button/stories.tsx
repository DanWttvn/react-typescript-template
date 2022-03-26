import type { Meta, Story } from "@storybook/react";

import Button from ".";
import type { Props } from ".";

import withPadding from "../../storybook/decorators/withPadding";

export default {
  component: Button,
  decorators: [withPadding()],
  title: "General/Button",
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button label",
  variant: "A",
};
