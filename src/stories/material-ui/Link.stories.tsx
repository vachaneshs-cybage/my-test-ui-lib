import { Meta, StoryObj } from '@storybook/react'
import { Link } from '../../components/Link'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

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
  },
  decorators: [
    story => (
      <BrowserRouter>
        {/* <Box sx={{ display: "flex" }}> */}
        {story()}
        {/* <Drawer resources={data} open={true} variant="permanent" /> */}
        {/* </Box> */}
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'hello',
    color: '#ffffff'
  }
};