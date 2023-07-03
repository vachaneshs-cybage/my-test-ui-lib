import { Meta, StoryObj } from '@storybook/react'
import { LinkButton } from '../../components/LinkButton'

const meta: Meta<typeof LinkButton> = {
  title: 'Material/LinkButton',
  component: LinkButton,
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
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    children: 'hello',
    color: '#ffffff',
    pathname: ''
  }
};