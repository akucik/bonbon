import { Fragment } from "react";
import BonbonSummary from "./BonbonSummary";
import AvailableSweets from "./AvailableSweets";
const Sweets = () => {
  return (
    <Fragment>
      <BonbonSummary />
      <AvailableSweets />
    </Fragment>
  );
};

export default Sweets;
