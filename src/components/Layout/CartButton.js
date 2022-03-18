import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./CartButton.module.css";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const [btnBump, setBtnBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const noOfCartItems = items.reduce((currNo, item) => {
    return currNo + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnBump ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default CartButton;
