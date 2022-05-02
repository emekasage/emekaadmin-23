import React from "react";
import "./newproduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductFormItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductFormItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductFormItem">
          <label>Stock</label>
          <input type="text" placeholder="257" />
        </div>
        <div className="addProductFormItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
