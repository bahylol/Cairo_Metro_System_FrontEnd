import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }
  const [data, setuserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // let response
      //  let x
      try {
        const response = await fetch("http://localhost:3000/get_all_users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `session_token=${localStorage.getItem("session_token")}`,
          },
        });
        const data = await response.json();
        setuserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  const columns = [
    { field: "user_id", headerName: "ID", flex: 0.5 },
    {
      field: "username",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },
    {
      field: "ssn",
      headerName: "SSN",
      flex: 1,
    },
    {
      field: "usertype",
      headerName: "Type",
      flex: 1,
    },
  ];
  const getRowId = (row) => row.user_id; // Return 'user_id' as the row identifier

  return (
    <Box m="20px">
      {/* acting wierd  */}
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={getRowId}
          components={{ Toolbar: CustomToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
