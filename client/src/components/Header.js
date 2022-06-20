import styles from "./css/Header.module.css";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";

function Header({ onClickBtn }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logoAndMenu}>
          <div className={styles.logo}>
            <Link to="/">
              Now<span className={styles.trend}>Trend</span>
            </Link>
          </div>
          <div className={styles.menuIcon}>
            <ImMenu onClick={onClickBtn} cursor="pointer" size="1.5rem" />
          </div>
        </div>
        {/* 올라가기 버튼 */}
        <div className={styles.toTop}>
          <a href="#">
            <BsArrowUpSquareFill size="2rem" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
