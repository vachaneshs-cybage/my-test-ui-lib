import { Meta, StoryObj } from '@storybook/react'
import { Tab } from '../../components/Tab'

const meta: Meta<typeof Tab> = {
  title: 'Material/Tab',
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {}
};