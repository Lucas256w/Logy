import styles from "./Content.module.css";
import { useState, useEffect } from "react";
import { fetchPostsAPI } from "../../api/fetchApi";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <div>See what I&apos;ve</div>
        <div className={styles.titleBold}>written lately</div>
      </div>
    </>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get posts from api
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const postsGotten = await fetchPostsAPI();
        setPosts(postsGotten);
      } catch (error) {
        console.error("fetch failed", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <div className={styles.postsContainer}>
      {loading ? (
        <div>Loading</div>
      ) : (
        posts.map((p) => (
          <div className={styles.postCard} key={p.id}>
            <Link to={`post/${p.id}`} className={styles.postTitle}>
              {p.title}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <Title />
      <Posts />
    </div>
  );
};

export default Content;

export { Posts, Title };
