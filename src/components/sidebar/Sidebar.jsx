import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  MessageOutlined,
  WorkOutline,
  Report,
} from "@mui/icons-material";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/** Dashboard Menu **/}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Home</span>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Analytics</span>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Sales</span>
            </li>
          </ul>
        </div>
        {/** Quick Menu **/}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <PersonOutline />
              <span style={{ paddingLeft: "5px" }}>Users</span>
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Products</span>
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Transactions</span>
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Reports</span>
            </li>
          </ul>
        </div>
        {/** Notifications Menu **/}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MailOutline className="sidebarIcon" />{" "}
              <span style={{ paddingLeft: "5px" }}>Mail</span>
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Feeback</span>
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Messages</span>
            </li>
          </ul>
        </div>
        {/** Staff Menu **/}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <WorkOutline className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Manage</span>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Analytics</span>
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              <span style={{ paddingLeft: "5px" }}>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
