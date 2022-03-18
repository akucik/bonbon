import { useContext } from "react";

import styles from "./SweetItem.module.css";
import SweetItemForm from "../SweetItemForm";
import CartContext from "../../../store/cart-context";

const SweetItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)} PLN`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });

    console.log(cartCtx.items);
  };

  return (
    <li className={styles.sweet}>
      <img className={styles.sweet} src={props.image} alt="bonbon types" />

      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <SweetItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default SweetItem;
