import {render, screen, fireEvent, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { LoginForm } from "./index"
import React from 'react';

describe("Login form testing", () => {
  const user = userEvent.setup();

  it("All content should be render", () => {
    const formProps = {
        login: jest.fn(),
        message: '',
        setMessage: jest.fn()
    }
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<LoginForm logo={undefined} {...formProps} />);

    const elements = [
      screen.getByTestId("app-logo"),
      screen.getByRole("textbox", { name: /username/i }),
      screen.getByLabelText(/password/i),
      screen.getByTestId("login-btn"),
    ];
    for (let ele of elements) {
      expect(ele).toBeInTheDocument();
    }
  })

  test("Check required fields Error", async () => {
    const formProps = {
      login: jest.fn(),
      message: '',
      setMessage: jest.fn()
    }
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<LoginForm logo={undefined} {...formProps} />);
    
    const loginButton = screen.getByTestId("login-btn");
    await act(async () => {
      await user.click(loginButton);
    })
    const userNameError = screen.getByText(/Username is required/i);
    expect(userNameError).toBeInTheDocument();
    const passwordError = screen.getByText(/Password is required/i);
    expect(passwordError).toBeInTheDocument();
  });

  test("Enter invalid details and check error", async () => {
    const formProps = {
      login: jest.fn(),
      message: 'Error processing request: Invalid username or password.',
      setMessage: jest.fn()
    }
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<LoginForm logo={undefined} {...formProps} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "test username" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "test password" },
    });

    const loginButton = screen.getByTestId("login-btn");
    await act(async () => {
      await user.click(loginButton);
    })
    expect(screen.getByText(/Error processing request: Invalid username or password./i)).toBeInTheDocument();
  });
})