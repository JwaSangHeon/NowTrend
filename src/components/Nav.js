import styles from "../components/css/Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
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
      </nav>
    </>
  );
}

export default Nav;
