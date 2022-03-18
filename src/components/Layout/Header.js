import { Fragment } from "react";
import BonbonHeader from "../../assets/images/bonbonHeader.jpg";
import CartButton from "./CartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>logowanie</h2>
        <h1>BONBON</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={BonbonHeader} alt="abstract imagea counter at bonbon" />
      </div>
    </Fragment>
  );
};

export default Header;
