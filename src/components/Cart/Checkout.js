import { useRef } from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const streetInputRef = useRef();
  const postInputRef = useRef();
  const cityInputRef = useRef();

  const orderConfirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostCode = postInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
  };

  return (
    <form className={styles.form} onSubmit={orderConfirmHandler}>
      <div>
        <h3>Dane Personalne</h3>
      </div>
      <div className={styles.control}>
        <label htmlFor="name">Imię</label>
        <input ref={nameInputRef} type="text" id="name"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="surname">Nazwisko</label>
        <input ref={surnameInputRef} type="text" id="surname"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Ulica</label>
        <input ref={streetInputRef} type="text" id="street"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="post">Kod Pocztowy</label>
        <input ref={postInputRef} type="text" id="post"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="city">Miasto</label>
        <input ref={cityInputRef} type="text" id="city"></input>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Anuluj
        </button>
        <button className={styles.submit}>Potwierdz</button>
      </div>
    </form>
  );
};
export default Checkout;
