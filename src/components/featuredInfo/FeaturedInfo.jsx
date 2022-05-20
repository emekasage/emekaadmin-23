import React from "react";
import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo(sliderValue) {
  // console.log(sliderValue.sliderValue);

  const activefeaturedMoney = sliderValue.sliderValue * 30;
  const activeFeaturedMoneyRate = sliderValue.sliderValue * 5;
  const activefeaturedSales = sliderValue.sliderValue * 80;
  const activeFeaturedMoneySales = sliderValue.sliderValue * 1.5;
  const activefeaturedCost = sliderValue.sliderValue * 50;
  const activeFeaturedMoneyCost = sliderValue.sliderValue * 3.5;

  return (
    <div className="featured">
      {/** Revenue Item **/}
      <div
        className={`featuredItem ${
          activefeaturedMoney >= 1500 ? "revenue" : ""
        }`}
      >
        <span
          className={`featuredTitle ${
            activefeaturedMoney >= 1500 ? "revenue" : ""
          }`}
        >
          Revenue
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${activefeaturedMoney}</span>
          {activeFeaturedMoneyRate < 250 && (
            <span className="featuredMoneyRate">
              {activeFeaturedMoneyRate}{" "}
              <ArrowDownward className="featuredIcon negative" />
            </span>
          )}
          {activeFeaturedMoneyRate > 250 && (
            <span className="featuredMoneyRate white">
              +{activeFeaturedMoneyRate}{" "}
              <ArrowUpward className="featuredIcon positive" />
            </span>
          )}
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      {/** Sales Item **/}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${activefeaturedSales}</span>
          {activeFeaturedMoneySales < 75 && (
            <span className="featuredMoneyRate">
              -{activeFeaturedMoneySales}{" "}
              <ArrowDownward className="featuredIcon negative" />
            </span>
          )}
          {activeFeaturedMoneySales > 75 && (
            <span className="featuredMoneyRate">
              +{activeFeaturedMoneySales}{" "}
              <ArrowUpward className="featuredIcon positive" />
            </span>
          )}
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      {/** Cost Item **/}
      <div
        className={`featuredItem ${activefeaturedCost >= 2500 ? "cost" : ""}`}
      >
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${activefeaturedCost}</span>
          <span className="featuredMoneyRate">
            +{activeFeaturedMoneyCost} <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
    </div>
  );
}
