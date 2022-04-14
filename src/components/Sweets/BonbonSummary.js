import styles from "./BonbonSummary.module.css";

const BonbonSummary = () => {
  return (
    <section className={styles.summary}>
      <div>
        <h2>Wyjatkowe słodkie wnetrze</h2>
      </div>
      <div className={styles.wrapper}>
        <p>
          Jesteśmy niewielka autorska cukiernia tworzaca wyjatkowe mono-desery.
          Każdy product wykonujemy ze szczególna uwaga oraz przy użyciu
          najwyższej jakości swieżych, sezonowych i naturalnych składników.
        </p>
      </div>
    </section>
  );
};
export default BonbonSummary;
