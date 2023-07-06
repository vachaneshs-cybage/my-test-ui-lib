import { Meta, StoryObj } from '@storybook/react'
import { SliderBox } from '../../components/SliderBox'

const meta: Meta<typeof SliderBox> = {
  title: 'Material/SliderBox',
  component: SliderBox,
};

export default meta;
type Story = StoryObj<typeof SliderBox>;

export const Default: Story = {
  args: {
    label: 'SliderBox'
  }
};