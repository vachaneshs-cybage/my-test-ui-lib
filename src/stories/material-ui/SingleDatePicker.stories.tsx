import { Meta, StoryObj } from '@storybook/react'
import { SingleDatePicker } from '../../components/SingleDatePicker'

const meta: Meta<typeof SingleDatePicker> = {
  title: 'Material/SingleDatePicker',
  component: SingleDatePicker,
};

export default meta;
type Story = StoryObj<typeof SingleDatePicker>;

export const Default: Story = {
  args: {
    setSelectedAttr: () => {}
  }
};