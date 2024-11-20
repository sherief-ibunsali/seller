import styles from "./iframe.module.css";
export default function Iframe() {
  return (
    <section className={styles.iframeCotainer}>
      <div className={styles.iframe}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TN7iJyc5Uks?si=gY-10FHTKhaNVqJZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.paraContainer}>
        <p>Connect with millions of business buyers from around the world</p>
        <p>
          Get the tools and know-how to build a successful ecommerce presence
          for your business.
        </p>
        <p>
          Pocket more from each sale, with take rates as low as 0% in some
          cases.
        </p>
      </div>
    </section>
  );
}
