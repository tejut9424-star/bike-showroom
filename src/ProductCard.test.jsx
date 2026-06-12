import {
  render,
  screen,
} from "@testing-library/react";

import ProductCard from "./ProductCard";

test(
  "renders product name",
  () => {
    render(
      <ProductCard
        product={{
          id: 1,
          name: "Yamaha R15 V4",
          price: 185000,
        }}
      />
    );

    expect(
      screen.getByText(
        "Yamaha R15 V4"
      )
    ).toBeInTheDocument();
  }
);