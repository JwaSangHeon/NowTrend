import styles from "../components/css/Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link to="/intro">서비스 소개</Link>
          </li>
          <li>
            <Link to="/">종합</Link>
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
          <li>
            <Link to="/itnews">IT뉴스</Link>
          </li>
          <li>
            <Link to="/report">보고서</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
