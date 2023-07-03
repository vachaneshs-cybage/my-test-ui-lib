import { Meta, StoryObj } from '@storybook/react'
import { Container } from '../../components/Container'

const meta: Meta<typeof Container> = {
  title: 'Material/Container',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: 'hello',
  }
};