import Logo from "/Logy_Logo.jpg";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>
      </div>
      {user ? (
        <div className={styles.rightNav}>
          <div className={styles.username}>Welcome back {user.username}</div>
          <button className={styles.signup} onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link className={styles.login} to="/log-in">
            Log in
          </Link>
          <Link className={styles.signup} to="/sign-up">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
