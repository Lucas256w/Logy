const domain =
  import.meta.env.VITE_MODE === "prod"
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

// GET all posts for homepage
const fetchPosts = async () => {
  const response = await fetch(`${domain}/api/posts`);
  const data = await response.json();
  return data;
};

// GET post content for individual post page
const fetchPost = async (id) => {
  const response = await fetch(`${domain}/api/posts/${id}`);
  const data = await response.json();
  return data;
};

// GET post commetns for infividual post page
const fetchCommnets = async (id) => {
  const response = await fetch(`${domain}/api/comments/${id}`);
  const data = await response.json();
  return data;
};

// POST request to create new account
const postAccount = async (payload) => {
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
const loginAccount = async (payload) => {
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

export { fetchPosts, fetchPost, fetchCommnets, postAccount, loginAccount };
