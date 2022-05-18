import styles from "../components/css/MobileNav.module.css";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <>
      <div className={styles.mobileNav}>
        <ul className={styles.menu}>
          <li>
            <Link to="/">종합</Link>
          </li>
          <li>
            <Link to="/tech">기업테크블로그</Link>
          </li>
          <li>
            <Link to="/velog">Velog</Link>
          </li>
          <li>
            <Link to="/itnews">IT뉴스</Link>
          </li>
          <li>
            <Link to="/jobsite">취업사이트</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
