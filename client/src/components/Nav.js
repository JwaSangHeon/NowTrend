import styles from "./css/Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ onClickList }) {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link to="/intro" onClick={onClickList}>
              서비스 소개
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClickList}>
              종합
            </Link>
          </li>
          <li>
            <Link to="/community" onClick={onClickList}>
              커뮤니티
            </Link>
          </li>
          <li>
            <Link to="/itnews" onClick={onClickList}>
              IT뉴스
            </Link>
          </li>
          <li>
            <Link to="/report" onClick={onClickList}>
              보고서
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
