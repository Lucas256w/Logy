const domain =
  import.meta.env.VITE_MODE === "prod"
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

const fetchPosts = async () => {
  const response = await fetch(`${domain}/api/posts`);
  const data = await response.json();
  return data;
};

export default fetchPosts;
