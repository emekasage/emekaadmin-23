import React from "react";
import "./widgetlarge.css";

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.linkpicture.com/q/IMG_20211030_124919.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Chuck Bazz</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i1.sndcdn.com/artworks-8oF8tjvyjmdyWUGE-jLCOpw-t500x500.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Daenerys Targaryen</span>
          </td>
          <td className="widgetLgDate">1 may 2021</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://helios-i.mashable.com/imagery/articles/01L7RQ0LXBIAdytXWcjAqMr/hero-image.fill.size_1200x1200.v1611609750.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jon Snow</span>
          </td>
          <td className="widgetLgDate">5 Aug 2021</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.looper.com/img/gallery/the-arya-stark-scene-in-game-of-thrones-that-went-too-far/l-intro-1624387916.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Arya Stark</span>
          </td>
          <td className="widgetLgDate">14 Mar 2021</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
