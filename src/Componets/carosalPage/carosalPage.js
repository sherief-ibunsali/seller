import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./carosalPage.module.css";

const carouselData = [
  {
    title: "Title 1",
    description:
      "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA",
    img: "https://1mdm.com/about/assets/slider-4.webp",
  },
  {
    title: "Title 2",
    description:
      "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our companys team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the mostcompetitive and popular brands and the best quality products for yourlaboratory.",
    img: "https://1mdm.com/about/assets/slider-2.webp",
  },
  {
    title: "Title 3",
    description:
      "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional",
    img: "https://1mdm.com/about/assets/slider-1.webp",
  },
  {
    title: "Title 3",
    description:
      "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
    img: "https://1mdm.com/about/assets/slider-3.webp",
  },
];

export default function CarouselPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carosal}>
      <h1 className={styles.title}>Success stories from 1mdm.com sellers</h1>
      <Slider {...settings}>
        {/* {carouselData.map((item, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="carousel-image">
              <img src={item.img} alt={`Slide ${index}`} />
            </div>
          </div>
        ))}
      </Slider> */}
        {carouselData.map((data, i) => (
          <div className={styles.box} key={i}>
            <div className={styles.right}>
              <p>{data.description}</p>
            </div>
            <div className={styles.left}>
              <img src={data.img} alt="img" />
            </div>
          </div>
        ))}
        {/* <div className={styles.box}>
          <div className={styles.right}>
            Lab Evolution is an import - export company of reagents and
            laboratory equipment established over a decade. Our company’s team
            of experts (in the instrumentations and reagents market) carefully
            follows customers all over the world. Lab Evolution is able to offer
            all the most competitive and popular brands and the best quality
            products for your laboratory.
          </div>
          <div className={styles.left}>
            <img
              src="https://1mdm.com/about/assets/slider-1.webp"
              alt="person"
            />
          </div>
        </div> */}
      </Slider>
    </div>
  );
}
