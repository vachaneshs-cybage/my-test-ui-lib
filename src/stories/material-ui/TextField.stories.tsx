import { Meta, StoryObj } from '@storybook/react'
import { TextField } from '../../components/TextField'

const meta: Meta<typeof TextField> = {
  title: 'Material/TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {}
};