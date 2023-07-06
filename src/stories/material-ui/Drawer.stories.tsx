import { Meta, StoryObj } from '@storybook/react'
import { Drawer } from '../../components/Drawer'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'RTBI-Component/Drawer',
  component: Drawer,
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
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {}
};