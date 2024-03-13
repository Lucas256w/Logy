import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../api/fetchApi";
import PostContent from "./PostContent";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useParams: vi.fn(),
}));

vi.mock("../../api/fetchApi", () => ({
  fetchPost: vi.fn(),
}));

describe("PostContent", () => {
  it("renders the post after fetching", async () => {
    const mockPost = {
      title: "some title",
      content: "some content",
      date: "some date",
    };

    useParams.mockImplementation(() => ({ id: "123" }));
    fetchPost.mockResolvedValue(mockPost);

    render(<PostContent />);

    expect(screen.getByText(/loading../i)).toBeInTheDocument();

    await waitFor(() => screen.getByText(mockPost.title));

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.date)).toBeInTheDocument();
    expect(screen.getByText(mockPost.content)).toBeInTheDocument();
  });
});
