import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommnets } from "../../api/fetchApi";
import styles from "./Comments.module.css";

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getComments = async (id) => {
      setLoading(true);
      try {
        const result = await fetchCommnets(id);
        console.log(result);
        setComments(result);
      } catch (error) {
        console.error("fetch failed", error);
      } finally {
        setLoading(false);
      }
    };

    getComments(id);
  }, [id]);

  return (
    <div className={styles.commentsContainer}>
      {loading ? (
        <div>loading..</div>
      ) : (
        comments.map((comment) => (
          <div className={styles.commentBox} key={comment.id}>
            <div className={styles.commentTop}>
              <div className={styles.userName}>{comment.user}</div>
              <div className={styles.dateText}>{comment.date}</div>
            </div>
            <div className={styles.commentContent}>{comment.content}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
