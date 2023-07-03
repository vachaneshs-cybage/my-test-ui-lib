import { Meta, StoryObj } from '@storybook/react'
import { CircularProgress } from '../../components/CircularProgress'

const meta: Meta<typeof CircularProgress> = {
  title: 'Material/CircularProgress',
  component: CircularProgress,
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
  args: {
    hide: true,
  }
};