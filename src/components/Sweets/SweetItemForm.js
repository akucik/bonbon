import { useRef, useState } from "react";
import Input from "../UI/Input";

import styles from "./SweetItemForm.module.css";

const SweetItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label="sztuki"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Dodaj</button>
      {!amountIsValid && <p>please enter a valid number (1-5)</p>}
    </form>
  );
};
export default SweetItemForm;
