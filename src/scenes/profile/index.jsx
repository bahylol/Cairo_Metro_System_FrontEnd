import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import React, { useEffect, useState } from "react";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const [data, setuserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // let response
      //  let x
      try {
        const response = await fetch("http://localhost:3000/get_cur_user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `session_token=${localStorage.getItem("session_token")}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setuserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const birth = data.birthdate
console.log(birth);

  return (
    <Box m="20px">
      <Header title="User Profile" subtitle="Wellcom Back !!" />

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
                type="text"
                label={data.username}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
                            InputProps={{ readOnly: true }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={data.username}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
                InputProps={{ readOnly: true }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={data.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
                InputProps={{ readOnly: true }}
              />

              <TextField
                fullWidth
                variant="filled"
                // type="date"
                label={
                  // data.birthdate.length > 10
                  //   ? data.birthdate.slice(0, 10)
                  //   :
                  birth
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.birthdate}
                name="birthdate"
                error={!!touched.birthdate && !!errors.birthdate}
                helperText={touched.birthdate && errors.birthdate}
                sx={{ gridColumn: "span 5" }}
                InputProps={{ readOnly: true }}
              />

              <FormControl fullWidth variant="filled">
                <InputLabel id="gender-label">
                  {data.gender === "M" ? "Male" : "Female"}
                </InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender-select"
                  value={values.gender}
                  name="gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.gender && !!errors.gender}
                  helperText={touched.gender && errors.gender}
                  InputProps={{ readOnly: true }}
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                </Select>{" "}
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                // type="date"
                label={
                  // data.birthdate.length > 10
                  //   ? data.birthdate.slice(0, 10)
                  //   :
                  data.userrole
                }
                name="userrole"
                sx={{ gridColumn: "span 2" }}
                InputProps={{ readOnly: true }}
                />
                 <TextField
                fullWidth
                variant="filled"
                // type="date"
                label={
                  // data.birthdate.length > 10
                  //   ? data.birthdate.slice(0, 10)
                  //   :
                  data.usertype
                }
                name="usertype"
                sx={{ gridColumn: "span 2" }}
                InputProps={{ readOnly: true }}
                />
            


              <TextField
                fullWidth
                variant="filled"
                type="number"
                // label="birthdate"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ssn}
                name="ssn"
                label={data.ssn}
                error={!!touched.ssn && !!errors.ssn}
                helperText={touched.ssn && errors.ssn}
                sx={{ gridColumn: "span 4" }}
                InputProps={{ readOnly: true }}
              />
            </Box>
          
          </form>
        )}
      </Formik>
    </Box>
  );
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  contact: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
console.log("lvfjhsljdn");
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  Password: "",
  birthdate: "",
  gender: "",
  age: "",
  ssn: "",
  type: "",
  role: "",
};

export default Form;
