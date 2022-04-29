import { Fragment } from "react";
import { useContext } from "react";
import BonbonHeader from "../../assets/images/bonbonHeader.png";
import CartButton from "./CartButton";

import styles from "./Header.module.css";
import AuthContext from "../../store/auth-context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logoutF();
  };
  return (
    <Fragment>
      <header className={styles.header}>
        {!isLoggedIn && (
          <div>
            <button onClick={props.onShowAuth}>Loguj-się</button>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <button onClick={logoutHandler}>Wyloguj-się</button>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <button>Konto</button>
          </div>
        )}
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={BonbonHeader} alt="bonbon" />
      </div>
    </Fragment>
  );
};

export default Header;
