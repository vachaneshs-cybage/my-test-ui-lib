/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import {render, screen, act, cleanup} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { DateRangePicker } from "./index"
import moment from 'moment'
import { waitFor } from '@storybook/testing-library';
import React from 'react';

let now = new Date()
let start = moment(
  new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
)
let currentQuarter = moment().quarter()
let subYear = currentQuarter !== 1 ? 0 : 1
let dateFormat = 'MM/DD/YYYY'
let ranges:any = {
  'This Business Week': [
    moment(start).clone().startOf('week').format(dateFormat),
    moment(start).clone().endOf('week').format(dateFormat),
  ],
  'Last Business Week': [
    moment(start).subtract(1, 'weeks').startOf('week').format(dateFormat),
    moment(start).subtract(1, 'weeks').endOf('week').format(dateFormat),
  ],
  'This Month': [
    moment(start).startOf('month').format(dateFormat),
    moment(start).endOf('month').format(dateFormat),
  ],
  'Last Month': [
    moment(start).subtract(1, 'months').startOf('month').format(dateFormat),
    moment(start).subtract(1, 'months').endOf('month').format(dateFormat),
  ],
  'This Quarter': [
    moment().quarter(currentQuarter).startOf('quarter').format(dateFormat),
    moment().quarter(currentQuarter).endOf('quarter').format(dateFormat),
  ],
  'Last Quarter': [
    moment()
      .subtract(subYear, 'years')
      .quarter(currentQuarter !== 1 ? currentQuarter - 1 : 4)
      .startOf('quarter').format(dateFormat),
    moment()
      .subtract(subYear, 'years')
      .quarter(currentQuarter !== 1 ? currentQuarter - 1 : 4)
      .endOf('quarter').format(dateFormat),
  ],
  'This Year': [
    moment(start).clone().startOf('year').format(dateFormat),
    moment(start).clone().endOf('year').format(dateFormat),
  ],
  'Last Year': [
    moment(start).subtract(1, 'years').startOf('year').format(dateFormat),
    moment(start).subtract(1, 'years').endOf('year').format(dateFormat),
  ],
  'This Financial Year': [
    moment(start).add(1, 'hours').clone().startOf('year').format(dateFormat),
    moment(start).clone().endOf('year').format(dateFormat),
  ],
  'Last Financial Year': [
    moment(start).add(1, 'hours').subtract(1, 'years').startOf('year').format(dateFormat),
    moment(start).subtract(1, 'years').endOf('year').format(dateFormat),
  ],
}

describe("DateRangePicker testing", () => {
  afterEach(() => {
    cleanup();
  });

  const user = userEvent.setup();

  const dateProps = {
    label: 'Date',
    selectedValue: '',
    selectedAttr: [],
    setSelectedAttr: () => {}
  }

  it("All content should be render", async () => {
    const {container} = render(<DateRangePicker {...dateProps} />);

    const datePicker = screen.getByTestId("daterangepicker-input")
    expect(datePicker).toBeInTheDocument();
    // open datepicker dropbox
    await act(async () => {
      await user.click(datePicker);
    })

    const elements = [
      container.querySelector('#daterangepicker'),
      container.querySelector('#DateTimeInput_start'),
      container.querySelector('#DateTimeInput_end'),
      screen.getByText(/this business week/i),
      screen.getByText(/last business week/i),
      screen.getByText(/this month/i),
      screen.getByText(/this quarter/i),
      screen.getByText(/last quarter/i),
      screen.getByText(/this year/i),
      screen.getByText(/last year/i),
      screen.getByText(/this financial year/i),
      screen.getByText(/last financial year/i),
      screen.getByText(/custom range/i),
      screen.getByRole('button', { name: /cancel/i }),
      screen.getByRole('button', { name: /Apply/i })
    ]

    for (let ele of elements) {
      expect(ele).toBeInTheDocument();
    }

    // close datepicker dropbox
    const applyButton = screen.getByRole('button', { name: /Apply/i })
    await act(async () => {
      await user.click(applyButton);
    })
  })

  it("Select last year option", async () => {    
    const {container} = render(<DateRangePicker {...dateProps} />);

    const selectStart = moment(start).subtract(1, 'years').startOf('year').format('MM/DD/YYYY')
    const selectEnd = moment(start).subtract(1, 'years').endOf('year').format('MM/DD/YYYY')

    const datePicker = screen.getByTestId("daterangepicker-input")
    // open datepicker dropbox
    await act(async () => {
      await user.click(datePicker);
    })
    // check if panel is open
    const panel = container.querySelector('#daterangepicker')
    expect(panel).toBeVisible()

    // select last year option
    const lastYear = screen.getByText(/Last Year/i)
    // open datepicker dropbox
    await act(async () => {
      await user.click(lastYear);
    })

    expect(panel).toBeVisible()

    const startDateInput = container.querySelector('#DateTimeInput_start')
    expect(startDateInput).toHaveValue(selectStart)
    const endDateInput = container.querySelector('#DateTimeInput_end')
    expect(endDateInput).toHaveValue(selectEnd)

    // close datepicker dropbox
    const applyButton = screen.getByRole('button', { name: /Apply/i })
    await act(async () => {
      await user.click(applyButton);
    })

    // check selected value apply on main component
    const dateInput = screen.getByRole('textbox')
    const expectedValue = `${selectStart}-${selectEnd}`
    expect(dateInput).toHaveValue(expectedValue)
  })

  it("Check all date range options", async () => {    
    const {container} = render(<DateRangePicker {...dateProps} />);

    const datePicker = screen.getByTestId("daterangepicker-input")
    // open datepicker dropbox
    await act(async () => {
      await user.click(datePicker);
    })
    // check if panel is open
    const panel = container.querySelector('#daterangepicker')
    expect(panel).toBeVisible()

    Object.keys(ranges).map(async (key: any) => {
      const value = ranges[key];
      const start = value[0];
      const end = value[1];
      const pattern = new RegExp(key, 'i');
      
      const sideOption = screen.getByText(pattern);
      // Select option from side panel
      await act(async () => {
        await user.click(sideOption);
      })
      await waitFor(() => {
        const startDateInput = container.querySelector('#DateTimeInput_start');
        expect(startDateInput).toHaveValue(start);
      });
      await waitFor(() => {
        const endDateInput = container.querySelector('#DateTimeInput_end');
        expect(endDateInput).toHaveValue(end);
      });

    });   

    expect(panel).toBeVisible()

    // close datepicker dropbox
    const applyButton = screen.getByRole('button', { name: /Apply/i })
    await act(async () => {
      await user.click(applyButton);
    })
  })

})