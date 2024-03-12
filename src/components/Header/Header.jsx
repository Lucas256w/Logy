import Logo from "/Logy_Logo.jpg";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </div>
      <div>
        <Link className={styles.login} to="/">
          Log in
        </Link>
        <Link className={styles.signup} to="/">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;