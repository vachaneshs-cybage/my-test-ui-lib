import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { ChartCard } from "./index"
import React from 'react';

describe("Chart card testing", () => {
  it("All content should be render", () => {
    const cardProps = {
      id: 'demo-id',
      children: 'Card Content',
      height: '100px',
      title: 'Report Title',
      titleveriant: 'h5',
      iframeLink: 'https://tableau.dev.raintreeinc.com/views/Regional/Stocks?%3Adisplay_count=n&%3Aembed=y&%3AisGuestRedirectFromVizportal=y&%3Aorigin=viz_share_link&%3AshowAppBanner=false&%3AshowVizHome=n',
    }
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ChartCard headerActions={undefined} exportData={()=>{}} {...cardProps} />);

    const elements = [
      screen.getByTestId("card-title"),
      screen.getByTestId("chart-action-view-toggel"),
      screen.getByTestId("chart-action-view-fullscreen"),
      screen.getByTestId("chart-action-view-export-options"),
      screen.getByTestId("card-content")
    ];
    for (let ele of elements) {
      expect(ele).toBeInTheDocument();
    }
  })

  it("Check IFrame loaded in component", () => {
    const cardProps = {
      id: 'demo-id',
      children: 'Card Content',
      height: '100px',
      title: 'Dummy Report',
      titleveriant: 'h5',
      iframeLink: 'https://tableau.dev.raintreeinc.com/views/Regional/Stocks?%3Adisplay_count=n&%3Aembed=y&%3AisGuestRedirectFromVizportal=y&%3Aorigin=viz_share_link&%3AshowAppBanner=false&%3AshowVizHome=n',
    }
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<ChartCard headerActions={undefined} exportData={()=>{}} {...cardProps} />);
    expect(screen.getByTitle(cardProps.title)).toBeInTheDocument();
  })

})