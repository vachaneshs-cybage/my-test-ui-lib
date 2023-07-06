import { Meta, StoryObj } from '@storybook/react'
import { SearchableSelectBox } from '../../components/SearchableSelectBox'

const meta: Meta<typeof SearchableSelectBox> = {
  title: 'Material/SearchableSelectBox',
  component: SearchableSelectBox,
};

export default meta;
type Story = StoryObj<typeof SearchableSelectBox>;

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