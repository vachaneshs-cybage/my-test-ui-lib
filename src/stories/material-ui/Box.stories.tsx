import { Meta, StoryObj } from '@storybook/react'
import { Box } from '../../components/Box'

const meta: Meta<typeof Box> = {
  title: 'Material/Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: 'hello',
  }
};