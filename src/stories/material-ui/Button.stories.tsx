import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../../components'
import React from 'react'

type Shape = typeof Button

export default {
  title: 'Material/Button',
  component: Button,
} as ComponentMeta<Shape>

export const Default: ComponentStory<Shape> = (args) => <Button {...args} />

Default.args = {
  children: 'hello'
}

export const Primary = Default.bind({});
Primary.args = {
  ...Default.args,
  variant: 'contained',
  color: 'primary'
};

export const Secondary = Default.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'contained',
  color: 'secondary'
};