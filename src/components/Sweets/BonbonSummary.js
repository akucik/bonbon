import styles from "./BonbonSummary.module.css";

const BonbonSummary = () => {
  return (
    <section className={styles.summary}>
      <div>
        <h2>Wyjatkowe słodkosci na szczególne momenty</h2>
      </div>
      <div className={styles.wrapper}>
        <p>
          Jesteśmy pracownia cukiernicza tworzaca wyjatkowe mono-desery. Każdy
          product wykonujemy ze szczególna uwaga oraz przy użyciu najwyższej
          jakości swieżych, naturalnych składników.
        </p>
      </div>
    </section>
  );
};
export default BonbonSummary;
