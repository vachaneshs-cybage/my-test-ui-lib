import { Meta, StoryObj } from '@storybook/react'
import { Modal } from '../../components/Modal'

const meta: Meta<typeof Modal> = {
  title: 'Material/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {}
};