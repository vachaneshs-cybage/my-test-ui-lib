import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../../components'

const meta: Meta<typeof Typography> = {
  title: 'Material/Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'App Logo',
  }
};