import { Meta, StoryObj } from '@storybook/react'
import { FilterBox } from '../../components/FilterBox'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const meta: Meta<typeof FilterBox> = {
  title: 'RTBI-Component/FilterBox',
  component: FilterBox,
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
type Story = StoryObj<typeof FilterBox>;

export const Default: Story = {
  args: {
    currentPage: '1',
    children: <>Filter input section</>,
    tabsData: {
      kpi: {
        name: 'Demo Tab 1',
        link: '1',
        role: ['admin', 'user'],
      },
      rcm: {
        name: 'Demo Tab 2',
        link: '2',
        role: ['admin', 'user'],
      }
    }
  }
};