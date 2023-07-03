import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../components/Button'

const meta: Meta<typeof Button> = {
  title: 'Material/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
  }
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'contained',
    color: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'secondary'
  }
};