
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DeleteRoute = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const confirm = (alert) => {
    toast.success(alert, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const notify = (alert) => {
    toast.error(alert, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    fetch("http://localhost:3000/route", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        token: `session_token=${localStorage.getItem("session_token")}`,
      },
      body: JSON.stringify({
        origin: values.origin1,
        destination: values.destination1,
      }),
    })
      .then((data) => {
        const { status } = data;
        if (status === 200) confirm("Route Deleted  !!");
        else if (status === 401) notify("Error you are not an admin");
        else if (status === 402) notify("This route does not exist");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box m="20px">
      <Header title="Delete Route" subtitle="Delete your Route here !" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                label="origin"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.origin1}
                name="origin1"
                error={!!touched.origin1 && !!errors.origin1}
                helperText={touched.origin1 && errors.origin1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="destination"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.destination1}
                name="destination1"
                error={!!touched.destination1 && !!errors.destination1}
                helperText={touched.destination1 && errors.destination1}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                style={{ margin: "0 auto" }}
              >
                Update origin1
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <ToastContainer />
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  origin1: yup.string().required("required"),
  destination1: yup.string().required("required"),
});
const initialValues = {
  origin1: "",
  destination1: "",
};

export default DeleteRoute;






// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import * as React from 'react';
// import Autocomplete from '@mui/material/Autocomplete';
// import { useState, useEffect, useRef } from 'react';

// const DeleteRoute = () => {
//   let [stations, setStations] = useState([]);
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   const confirm = (alert) => {
//     toast.success(alert, {
//       position: "top-center",
//       autoClose: 2500,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//     });
//   };
//   const notify = (alert) => {
//     toast.error(alert, {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//     });
//   };

//   useEffect(() => {
//     const getStations = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/getAll/Stations', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const data = await response.json();
//         stations = data.map((item) => item);
//         console.log(stations);
//         const allStations = stations.map(({ description: label, ...rest }) => ({
//           label,
//           ...rest
//         }));
//         setStations(allStations);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     getStations();
//   }, []);

//   const handleFormSubmit = (values) => {
//     if (origin === '' || destination === '') {
//       notify('Please enter origin and destination');
//       return;
//     }
//     console.log(values);
//     fetch("http://localhost:3000/route", {
//       method: "delete",
//       headers: {
//         "Content-Type": "application/json",
//         token: `session_token=${localStorage.getItem("session_token")}`,
//       },
//       body: JSON.stringify({
//         origin: origin.label,
//         destination: destination.label,
//       }),
//     })
//       .then((data) => {
//         const { status } = data;
//         if (status === 200) confirm("Route Deleted  !!");
//         else if (status === 401) notify("Error you are not an admin");
//         else if (status === 402) notify("This route does not exist");
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <Box m="20px">
//       <Header title="Delete Route" subtitle="Delete your Route here !" />

//       <Formik
//         onSubmit={handleFormSubmit}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <Autocomplete
//                 disablePortal
//                 className="GTBoxFrom"
//                 options={stations}
//                 value={origin}
//                 onChange={(event, newValue) => {
//                   setOrigin(newValue);
//                 }}
//                 renderInput={(params) => <TextField {...params} label="Origin" />}
//               />
//               <Autocomplete
//                 disablePortal
//                 className="GTBoxFrom"
//                 options={stations}
//                 value={destination}
//                 onChange={(event, newValue) => {
//                   setDestination(newValue);
//                 }}
//                 renderInput={(params) => <TextField {...params} label="Destination" />}
//               />
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button
//                 type="submit"
//                 color="secondary"
//                 variant="contained"
//                 style={{ margin: "0 auto" }}
//               >
//                 Update origin1
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//       <ToastContainer />
//     </Box>
//   );
// };

// export default DeleteRoute;
