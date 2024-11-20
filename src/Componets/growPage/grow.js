import styles from "./grow.module.css";
export default function Grow() {
  return (
    <section className={styles.growTab}>
      <h2>Ready to Grow Your Business?</h2>
      <div className={styles.btnContainer}>
        <button className={styles.btnStart}>Start selling</button>
        <button className={styles.btnChat}>Chat with consultant</button>
      </div>
    </section>
  );
}
