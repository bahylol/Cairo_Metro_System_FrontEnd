import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect, useRef } from 'react';

const CreateRoute = () => {
  let [stations, setStations] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
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

  useEffect(() => {
    const getStations = async () => {
      try {
        const response = await fetch('http://localhost:3000/getAll/Stations', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        stations = data.map((item) => item);
        console.log(stations);
        const allStations = stations.map(({ description: label, ...rest }) => ({
          label,
          ...rest
        }));
        setStations(allStations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getStations();
  }, []);

  const handleFormSubmit = (values) => {
    if (origin === '' || destination === '') {
			notify('Please enter origin and destination');
      return;
		}
    fetch("http://localhost:3000/route", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        token: `session_token=${localStorage.getItem("session_token")}`,
      },
      body: JSON.stringify({
        origin: origin.label,
        destination: destination.label,
        name: values.name1,
      }),
    })
      .then((data) => {
        const { status } = data;
        if (status === 200) confirm("Route Created !!");
        else if (status === 401) notify("Error you are not an admin");
        else if (status === 402) notify("This route already exists");
        else if (status === 403) notify("This origin station does not exist");
        else if (status === 404)
          notify("This destination station does not exist");
        else if (status === 405)
          notify("You Can't add an edge between the same nodes");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box m="20px">
      <Header title="Create Route" subtitle="Create your Route here !" />

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
              <Autocomplete
                disablePortal
                className="GTBoxFrom"
                options={stations}
                value={origin}
                onChange={(event, newValue) => {
                  setOrigin(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Origin" />}
              />
              <Autocomplete
                disablePortal
                className="GTBoxFrom"
                options={stations}
                value={destination}
                onChange={(event, newValue) => {
                  setDestination(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Destination" />}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Route Name"
                onBlur={handleBlur}
                onChange={handleChange}
                name="name1"
                error={!!touched.name1 && !!errors.name1}
                helperText={touched.name1 && errors.name1}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={(values) => handleSubmit(values)}
                style={{ margin: "0 auto" }}
              >
                Update origin
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
  name1: yup.string().required("required"),
});
const initialValues = {
  name1: "",
};

export default CreateRoute;
