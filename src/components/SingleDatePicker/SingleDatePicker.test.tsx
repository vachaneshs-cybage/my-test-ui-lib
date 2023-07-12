/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import {render, screen, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { SingleDatePicker } from "./index"
import moment from 'moment';
import React from 'react';

let now = new Date()
let start = moment(
  new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
)
let dateFormat = 'MM/DD/YYYY'

describe("Date picker testing", () => {
  const user = userEvent.setup();
  
  const dateProps = {
    label: "Date",
    selectedValue: "",
    setSelectedAttr: () => {},
    selectedAttr: []
  }

  it("All content should be render", async () => {
    const { container } = render(<SingleDatePicker {...dateProps} />)
    
    const datePicker = screen.getByTestId("single-datepicker")
    expect(datePicker).toBeInTheDocument()
    // open date picker drop panel
    await act(async () => {
      await user.click(datePicker)
    })

    const calendarPanel = container.querySelector(".rdrCalendarWrapper")
    expect(calendarPanel).toBeVisible()

    const elements = [
      container.querySelector(".rdrNextPrevButton"),
      container.querySelector(".rdrMonthPicker"),
      container.querySelector(".rdrYearPicker"),
      container.querySelector(".rdrNextPrevButton")
    ]

    for (let ele of elements) {
      expect(ele).toBeInTheDocument();
    }

    // close date picker drop panel
    await act(async () => {
      await user.click(datePicker)
    })
  })

  it("Select today's date from panel", async () => {
    const dateToSelect = moment(start).format(dateFormat)
    const { container } = render(<SingleDatePicker {...dateProps} />)
    
    const datePicker = screen.getByTestId("single-datepicker")
    // open date picker drop panel
    await act(async () => {
      await user.click(datePicker)
    })

    const calendarPanel = container.querySelector(".rdrCalendarWrapper")
    expect(calendarPanel).toBeVisible()

    const dayButton = container.querySelectorAll(".rdrDayToday > .rdrDayNumber") || []
    await act(async () => {
      await user.click(dayButton[0]);
    })

    const singleDateInput = screen.getByTestId("single-datepicker-input")
    expect(singleDateInput).toHaveValue(dateToSelect)

  })
})