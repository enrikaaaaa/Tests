import Users from "./Users";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("User", () => {
  test("renders heading", async () => {
    render(<Users />);
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });
});
