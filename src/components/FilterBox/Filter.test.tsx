import {render, screen, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { FilterBox } from "./index"
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe("Filter box testing", () => {
  const user = userEvent.setup();
  
  const filterProps = {
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

  it("All content should be render", () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<BrowserRouter><FilterBox {...filterProps} /></BrowserRouter>);

    const elements = [
      screen.getByTestId("tabs-section"),
      screen.getByTestId("filter-button"),
      screen.getByTestId("filter-form-inputs-section")
    ];
    for (let ele of elements) {
      expect(ele).toBeInTheDocument();
    }
  })

  it("Check filter box toggel view on click of Filters button", async () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<BrowserRouter><FilterBox {...filterProps} /></BrowserRouter>);
    // First click to show filter box
    await act(async () => {
      await user.click(screen.getByTestId("filter-button"));
    })
    expect(screen.getByTestId("filter-form-inputs-section")).toBeVisible()
    // Second click to hide filter box
    await act(async () => {
      await user.click(screen.getByTestId("filter-button"));
    })
    expect(screen.getByTestId("filter-form-inputs-section")).not.toBeVisible()
  })

})