import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom';
import { AppBar } from '../../components/AppBar'
import React from 'react';

const meta: Meta<typeof AppBar> = {
  title: 'RTBI-Component/AppBar',
  component: AppBar,
  argTypes: {
    toggelSidebar: { action: "toggle sidebar" },
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
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {
    logoText: 'App Logo',
    toggelSidebar: () => { },
    headerMenus: <></>
  },
};