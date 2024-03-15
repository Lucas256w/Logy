import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeAccountAPI } from "../../api/fetchApi";

import styles from "./Form.module.css";

const SignupForm = () => {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (info.password !== info.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const makeAccount = async () => {
      const payload = {
        username: info.username,
        email: info.email,
        password: info.password,
        confirmPassword: info.confirmPassword,
      };

      try {
        const result = await makeAccountAPI(payload);
        alert(result.message);
      } catch (error) {
        console.error("fetch failed", error);
      }
    };

    makeAccount();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <div className={styles.title}>Sign up</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username: </label>
            <input
              className={styles.input}
              onChange={infoHandle}
              type="text"
              name="username"
              value={info.username}
              minLength={4}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email: </label>
            <input
              className={styles.input}
              onChange={infoHandle}
              type="email"
              name="email"
              value={info.email}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password: </label>
            <input
              className={styles.input}
              onChange={infoHandle}
              type="password"
              name="password"
              minLength={8}
              value={info.password}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input
              className={styles.input}
              onChange={infoHandle}
              type="password"
              name="confirmPassword"
              minLength={8}
              value={info.confirmPassword}
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
