import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCommentsAPI, postCommentAPI } from "../../api/fetchApi";
import styles from "./Comments.module.css";

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useOutletContext();

  useEffect(() => {
    const getComments = async (id) => {
      setLoading(true);
      try {
        const result = await fetchCommentsAPI(id);
        setComments(result);
      } catch (error) {
        console.error("fetch failed", error);
      } finally {
        setLoading(false);
      }
    };

    getComments(id);
  }, [id]);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const postComment = async () => {
    if (comment.length < 1) {
      alert("Comment cannot be empty");
      return;
    }
    const payload = {
      content: comment,
      userId: user.id,
      postId: id,
    };

    const token = localStorage.getItem("token");

    try {
      const result = await postCommentAPI(payload, token);

      const newComment = {
        date: result.date,
        id: result.id,
        user: user.username,
        content: comment,
      };
      setComments((prevComments) => [newComment, ...prevComments]);
      setComment("");
    } catch (error) {
      console.error("fetch failed", error);
    }
  };

  return (
    <div className={styles.commentsContainer}>
      {loading ? (
        <div>loading..</div>
      ) : (
        <>
          {user ? (
            <div className={styles.commentInputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={handleInputChange}
              />
              <button onClick={postComment} className={styles.btn}>
                Comment
              </button>
            </div>
          ) : (
            <div>Login to comment</div>
          )}
          {comments.map((comment) => (
            <div className={styles.commentBox} key={comment.id}>
              <div className={styles.commentTop}>
                <div className={styles.userName}>{comment.user}</div>
                <div className={styles.dateText}>{comment.date}</div>
              </div>
              <div className={styles.commentContent}>{comment.content}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
