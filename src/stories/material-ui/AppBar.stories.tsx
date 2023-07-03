import { Meta, StoryObj } from '@storybook/react'
import { AppBar } from '../../components/AppBar'

const meta: Meta<typeof AppBar> = {
  title: 'Material/AppBar',
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {
    children: '',
  }
};