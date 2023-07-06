import { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from '../../components/LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'RTBI-Component/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    login: () => {},
    message: '',
    setMessage: () => {}
  }
};