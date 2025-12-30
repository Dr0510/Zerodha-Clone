import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero component", () => {
  test("render hero img", () => {
    render(<Hero />);

    const heroImg = screen.getByAltText("Hero Image");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute(
      "src",
      expect.stringContaining("homeHero.png")
    );
  });
});
