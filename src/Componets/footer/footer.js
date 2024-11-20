import styles from "./footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <img
              src="https://1mdm.com/about/assets/logo-white.png"
              alt="logo"
            />
            <p>
              One Medical Devices <br />
              Market Place
            </p>
          </div>
          <div className={styles.footerSecondary}>
            <div className={styles.platform}>
              <h5>Platform</h5>
              <p>Sell on 1MDM</p>
              <p>Pricing</p>
              <p>About Us</p>
              <p>Our Story</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>Brand</p>
            </div>
            <div className={styles.pressRoom}>
              <h5>Press Room</h5>
              <p>Images & B-roll</p>
              <h5 style={{ marginTop: "20px" }}>Policies</h5>
              <p>Terms of Services</p>
              <p>Privacy Policy</p>
              <p>Delivery Information</p>
            </div>
            <div className={styles.reach}>
              <h5>Reach Us</h5>
              <p>Corporate Information</p>
              <p>Contact US</p>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copy}>
        <p>© 2024 1MDM ⚡ by SuperLabs</p>
      </div>
    </>
  );
}
