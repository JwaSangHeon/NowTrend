import styles from "../components/css/Nav.module.css";

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a href="#">종합</a>
          </li>
          <li>
            <a href="#">기업테크블로그</a>
          </li>
          <li>
            <a href="#">Velog</a>
          </li>
          <li>
            <a href="#">IT뉴스</a>
          </li>
          <li>
            <a href="#">취업사이트</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
