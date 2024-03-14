import { useState } from "react";
import { loginAccount } from "../../api/fetchApi";

import styles from "./Form.module.css";

const LoginForm = () => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const infoHandle = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value, // Use the input's name as the key in the info object
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const lookAccount = async () => {
      const payload = {
        username: info.username,
        password: info.password,
      };

      try {
        const result = await loginAccount(payload);

        if (result.token) {
          localStorage.setItem("token", result.token);
        }

        alert(result.message);
      } catch (error) {
        console.error("fetch failed", error);
      }
    };

    lookAccount();
  };
  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <div className={styles.title}>Log in</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={info.username}
              onChange={infoHandle}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={info.password}
              onChange={infoHandle}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
