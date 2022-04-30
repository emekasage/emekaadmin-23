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
        <li className="widgetSmListItem">
          <img
            src="https://www.looper.com/img/gallery/the-arya-stark-scene-in-game-of-thrones-that-went-too-far/l-intro-1624387916.jpg"
            alt="member_photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Arya Stark</span>
            <span className="widgetSmUserTitle">Many-faced God</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i1.sndcdn.com/artworks-8oF8tjvyjmdyWUGE-jLCOpw-t500x500.jpg"
            alt="member_photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Daenerys Targaryen</span>
            <span className="widgetSmUserTitle">Queen of Meereen</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://helios-i.mashable.com/imagery/articles/01L7RQ0LXBIAdytXWcjAqMr/hero-image.fill.size_1200x1200.v1611609750.jpg"
            alt="member_photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jon Snow</span>
            <span className="widgetSmUserTitle">King in the North</span>
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
