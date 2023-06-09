import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const SimulateTheRide = () => {
  const [ticket, setticket] = useState("");
  const isNonMobile = useMediaQuery("(min-width:600px)");
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

  const handleFormSubmit = (values) => {
    // confirm("changed");

    console.log(values);
    fetch("http://localhost:3000/api/v1/user/ride/simulate/start", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        token: `session_token=${localStorage.getItem("session_token")}`,
      },
      body: JSON.stringify({
        ticket_id: ticket,
      }),
    })
      .then((data) => {
       const  {status} = data
       console.log(status);
        // console.log(("meme"),data);
        if (status === 200) {
          confirm("Ride sTARTED !");
        } else if (status=== 401) {
          notify("Ticket ID is required");
        } else if (status === 402) {
          notify("Invalid Ticket");
        } else if (status === 403) {
          notify("Ride already started/ended!");
        } else if (status === 404) {
          notify("Could not find the Ride in the Database");
        }
      })
      .catch((error) => console.error(error));
    fetch("http://localhost:3000/api/v1/user/ride/simulate/end", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        token: `session_token=${localStorage.getItem("session_token")}`,
      },
      body: JSON.stringify({
        ticket_id: ticket,
      }),
    })
      .then((data) => {
       const  {status} = data

        if (status === 200) {
          confirm("Ride Ended/Ticket used and Database updated!");
        } else if (status === 401) {
          notify("Ticket ID is required");
        } else if (status === 402) {
          notify("Invalid Ticket");
        } else if (status === 403) {
          notify("Ride has not started yet or has already ended!");
        } else if (status === 404) {
          notify("Could not find the Ride in the Database");
        }
      })
      .catch((error) => console.error(error));
  };
  const handleButtonClick = () => {
    window.location.href = "http://localhost:3001/";
  };

  return (
    <Box m="20px">
      <Header title="Ride Simulation" subtitle="Simulate your ride here !" />

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
                type="ticketID"
                label="Ticket ID "
                onChange={(event) => setticket(event.target.value)}
                onBlur={handleBlur}
                name="ticketID"
                error={!!touched.ticketID && !!errors.ticketID}
                helperText={touched.ticketID && errors.ticketID}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                style={{ margin: "0 auto" }}
                onClick={handleFormSubmit}
              >
                Start tht RIDE
              </Button>
              <Link to="http://localhost:3001/">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleButtonClick}
                  style={{ margin: "0 auto" }}
                >
                  Show on Map
                </Button>
              </Link>
            </Box>
          </form>
        )}
      </Formik>
      <ToastContainer />
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  ticketID: yup.string().required("required"),
  newticketID: yup
    .string()
    .min(8, "ticketID must be at least 8 characters long")
    .required("required"),
  newticketID2: yup
    .string()
    .oneOf([yup.ref("newticketID"), null], "ticketIDs must match")
    .required("required"),
});
const initialValues = {
  ticketID: "",
};

export default SimulateTheRide;
