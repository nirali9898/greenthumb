import { Box, Typography } from "@mui/material";
/* Removed DataGrid import for simplification */

import axios from "axios";
import React, { useEffect, useState } from "react";

export const HordingList = () => {
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "status", headerName: "Status", width: 150 },
    ];

    const [hordings, sethordings] = useState([])

    const getAllHordings = async()=>{

        const res = await axios.get("/hording/all")
        sethordings(res.data.data)


    }
    useEffect(() => {
      
    
      getAllHordings()
    }, [])
    

//   const columns = [
//     {
//       field: "id",
//       headerName: "ID",
//       width: 90,
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 150,
//     },
//     {
//       field: "city",
//       headerName: "City",
//       width: 150,
//     },
//     {
//       field: "location",
//       headerName: "Location",
//       width: 150,
//     },
//     {
//       field: "size",
//       headerName: "Size",
//       width: 150,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       width: 150,
//     },

//     {
//       field: "status",
//       headerName: "Status",
//       width: 150,
//     },
//   ];

//   //why karachi??
//   const rows = [
//     {
//       id: 1,
//       name: "Hording 1",
//       city: "Ahmedabad",
//       location: "Near Airport",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//     {
//       id: 2,
//       name: "Hording 22",
//       city: "Ahmedabad",
//       location: "Paldi",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//     {
//       id: 3,
//       name: "Hording 3",
//       city: "Ahmedabad",
//       location: "Bopal",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//     {
//       id: 4,
//       name: "Hording 4",
//       city: "Ahmedabad",
//       location: "Near Airport",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//     {
//       id: 5,
//       name: "Hording 5",
//       city: "Ahmedabad",
//       location: "Near Airport",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//   ];

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>Hording List</h2>
        <p>This is a simplified version of the Hording List component.</p>
      </div>

    </div>
  );
};
