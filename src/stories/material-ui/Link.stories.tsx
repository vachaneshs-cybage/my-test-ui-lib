import { Meta, StoryObj } from '@storybook/react'
import { Link } from '../../components/Link'

const meta: Meta<typeof Link> = {
  title: 'Material/Link',
  component: Link,
  argTypes: {
    color: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    }
  }
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'hello',
    color: '#ffffff'
  }
};