import { Meta, StoryObj } from '@storybook/react'
import { Dialog } from '../../components/Dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Material/Dialog',
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    open: true,
  }
};