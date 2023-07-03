import { Meta, StoryObj } from '@storybook/react'
import { CssBaseline } from '../../components/CssBaseline'

const meta: Meta<typeof CssBaseline> = {
  title: 'Material/CssBaseline',
  component: CssBaseline,
};

export default meta;
type Story = StoryObj<typeof CssBaseline>;

export const Default: Story = {
  args: {}
};