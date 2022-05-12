import React, { useState } from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../DummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import VerticalSlider from "../../components/slider/Slider";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function Home() {
  const [sliderValue, setSliderValue] = useState(1);
  const getSliderValue = (value) => {
    setSliderValue(value);
  };

  console.log(sliderValue);

  const calculateNewMonth = (month) => {
    const activeUserValue = sliderValue * month["Active User"];
    const newMonthValue = { ...month, "Active User": activeUserValue };

    return newMonthValue;
  };

  const userDataTransform = userData.map(calculateNewMonth);
  // console.log(userDataTransform);

  // const first = "3";

  // const second = 5;

  // const third = 8;

  // console.log(first + second + third);

  // console.log(second + first + third);

  // console.log(second + third + first);

  // console.log(typeof (first + second));
  // console.log(typeof (+first + second));
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="itemsContainer">
        <VerticalSlider onValueSet={getSliderValue} className="chartSlider" />
        <div className="chart">
          <h3 className="chartTitle">User Analytics</h3>

          <Chart
            data={userDataTransform}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
        </div>
        <ProgressBar sliderValue={sliderValue} />
      </div>
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
