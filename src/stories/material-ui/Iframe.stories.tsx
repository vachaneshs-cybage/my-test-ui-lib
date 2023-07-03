import { Meta, StoryObj } from '@storybook/react'
import { IFrame } from '../../components/IFrame'

const meta: Meta<typeof IFrame> = {
  title: 'Material/IFrame',
  component: IFrame,
};

export default meta;
type Story = StoryObj<typeof IFrame>;

export const Default: Story = {
  args: {
    children: '',
    src: "http://localhost:6006/"
  }
};