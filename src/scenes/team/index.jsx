import { Box, Typography, useTheme } from "@mui/material";
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}
const Team = () => {
  // fetch('http://localhost:3000/api/v1/users/get_all_users', {
  // 		method: 'POST',
  // 		headers: {
  // 			'Content-Type': 'application/json',
  // 		},
  // 		body: JSON.stringify({
  // 			username: user.username,
  // 			email: user.email,
  // 			password: user.password,
  // 			birthdate: user.date,
  // 			gender: gender,
  // 			phone: user.phone,
  // 			ssn: user.ssn,
  // 			usertype: 'normal',
  // 			userrole: 'user',
  // 		}),
  // 	})
  const [data, setuserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // let response
    //  let x
     try {
      const response = await fetch('http://localhost:3000/get_all_users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          token: `session_token=${localStorage.getItem('session_token')}`,
        },
      });
      const data = await response.json();
      setuserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
    fetchData();
  }, []);
console.log(data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "user_id", headerName: "ID" }, // field is the name in DB header name the one for FE
    {
      field: "username",
      headerName: "Name",
      flex: 1, // for big fiels
      cellClassName: "name-column--cell", // to customise the col
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left", //to make the number on the left
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
      field: "userrole",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { userrole } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              userrole === "admin"
                ? colors.greenAccent[600]
                : userrole === "superadmin"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {userrole === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {userrole === "superadmin" && <SecurityOutlinedIcon />}
            {userrole === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {userrole}
            </Typography>
          </Box>
        );
      },
    },
  ];
  const getRowId = (row) => row.user_id; // Return 'user_id' as the row identifier

  return (
    <Box m="20px">
      {/* ///acting wired  */}
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="20px 0 0 0"
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
        }}
      >
        {/* <div>lol
          <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        </div> */}
        {/* <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
              {/* <DataGrid rows={rows} columns={columns} /> */}

        <DataGrid
          checkboxSelection
          rows={data}
          columns={columns}
          getRowId={getRowId}
          components={{ Toolbar: CustomToolbar }}
        />
      </Box>
    </Box>
  );
};
export default Team;
