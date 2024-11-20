import styles from "./imageSection.module.css";
export default function ImageSection() {
  return (
    <>
      <section className={styles.imgBackground}>
        <div className={styles.imgInner}>
          <div className={styles.imgBackgroundPrimay}>
            <h4 className={styles.sell}>Sell on 1mdm.com</h4>
            <h1 className={styles.reach}>
              Reach millions of B2B buyers globally
            </h1>
            <div className={styles.btnContainer}>
              <button className={styles.btnStart}>Start Selling</button>
              <button className={styles.btnChat}>Chat with consult</button>
            </div>
          </div>
          <div className={styles.imgBackgroundSecondary}>
            <div>
              <h3>26,000,000</h3>
              <p>active buyers globally</p>
            </div>
            <div>
              <h3>400,000</h3>
              <p>product inquiries daily</p>
            </div>
            <div>
              <h3>200</h3>
              <p>countries and regions represented</p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.imgHeads}>
        <h1 className={styles.h1}>1mdm.com is a leading ecommerce platform that</h1>
        <h1>helps SMEs go global</h1>
      </div>
    </>
  );
}
