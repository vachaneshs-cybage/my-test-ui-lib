import { Meta, StoryObj } from '@storybook/react'
import { MenuItem } from '../../components/MenuItem'

const meta: Meta<typeof MenuItem> = {
  title: 'Material/MenuItem',
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    children: 'Menu',
  }
};