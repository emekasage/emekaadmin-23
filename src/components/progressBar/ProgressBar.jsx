import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar(sliderValue) {
  //   const percentage = 66;
  //   const [percentage, setPercentage] = useState(1);

  //   const handleChange = (event, newValue) => {
  //     setPercentage(newValue);
  //     console.log(newValue);
  //   };
  //   console.log(JSON.stringify(sliderValue));
  return (
    <div>
      <Example label="Default">
        <CircularProgressbar
          value={sliderValue.sliderValue}
          text={`${sliderValue.sliderValue}%`}
        />
      </Example>
    </div>
  );
  function Example(props) {
    return (
      <div style={{ marginBottom: 20 }}>
        {/* <hr style={{ border: "2px solid #ddd" }} /> */}
        <div style={{ marginTop: 20, display: "flex" }}>
          <div style={{ width: "100%", paddingRight: 20 }}>
            {props.children}
          </div>
        </div>
      </div>
    );
  }
}
