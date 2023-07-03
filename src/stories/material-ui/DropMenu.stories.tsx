import { Meta, StoryObj } from '@storybook/react'
import { DropMenu } from '../../components/DropMenu'

const meta: Meta<typeof DropMenu> = {
  title: 'Material/DropMenu',
  component: DropMenu,
};

export default meta;
type Story = StoryObj<typeof DropMenu>;

export const Default: Story = {
  args: {
    children: 'hello',
  }
};