import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // MemoryRouter is used for testing components that use React Router
import Header from "./Header";

describe("Header component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });

  it("contains a logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("contains a login link", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const loginLink = screen.getByText("Log in");
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/");
  });

  it("contains a signup link", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const signupLink = screen.getByText("Sign up");
    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveAttribute("href", "/");
  });
});
