import Header from "../header/header";
import styles from "./about.module.css";
import Footer from "../footer/footer";
export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.about}>
        <h1 className={styles.aim}>
          Our mission is to make life
          <br />
          saving devices accessible
          <br />& affordable worldwide.
        </h1>
        <div className={styles.img1}>
          <p>1MDM MAGAZINE </p>
          <h4>
            {" "}
            Deep dive into the
            <br /> engineering &amp; technology
            <br /> behind life saving medical
            <br /> devices from 1MDM.
          </h4>
          <p className={styles.learn}>Learn more</p>
        </div>
        <div className={styles.img2}>
          <div className={styles.txt}>
            <p>OUR PRODUCTS</p>
            <h4>Hi, how we can you help you?</h4>
            <p className={styles.txt2}>See what we build</p>
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.servicesOne}>
          <img src="https://1mdm.com/about/assets/image-5.jpg" alt="img" />
          <p className={styles.para1}>Careers at 1MDM</p>
          <p className={styles.para2}>Join Us</p>
        </div>
        <div className={styles.servicesTwo}>
          <img src="https://1mdm.com/about/assets/image-6.jpg" alt="img" />
          <p className={styles.para1}>Sell at 1MDM</p>
          <p className={styles.para2}>Start selling</p>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.servicesOne}>
          <img src="https://1mdm.com/about/assets/image-7.jpg" alt="img" />
          <p className={styles.para1}>From humble beginnings</p>
          <p className={styles.para2}>Our Story</p>
        </div>
        <div className={styles.servicesTwo}>
          <img src="https://1mdm.com/about/assets/image-8.jpg" alt="img" />
          <p className={styles.para1}>Contact US</p>
          <p className={styles.para2}>Say hello!</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
