import { Meta, StoryObj } from '@storybook/react'
import { ChartCard } from '../../components/ChartCard'

const meta: Meta<typeof ChartCard> = {
  title: 'RTBI-Component/ChartCard',
  component: ChartCard,
};

export default meta;
type Story = StoryObj<typeof ChartCard>;

export const Default: Story = {
  args: {
    id: 'demo-id',
    children: 'Card Content',
    title: 'Title',
    titleveriant: 'h5',
    iframeLink: 'https://tableau.dev.raintreeinc.com/views/Regional/Stocks?%3Adisplay_count=n&%3Aembed=y&%3AisGuestRedirectFromVizportal=y&%3Aorigin=viz_share_link&%3AshowAppBanner=false&%3AshowVizHome=n'
  }
};