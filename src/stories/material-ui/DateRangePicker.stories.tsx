import { Meta, StoryObj } from '@storybook/react'
import { DateRangePicker } from '../../components/DateRangePicker'

const meta: Meta<typeof DateRangePicker> = {
  title: 'Material/DateRangePicker',
  component: DateRangePicker,
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  args: {
    children: 'hello',
    setSelectedAttr: () => {}
  }
};