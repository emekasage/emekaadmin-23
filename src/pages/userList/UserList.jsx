import React, { useState } from "react";
import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../DummyData";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="profil" />
          {params.row.username}
        </div>
      ),
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Staus",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="userListDelete"
            onClick={() => {
              handleDelete(params.row.id);
            }}
          />
        </>
      ),
    },
  ];

  return (
    <div className="userList">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
