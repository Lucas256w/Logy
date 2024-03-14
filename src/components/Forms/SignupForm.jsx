import styles from "./Form.module.css";

const SignupForm = () => {
  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <div className={styles.title}>Sign up</div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Email: </label>
            <input type="email" name="password" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input type="password" name="confirmPassword" />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
