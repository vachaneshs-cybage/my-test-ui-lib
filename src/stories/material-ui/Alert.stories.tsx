import { Meta, StoryObj } from '@storybook/react'
import { Alert } from '../../components/Alert'

const meta: Meta<typeof Alert> = {
  title: 'Material/Alert',
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'hello',
  }
};