import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostAPI } from "../../api/fetchApi";
import styles from "./PostContent.module.css";

const PostContent = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPost = async (id) => {
      setLoading(true);
      try {
        const result = await fetchPostAPI(id);
        setPost(result);
      } catch (error) {
        console.error("fetch failed", error);
      } finally {
        setLoading(false);
      }
    };

    getPost(id);
  }, [id]);

  return (
    <div className={styles.pageContainer}>
      {loading ? (
        <div>loading..</div>
      ) : (
        <div className={styles.postContainer}>
          <div className={styles.title}>{post.title}</div>
          <div className={styles.date}>{post.date}</div>
          <div className={styles.content}>
            {post.content ? (
              post.content.split("\n\n").map((paragraph, index) => (
                <div key={index} className={styles.paragraph}>
                  <p>{paragraph}</p>
                </div>
              ))
            ) : (
              <p>No content available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostContent;
