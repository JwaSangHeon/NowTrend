import styles from "../components/css/Header.module.css";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";

function Header({ onClickBtn }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logoAndMenu}>
          <div className={styles.logo}>
            <a href="#">
              Now<span className={styles.trend}>Trend</span>
            </a>
          </div>
          <div className={styles.menuIcon}>
            <ImMenu onClick={onClickBtn} cursor="pointer" size="1.5rem" />
          </div>
        </div>
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
