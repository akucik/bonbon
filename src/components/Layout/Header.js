import { Fragment } from "react";
import BonbonHeader from "../../assets/images/bonbonHeader.png";
import CartButton from "./CartButton";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div>
          <button onClick={props.onShowAuth}>Loguj-się</button>
          <button>Wyloguj-się</button>
        </div>
        <div>
          <button>Konto</button>
        </div>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={BonbonHeader} alt="bonbon" />
      </div>
    </Fragment>
  );
};

export default Header;
