import Logo from "/Logy_Logo.jpg";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link className={styles.login} to="/log-in">
          Log in
        </Link>
        <Link className={styles.signup} to="/sign-up">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
