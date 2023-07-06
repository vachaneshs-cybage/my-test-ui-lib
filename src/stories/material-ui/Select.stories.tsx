import { Meta, StoryObj } from '@storybook/react'
import { Select } from '../../components/Select'

const meta: Meta<typeof Select> = {
  title: 'Material/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Select',
    options: []
  }
};