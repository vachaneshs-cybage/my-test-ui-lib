import { Meta, StoryObj } from '@storybook/react'
import { MultiSelectBox } from '../../components/MultiSelectBox'

const meta: Meta<typeof MultiSelectBox> = {
  title: 'Material/MultiSelectBox',
  component: MultiSelectBox,
};

export default meta;
type Story = StoryObj<typeof MultiSelectBox>;

export const Default: Story = {
  args: {
    selectedValue: ["Option1100", "Option1200"],
    label: 'Select',
    options: [
        'Option1100',
        'Option1200',
        'Option1300',
        'Option2100',
        'Option2200',
        'Option2300'
    ],
    setSelectedAttr: () => {}
  }
};