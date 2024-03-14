import styles from "./Form.module.css";

const LoginForm = () => {
  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <div className={styles.title}>Log in</div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
