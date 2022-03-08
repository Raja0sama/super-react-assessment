import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import React from "react";
import SecureLayout from "./SecureLayout";

describe("<SecureLayout />", () => {
  test("it should mount", () => {
    render(<SecureLayout />);

    const secureLayout = screen.getByTestId("SecureLayout");

    expect(secureLayout).toBeInTheDocument();
  });
});
