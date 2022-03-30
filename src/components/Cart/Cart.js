import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";

import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} PLN`;

  const itemsInCart = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://bonbon-7b5bf-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );
    setIsSubmitting(false);
    setHasSubmitted(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onClose}>
        Zamknij
      </button>
      {itemsInCart && (
        <button className={styles.button} onClick={orderHandler}>
          Zamów
        </button>
      )}
    </div>
  );

  const cartContentModal = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Twój Koszyk</span>
        <span>{totalAmount}</span>
      </div>
      {!isCheckout && modalActions}
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
    </>
  );

  const isSubmittingUserInfo = <p>Zamówienie zostało złożone.</p>;
  const orderSubmitted = (
    <>
      <p>Potwierdznie zamówiena zostało wysłane na twój adres majlowy.</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onClose}>
          Zamknij
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !hasSubmitted && cartContentModal}
      {isSubmitting && isSubmittingUserInfo}
      {!isSubmitting && hasSubmitted && orderSubmitted}
    </Modal>
  );
};
export default Cart;
