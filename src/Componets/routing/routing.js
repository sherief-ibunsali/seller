import { useState } from "react";
import styles from "./routing.module.css";
import { useEffect } from "react";
const routingData = [
  "Customer storefront",
  "Advertising tools",
  "Data and analytics",
  "Customers support",
];

const routingObj = [
  {
    title: "Set up a store that showcases your brand",
    para: "Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!",
    img: "https://1mdm.com/about/assets/1mdm-product-1.png",
  },
  {
    title:
      "Increase exposure by up to 120% with a suite of smart advertising tools.",
    para: "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
    img: "https://1mdm.com/about/assets/1mdm-product-image-4.png",
  },
  {
    title: "Optimize your every move with in-depth data and customer insights",
    para: "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!",
    img: "https://1mdm.com/about/assets/1mdm-product-2.png",
  },
  {
    title: "Know you’re supported throughout your journey",
    para: "From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you",
    img: "https://1mdm.com/about/assets/1mdm-product-3.png",
  },
];
export default function Routing() {
  const [currentRoute, setCurrentRoute] = useState(0);

  function handleClickRoute(index) {
    setCurrentRoute(index);
  }
  useEffect(
    function () {
      console.log(currentRoute);
    },
    [currentRoute]
  );
  return (
    <section className={styles.route}>
      <div className={styles.redirect}>
        {routingData.map((data, i) => (
          <RoutingData
            data={data}
            key={i}
            index={i}
            onRoute={handleClickRoute}
            currentRoute={currentRoute}
          />
        ))}
      </div>
      <RoutingObj routeObj={routingObj[currentRoute]} />
    </section>
  );
}

function RoutingObj({ routeObj }) {
  return (
    <div className={styles.routeSecondary}>
      <div className={styles.routeTxt}>
        <h1 className={styles.h1}>{routeObj.title}</h1>
        <p>{routeObj.para}</p>
      </div>
      <div className={styles.routeImg}>
        <img src={routeObj.img} alt="Additional" />
      </div>
    </div>
  );
}

function RoutingData({ data, index, onRoute, currentRoute }) {
  return (
    <p
      className={index === currentRoute ? styles.currentRoute  : ""}
      onClick={() => onRoute(index)}
    >
      {data}
    </p>
  );
}
