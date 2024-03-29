import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import Content, { Posts, Title } from "./Content";
import { fetchPosts } from "../../api/fetchApi";

vi.mock("../../api/fetchApi"); // Mock the fetchPosts function

// Data to be used for mocking the fetchPosts response
const mockPosts = [
  { id: "1", title: "Post 1" },
  { id: "2", title: "Post 2" },
];

describe("Content Component Tests", () => {
  afterEach(() => {
    vi.resetAllMocks(); // Clear all mocks after each test
  });

  it("renders Title correctly", () => {
    render(<Title />);
    expect(screen.getByText("See what I've")).toBeInTheDocument();
    expect(screen.getByText("written lately")).toBeInTheDocument();
  });

  describe("Posts Component", () => {
    it("shows loading state correctly", async () => {
      fetchPosts.mockReturnValue(new Promise(() => {})); // Prevent the promise from resolving immediately
      render(<Posts />);
      expect(screen.getByText("Loading")).toBeInTheDocument();
    });

    it("renders posts correctly after fetching", async () => {
      fetchPosts.mockResolvedValue(mockPosts);
      render(
        <Router>
          <Posts />
        </Router>
      );
      await waitFor(() => {
        mockPosts.forEach((post) => {
          expect(
            screen.getByRole("link", { name: post.title })
          ).toHaveAttribute("href", `/post/${post.id}`);
        });
      });
    });

    it("handles fetch error gracefully", async () => {
      fetchPosts.mockRejectedValue(new Error("fetch failed")); // Mock fetch failure
      render(<Posts />);
      await waitFor(() => {
        expect(screen.queryByText("Loading")).not.toBeInTheDocument();
      });
    });
  });

  it("integrates Title and Posts within Content correctly", () => {
    render(<Content />);
    expect(screen.getByText("See what I've")).toBeInTheDocument(); // From Title
  });
});
