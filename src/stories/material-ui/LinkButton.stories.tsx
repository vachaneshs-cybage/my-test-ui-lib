import { Meta, StoryObj } from '@storybook/react'
import { LinkButton } from '../../components/LinkButton'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

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
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    children: 'hello',
    color: '#ffffff',
    pathname: ''
  }
};