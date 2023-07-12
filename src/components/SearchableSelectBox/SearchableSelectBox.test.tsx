import {render, screen, act, within} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { SearchableSelectBox } from "./index"
import React from 'react';

describe("Filter box testing", () => {
  const user = userEvent.setup();
  
  const selectProps = {
    label: 'Select',
    options: [
        'Option1100',
        'Option1200',
        'Option1300',
        'Option2100',
        'Option2200',
        'Option2300'
    ],
    setSelectedAttr: () => {}
  }

  it("All content should be render", async () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<SearchableSelectBox selectedValue={[]} selectedAttr={[]} {...selectProps} />);
    const selectBox = screen.getByTestId("searchable-select-box")
    expect(selectBox).toBeInTheDocument();

    const selectInput = screen.getByRole("button")
    await act(async () => {
      await user.click(selectInput);
    })
    // screen.debug()
    const elements = [
      screen.getByTestId("select-all-option"),
      screen.getByTestId("clear-all-option"),
      screen.getByTestId("search-input-option"),
      screen.getByRole('listbox')
    ]

    for (let ele of elements) {
      expect(ele).toBeInTheDocument();
    }

    const selectOptions = screen.getAllByRole("option")

    expect(selectOptions).toHaveLength(7)
  })

  it("Check selected value", async () => {
    render(<SearchableSelectBox selectedValue={[]} selectedAttr={[]} {...selectProps} />);
    const selectVlaues = ['Option1100']

    const selectInput = screen.getByRole("button")
    await act(async () => {
      await user.click(selectInput);
    })

    // Locate the corresponding popup (`listbox`) of options.
    const optionsPopupEl = await screen.findByRole("listbox");

    // Click an option in the popup.
    await act(async () => 
      await user.click(within(optionsPopupEl).getByText(/Option1100/i))
    )

    const inputBox = screen.getByTestId("multiselect-input")
    expect(inputBox).toHaveValue(selectVlaues.join(","))
  })

  it("Check clear all", async () => {
    render(<SearchableSelectBox selectedAttr={[]} selectedValue={['Option1100', 'Option1200']} {...selectProps} />);
    // check default selected values
    const inputBox = screen.getByTestId("multiselect-input")
    expect(inputBox).toHaveValue('Option1100,Option1200')
    // Open select box
    const selectInput = screen.getByRole("button")
    await act(async () => {
      await user.click(selectInput);
    })
    // click on clear all button
    const clearAllButon = screen.getByTestId("clear-all-option")
    await act(async () => {
      await user.click(clearAllButon);
    })
    // check now selected values get empty
    expect(inputBox).toHaveValue('')
  })

  it("Check select all", async () => {
    render(<SearchableSelectBox selectedAttr={[]} selectedValue={[]} {...selectProps} />);
    // Open select box
    const selectInput = screen.getByRole("button")
    await act(async () => {
      await user.click(selectInput);
    })
    // click on clear all button
    const selectAllButon = screen.getByTestId("select-all-option")
    await act(async () => {
      await user.click(selectAllButon);
    })
    // check now it should select all options
    const inputBox = screen.getByTestId("multiselect-input")
    expect(inputBox).toHaveValue(selectProps.options.join(","))
  })

})