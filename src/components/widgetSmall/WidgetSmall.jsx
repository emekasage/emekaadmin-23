import React from "react";
import "./widgetsmall.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSmall() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://www.linkpicture.com/q/IMG_20211030_124919.jpg"
            alt="member_photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Emeka Ikele</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://www.linkpicture.com/q/IMG_20211030_124919.jpg"
            alt="member_photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Emeka Ikele</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://www.linkpicture.com/q/IMG_20211030_124919.jpg"
            alt="member_photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Emeka Ikele</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://www.linkpicture.com/q/IMG_20211030_124919.jpg"
            alt="member_photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Emeka Ikele</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
