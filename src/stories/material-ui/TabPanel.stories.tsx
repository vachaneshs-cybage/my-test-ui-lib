import { Meta, StoryObj } from '@storybook/react'
import { TabPanel } from '../../components/TabPanel'

const meta: Meta<typeof TabPanel> = {
  title: 'Material/TabPanel',
  component: TabPanel,
};

export default meta;
type Story = StoryObj<typeof TabPanel>;

export const Default: Story = {
  args: {
    children: "hello",
    index: 1,
    value: 1
  }
};