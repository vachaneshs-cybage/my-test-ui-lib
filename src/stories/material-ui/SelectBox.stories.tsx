import { Meta, StoryObj } from '@storybook/react'
import { SelectBox } from '../../components/SelectBox'

const meta: Meta<typeof SelectBox> = {
  title: 'Material/SelectBox',
  component: SelectBox,
};

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  args: {
    label: 'SelectBox',
    options: []
  }
};