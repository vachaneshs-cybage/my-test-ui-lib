import { Meta, StoryObj } from '@storybook/react'
import { OptionMenuItem } from '../../components/OptionMenuItem'

const meta: Meta<typeof OptionMenuItem> = {
  title: 'Material/OptionMenuItem',
  component: OptionMenuItem,
};

export default meta;
type Story = StoryObj<typeof OptionMenuItem>;

export const Default: Story = {
  args: {
    children: 'hello',
  }
};