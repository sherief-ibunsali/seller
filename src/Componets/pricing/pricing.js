import React from "react";
import "./pricingTable.css";
import Header from "../header/header";
import Grow from "../growPage/grow";
import Footer from "../footer/footer";

const pricingData = [
  {
    title: "Standard",
    yearlyPrice: "$3,499/year",
    monthlyPrice: "$291.5/month",
    additionalInfo: "",
    features: [
      { feature: "Post products", value: "Unlimited" },
      { feature: "Receive & respond to inquiries", value: "Yes" },
      { feature: "Keyword ad spend", value: "USD 500" },
      { feature: "Showcased products", value: "20" },
      { feature: "Respond to RFQs", value: "60/month" },
      { feature: "Keywords Trends", value: "No" },
      { feature: "180 day traffic accelerator", value: "No" },
      { feature: "Sub accounts", value: "5" },
      { feature: "Worldwide Shipping (over 60+ countries)", value: "Yes" },
      { feature: "Onboarding (for free)", value: "Yes" },
      { feature: "Product posting service", value: "75" },
      { feature: "Minisite creation", value: "Yes" },
      { feature: "Feature configuration", value: "No" },
      { feature: "Customer service", value: "Yes" },
      { feature: "Account Manager", value: "Dedicated account manager" },
      { feature: "US-based Key Success Program (KSP)", value: "Not available" },
    ],
  },
  {
    title: "Standard Extended",
    yearlyPrice: "$5,299/2 years",
    additionalInfo: "2-year with 20% Savings",
    monthlyPrice: "$441.5/month",
    features: [
      { feature: "Post products", value: "Unlimited" },
      { feature: "Receive & respond to inquiries", value: "Yes" },
      { feature: "Keyword ad spend", value: "USD 500+50" },
      { feature: "Showcased products", value: "20" },
      { feature: "Respond to RFQs", value: "60/month" },
      { feature: "Keywords Trends", value: "Yes" },
      { feature: "180 day traffic accelerator", value: "Yes" },
      { feature: "Sub accounts", value: "5" },
      { feature: "Worldwide Shipping (over 60+ countries)", value: "Yes" },
      { feature: "Onboarding (for free)", value: "Yes" },
      { feature: "Product posting service", value: "75" },
      { feature: "Minisite creation", value: "Yes" },
      { feature: "Feature configuration", value: "Yes" },
      { feature: "Customer service", value: "Yes" },
      { feature: "Account Manager", value: "Dedicated account manager" },
      { feature: "US-based Key Success Program (KSP)", value: "Not available" },
    ],
  },
  {
    title: "Premium",
    yearlyPrice: "$6,999/year",
    monthlyPrice: "$583.2/month",
    additionalInfo: "",
    features: [
      { feature: "Post products", value: "Unlimited" },
      { feature: "Receive & respond to inquiries", value: "Yes" },
      { feature: "Keyword ad spend", value: "USD 1000+150" },
      { feature: "Showcased products", value: "20" },
      { feature: "Respond to RFQs", value: "60/month" },
      { feature: "Keywords Trends", value: "Yes" },
      { feature: "180 day traffic accelerator", value: "Yes" },
      { feature: "Sub accounts", value: "5" },
      { feature: "Worldwide Shipping (over 60+ countries)", value: "No" },
      { feature: "Onboarding (for free)", value: "Yes" },
      { feature: "Product posting service", value: "100" },
      { feature: "Minisite creation", value: "Yes" },
      { feature: "Feature configuration", value: "Yes" },
      { feature: "Customer service", value: "Yes" },
      { feature: "Account Manager", value: "NYC Based Key Account Manager" },
      { feature: "US-based Key Success Program (KSP)", value: "Not available" },
    ],
  },
];

export default function PricingTable() {
  return (
    <>
      <Header />
      <div className="tableOutside">
        <h3 className="reach">Reach millions of B2B buyers globally</h3>
        <p className="choose-para">Choose an 1mdm.com seller plan to launch your new business growth</p>
      </div>
      <div className="table-container">
        <table className="pricing-table">
          <thead>
            <tr>
              <th></th>
              {pricingData.map((plan, index) => (
                <th key={index}>
                  <div className="headTitles">
                    {plan.additionalInfo && (
                      <small className="addInfo">{plan.additionalInfo}</small>
                    )}
                    <h3>{plan.title}</h3>
                    <p className="yearlyPrice">{plan.yearlyPrice}</p>
                    <p>{plan.monthlyPrice}</p>
                    <button className="btnStart">Select & Pay</button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingData[0].features.map((feature, i) => (
              <tr key={i}>
                <td>{feature.feature}</td>
                {pricingData.map((plan, index) => (
                  <td key={index}>{plan.features[i].value}</td>
                ))}
              </tr>
            ))}
            <tr>
              <td></td>
              <td>
                <button className="btnStart">Select & Pay</button>
              </td>
              <td>
                <button className="btnStart">Select & Pay</button>
              </td>
              <td>
                <button className="btnStart">Select & Pay</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="tableOutside">
          <h3>Need help picking the best plan?</h3>
          <p>
            Book a free personal demo with our customer success professional to
            get more sales for your business.
          </p>
          <button className="btnStart">Talk to sales</button>
        </div>
      </div>
      <Grow />
      <Footer />
    </>
  );
}
