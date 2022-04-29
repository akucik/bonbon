import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const hasFiveDigits = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    surname: true,
    postCode: true,
    street: true,
    city: true,
  });
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const streetInputRef = useRef();
  const postCodeInputRef = useRef();
  const cityInputRef = useRef();

  const orderConfirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostCode = postCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredSurnameIsValid = !isEmpty(enteredSurname);
    const enteredPostCodeIsValid = hasFiveDigits(enteredPostCode);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      surname: enteredSurnameIsValid,
      postCode: enteredPostCodeIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredSurnameIsValid &&
      enteredStreetIsValid &&
      enteredPostCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
      //if form is invalid dont proceed with the code below.
      //if valid proceed with form submission
    }
    //submit user data at the checkout, we pass pointer(set in Cart.js component on Checkout), with object as value(see below)

    props.onConfirm({
      name: enteredName,
      surname: enteredSurname,
      street: enteredSurname,
      postCode: enteredPostCode,
      city: enteredCity,
    });
  };

  const styleNameInput = `${styles.control} ${
    formInputValidity.name ? "" : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={orderConfirmHandler}>
      <div>
        <h3>Dane Personalne</h3>
      </div>
      <div className={styleNameInput}>
        <label htmlFor="name">Imię</label>
        <input ref={nameInputRef} type="text" id="name"></input>
        {!formInputValidity.name && <p>prosze wpisz swoje imię</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputValidity.surname && styles.invalid
        }`}
      >
        <label htmlFor="surname">Nazwisko</label>
        <input ref={surnameInputRef} type="text" id="surname"></input>
        {!formInputValidity.surname && <p>prosze wpisz swoje nazwisko</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Ulica</label>
        <input ref={streetInputRef} type="text" id="street"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="post">Kod Pocztowy</label>
        <input ref={postCodeInputRef} type="text" id="post"></input>
        {!formInputValidity.postCode && <p>prosze wpisz kod pocztowy</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="city">Miasto</label>
        <input ref={cityInputRef} type="text" id="city"></input>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Anuluj
        </button>
        <button className={styles.submit}>Potwierdz Zamówienie</button>
      </div>
    </form>
  );
};
export default Checkout;
