import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Comments from "./Comments"; // Adjust the path as necessary
import * as fetchApi from "../../api/fetchApi";

// Mock the fetchCommnets API call
vi.mock("../../api/fetchApi", () => ({
  fetchCommnets: vi.fn(),
}));

// Adjusted utility function to render the component within a Router correctly
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>{ui}</Routes>
    </MemoryRouter>
  );
};

const commentsMock = [
  {
    id: 1,
    user: "User 1",
    date: "2022-01-01",
    content: "Comment 1 content",
  },
  {
    id: 2,
    user: "User 2",
    date: "2022-01-02",
    content: "Comment 2 content",
  },
];

describe("Comments", () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.resetAllMocks();
  });

  it("shows loading indicator while comments are being fetched", async () => {
    fetchApi.fetchCommnets.mockResolvedValue([]);
    renderWithRouter(<Route path="/post/:id" element={<Comments />} />, {
      route: "/post/123",
    });

    expect(screen.getByText(/loading../i)).toBeInTheDocument();

    await waitFor(() =>
      expect(fetchApi.fetchCommnets).toHaveBeenCalledTimes(1)
    );
  });

  it("displays comments after successful fetch", async () => {
    fetchApi.fetchCommnets.mockResolvedValue(commentsMock);
    renderWithRouter(<Route path="/post/:id" element={<Comments />} />, {
      route: "/post/123",
    });

    for (const comment of commentsMock) {
      await waitFor(() =>
        expect(screen.getByText(comment.content)).toBeInTheDocument()
      );
    }
  });

  it("handles fetch errors gracefully", async () => {
    fetchApi.fetchCommnets.mockRejectedValue(new Error("Fetch failed"));

    renderWithRouter(<Route path="/post/:id" element={<Comments />} />, {
      route: "/post/123",
    });

    await waitFor(() =>
      expect(screen.getByText(/loading../i)).toBeInTheDocument()
    );
  });
});
