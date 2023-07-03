import { Meta, StoryObj } from '@storybook/react'
import { Grid } from '../../components/Grid'

const meta: Meta<typeof Grid> = {
  title: 'Material/Grid',
  component: Grid,
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    children: 'hello',
  }
};