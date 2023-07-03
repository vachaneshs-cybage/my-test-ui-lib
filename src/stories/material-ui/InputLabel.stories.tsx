import { Meta, StoryObj } from '@storybook/react'
import { InputLabel } from '../../components/InputLabel'

const meta: Meta<typeof InputLabel> = {
  title: 'Material/InputLabel',
  component: InputLabel,
};

export default meta;
type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    children: 'hello',
  }
};