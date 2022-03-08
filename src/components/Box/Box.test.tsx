import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import Box from "./Box";
import React from "react";

describe("<Box />", () => {
  test("it should mount", () => {
    render(
      <Box
        link={`/`}
        rating={4.5}
        title={"Welcome to Super Movie"}
        date={`25 April`}
        image={
          "https://image.tmdb.org/t/p/w500//4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg"
        }
      />
    );

    const box = screen.getByTestId("Box");

    expect(box).toBeInTheDocument();
  });
});
