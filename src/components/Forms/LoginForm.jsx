import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { loginAccountAPI } from "../../api/fetchApi";

import styles from "./Form.module.css";

const LoginForm = () => {
  const { setUser } = useOutletContext();
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const infoHandle = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value, // Use the input's name as the key in the info object
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const loginAccount = async () => {
      const payload = {
        username: info.username,
        password: info.password,
      };

      try {
        const result = await loginAccountAPI(payload);

        if (result.token) {
          localStorage.setItem("token", result.token);
          setUser({
            username: result.username,
            id: result.id,
          });

          navigate("/");
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error("fetch failed", error);
      }
    };

    loginAccount();
  };

  // Redirect to homepage if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <div className={styles.title}>Log in</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username: </label>
            <input
              className={styles.input}
              type="text"
              name="username"
              value={info.username}
              onChange={infoHandle}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password: </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={info.password}
              onChange={infoHandle}
            />
          </div>
          <button className={styles.btn} type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
