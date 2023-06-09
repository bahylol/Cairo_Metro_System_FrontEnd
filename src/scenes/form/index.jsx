import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.firstName,
        email: values.email,
        password: values.Password,
        birthdate: values.birthdate,
        phone: values.contact,
        gender: values.gender,
        ssn: values.ssn,
        usertype: values.type,
        userrole: values.role,
      }),
    })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

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
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Password}
                name="Password"
                error={!!touched.Password && !!errors.Password}
                helperText={touched.Password && errors.Password}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="date"
                // label="birthdate"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.birthdate}
                name="birthdate"
                error={!!touched.birthdate && !!errors.birthdate}
                helperText={touched.birthdate && errors.birthdate}
                sx={{ gridColumn: "span 5" }}
              />
              <FormControl fullWidth variant="filled">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender-select"
                  value={values.gender}
                  name="gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.gender && !!errors.gender}
                  helperText={touched.gender && errors.gender}
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                </Select>{" "}
              </FormControl>

              <FormControl fullWidth variant="filled">
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="type-select"
                  value={values.type}
                  name="type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.type && !!errors.type}
                  helperText={touched.type && errors.type}
                >
                  <MenuItem value="normal">Normal</MenuItem>
                  <MenuItem value="senior">Senior</MenuItem>
                </Select>{" "}
              </FormControl>

              <FormControl fullWidth variant="filled">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role-select"
                  value={values.role}
                  name="role"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.role && !!errors.role}
                  helperText={touched.role && errors.role}
                >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="superadmin">Superadmin</MenuItem>
                </Select>{" "}
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="number"
                // label="birthdate"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ssn}
                name="ssn"
                label="ssn"
                error={!!touched.ssn && !!errors.ssn}
                helperText={touched.ssn && errors.ssn}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
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
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  Password: yup.string().required("required"),
  gender: yup.string().required("required"),
  birthdate: yup.string().required("required"),
  age: yup.string().required("required"),
  ssn: yup.string().required("required"),
  type: yup.string().required("required"),
  role: yup.string().required("required"),
});
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
