import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("renders Button component", () => {
  render(<Button>+ Create New Note</Button>);
  const element = screen.getByRole("button", {
    name: "+ Create New Note",
  });
  expect(element).toBeTruthy();
});
