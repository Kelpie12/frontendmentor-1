import styles from "./Result.module.css";

export default function Result() {
  return (
    <div className={styles.outter}>
      <div className={styles.box}>
        <h3> Your Result </h3>
        <div className={styles.score}>
          <div className={`${styles.scorepoint} ${styles.white}`}> 76 </div>
          <div className={styles.of}> of 100 </div>
        </div>
        <div className={`${styles.white} ${styles.great}`}> Great </div>
        <p className={styles.paragraph}>
          You score higher than 65% of the people that have taken these test
        </p>
      </div>
      <div className={styles.summary}>
        <h3 className={styles.title}> Summary </h3>
        <div className={`${styles.block} ${styles.red}`}>
          <div className={styles.bold}> Reaction </div>
          <div className={styles.flex}>
            <div className={styles.bold}> 80 </div> <div> / 100 </div>
          </div>
        </div>
        <div className={`${styles.block} ${styles.yellow}`}>
          <div className={styles.bold}> Memory </div>
          <div className={styles.flex}>
            <div className={styles.bold}> 92 </div> <div> / 100 </div>
          </div>
        </div>
        <div className={`${styles.block} ${styles.green}`}>
          <div className={styles.bold}> Verbal </div>
          <div className={styles.flex}>
            <div className={styles.bold}> 61 </div> <div> / 100 </div>
          </div>
        </div>
        <div className={`${styles.block} ${styles.blue}`}>
          <div className={styles.bold}> Visual </div>
          <div className={styles.flex}>
            <div className={styles.bold}> 72 </div> <div> / 100 </div>
          </div>
        </div>
        <button className={styles.button}> Continue </button>
      </div>
    </div>
  );
}
