import { fireEvent, render, screen } from "@testing-library/react";

import Login from "./Login";

describe("Login", () => {
  test("renders heading", () => {
    render(<Login onLogin={() => {}} />);
    expect(screen.getByRole("heading", { name: /Login/i })).toBeInTheDocument();
  });

  test("renders username input", () => {
    render(<Login onLogin={() => {}} />);
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  });

  test("renders password input", () => {
    render(<Login onLogin={() => {}} />);
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("renders login button", () => {
    render(<Login onLogin={() => {}} />);
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  test("submits form data", () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "rokas" } });
    fireEvent.change(passwordInput, { target: { value: "rokas123" } });
    fireEvent.click(loginButton);

    expect(mockOnLogin).toHaveBeenCalledWith("rokas", "rokas123");
  });
});
