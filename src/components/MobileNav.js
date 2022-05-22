import styles from "../components/css/MobileNav.module.css";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <>
      <div className={styles.mobileNav}>
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
      </div>
    </>
  );
}

export default MobileNav;
