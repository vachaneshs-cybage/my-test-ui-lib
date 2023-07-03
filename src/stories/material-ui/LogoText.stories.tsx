import { Meta, StoryObj } from '@storybook/react'
import { LogoText } from '../../components/LogoText'

const meta: Meta<typeof LogoText> = {
  title: 'Material/LogoText',
  component: LogoText,
};

export default meta;
type Story = StoryObj<typeof LogoText>;

export const Default: Story = {
  args: {
    children: 'Logo Text',
  }
};