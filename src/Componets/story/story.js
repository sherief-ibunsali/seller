import Header from "../header/header";
import styles from "./story.module.css";
import Footer from "../footer/footer";
export default function Story() {
  return (
    <div>
      <Header />
      <div>
        <div className={styles.imgBackground}></div>
        <div className={styles.storyContent}>
          <div className={styles.storyPrimary}>
            <div>
              <p>Conceptualized</p>
              <p>2019</p>
            </div>
            <div>
              <p>Founder</p>
              <p>Balachander</p>
            </div>
            <div>
              <p>Launch</p>
              <p>Public beta Jan 2022</p>
            </div>
          </div>
          <div className={styles.storySecondary}>
            <h1>Building access to crucial life saving devices</h1>
            <p className={styles.storyHead}>
              1MDM began as a concept idea in 2019 as a platform for access to
              medical devices & machines, the idea was to make access to
              information easy & all in one singular place.
            </p>
            <div className={styles.storyPara}>
              <p>
                The initial plan began as purely a platform for listing various
                medical machines across the world, starting with India as the
                base of this information. However something unexpected struck in
                2020 with a global pandemic and the project had been shelved as
                the focus shifted to building & focusing on existing projects.
              </p>
              <p>
                The global pandemic had taken a serious toll & had pushed the
                supply chain to its maximum capacity, this phase was followed by
                sharp hike in prices of oxygen concentrators and people hording
                or price hiking certain critical and life saving devices during
                the phase. The project was an obvious solution at the time to
                help people who were in need of such supplies.
              </p>
              <p>
                After seeing the heavy shortage and strain on the supply chain,
                1MDM was launched again but focused only on oxygen concentrators
                providing reliable information to those in need of such
                suppliers. We had made sure to provide only manufacturers that
                weren’t taking advantage of the price hike to unfairly push such
                products in the market. We had began to slowly expand the
                product information to include other critical & life saving
                devices across the sector and began offering the information
                from our platform as a singular source of the information.
              </p>
              <p>
                1mdm.com began expanding it’s product catalogue to showcase over
                100,000 products over the course of the year and became a place
                for the global market for medical devices. Our vision is to
                become the singular marketplace across the world to access and
                find reliable information on life saving devices.
              </p>
              <p>
                The relentless search for better access to medical devices
                continues to be at the core of everything we do. Today, 1MDM
                connects hundreds of products used by the medical professionals
                across the globe. Our passion for building technology for
                medical devices market drives all core decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
