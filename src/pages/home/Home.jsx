import React, { useState } from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../DummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import VerticalSlider from "../../components/slider/Slider";

export default function Home(props) {
  const [sliderValue, setSliderValue] = useState(1);
  const getSliderValue = (value) => {
    setSliderValue(value);
  };

  const calculateNewMonth = (month) => {
    const activeUserValue = sliderValue * month["Active User"];
    const newMonthValue = { ...month, "Active User": activeUserValue };

    return newMonthValue;
  };

  const userDataTransform = userData.map(calculateNewMonth);
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="chart">
        <h3 className="chartTitle">User Analytics</h3>
        <div className="chartContainer">
          <VerticalSlider onValueSet={getSliderValue} className="chartSlider" />
          <Chart
            data={userDataTransform}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
        </div>
      </div>
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
