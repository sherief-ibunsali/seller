import styles from "./productAdd.module.css";
export default function ProductAdd() {
  return (
    <>
      <div className={styles.texts}>
        <h1>Largest number of products & categories of</h1>
        <h1>medical devices on a single place - 1mdm.com</h1>
        <div className={styles.para}>
          <h5>Connect with buyers worldwide for your product &</h5>
          <h5> start selling now.</h5>
        </div>
      </div>
      <h1 className={styles.growTxt}>
        Grow your business with a suite of tools built for you
      </h1>
    </>
  );
}
