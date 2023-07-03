import { Meta, StoryObj } from '@storybook/react'
import { Tabs } from '../../components/Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Material/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: 'hello',
  }
};