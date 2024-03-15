const domain =
  import.meta.env.VITE_MODE === "prod"
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

// GET all posts for homepage
const fetchPostsAPI = async () => {
  const response = await fetch(`${domain}/api/posts`);
  const data = await response.json();
  return data;
};

// GET post content for individual post page
const fetchPostAPI = async (id) => {
  const response = await fetch(`${domain}/api/posts/${id}`);
  const data = await response.json();
  return data;
};

// GET post commetns for infividual post page
const fetchCommnetsAPI = async (id) => {
  const response = await fetch(`${domain}/api/comments/${id}`);
  const data = await response.json();
  return data;
};

// POST request to create new account
const makeAccountAPI = async (payload) => {
  const response = await fetch(`${domain}/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

// POST request to login
const loginAccountAPI = async (payload) => {
  const response = await fetch(`${domain}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

// POST request to auto re-login using jwt
const reloginAccountAPI = async (token) => {
  const response = await fetch(`${domain}/api/re-login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

// POST request to post a comment on a post
const postCommentAPI = async (payload, token) => {
  const response = await fetch(`${domain}/api/comments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

export {
  fetchPostsAPI,
  fetchPostAPI,
  fetchCommnetsAPI,
  makeAccountAPI,
  loginAccountAPI,
  reloginAccountAPI,
  postCommentAPI,
};
