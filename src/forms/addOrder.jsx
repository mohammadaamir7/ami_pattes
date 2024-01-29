import React, { useEffect } from "react";
import Navbar from "../components/navbar";
// import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader";
import Message from "../components/message";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../style/index.css";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
// import { addOrder } from "../actions/orderActions";
import io from "socket.io-client";
import Divider from '@mui/material/Divider';

const validationSchema = Yup.object().shape({
  pickupUsername: Yup.string("Enter your Name").required("Name Required"),
  pickupEmail: Yup.string("Enter your Email").required("Email Required"),
  pickupCountry: Yup.string("Enter your Country name").required(
    "Country Name Required"
  ),
  pickupCity: Yup.string("Enter your City Name").required("City Name Required"),
  pickupAddress: Yup.string("Enter your Address").required("Address Required"),
  pickupPostalCode: Yup.string("Enter your Postal Code").required(
    "Postal Code Required"
  ),
  pickupCountryCode: Yup.string("Enter your Country Code").required(
    "Country Code Required"
  ),
  pickupPhoneNumber: Yup.string("Enter your Contact Number").required(
    "Contact Number Required"
  ),

  deliveryUsername: Yup.string("Enter your Name").required("Name Required"),
  deliveryEmail: Yup.string("Enter your Email").required("Email Required"),
  deliveryCountry: Yup.string("Enter your Country name").required(
    "Country Name Required"
  ),
  deliveryCity: Yup.string("Enter your City Name").required("City Name Required"),
  deliveryAddress: Yup.string("Enter your Address").required("Address Required"),
  deliveryPostalCode: Yup.string("Enter your Postal Code").required(
    "Postal Code Required"
  ),
  deliveryCountryCode: Yup.string("Enter your Country Code").required(
    "Country Code Required"
  ),
  deliveryPhoneNumber: Yup.string("Enter your Contact Number").required(
    "Contact Number Required"
  ),

  contentDetails: Yup.string("Enter Content Details").required("Content Details Required"),
  packageDescription: Yup.string("Enter Package Description").required("Description Required"),
  packageWeight: Yup.string("Enter Package's Weight").required(
    "Package's Weight Required"
  ),
  pacakageLength: Yup.string("Enter Package's Weight").required("Package's Weight Name Required"),
  packageWidth: Yup.string("Enter Package's Width").required("Package's Width Required"),
});


const AddOrderForm = () => {
  const socket = io(`${process.env.REACT_APP_BACKEND_URL}`);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.on("add-order", (data) => {
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  // const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userLogin);
  const { loading, error } = userRegister;

  const formik = useFormik({
    initialValues: {
      pickupUsername: "",
      pickupEmail: "",
      pickupAddress: "",
      pickupCountry: "",
      pickupCity: "",
      pickupPostalCode: 0,
      pickupCountryCode: "",
      pickupPhoneNumber: "",
      deliveryUsername: "",
      deliveryEmail: "",
      deliveryAddress: "",
      deliveryCountry: "",
      deliveryCity: "",
      deliveryPostalCode: 0,
      deliveryCountryCode: "",
      deliveryPhoneNumber: "",
      contentDetails: "",
      packageDescription: "",
      packageWeight: "",
      packageWidth: "",
      pacakageLength: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.phoneNumber);
      var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      // if (re.test(values.phoneNumber)) {
        socket.emit("add-order", { ...values });
        // values.address,
        //   values.country,
        //   values.city,
        //   values.postalCode,
        //   values.countryCode,
        //   values.phoneNumber;
      // } else {
      //   alert("Enter a valid Contact Number");
      // }
    },
  });

  return (
    <div>
      <Navbar />
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Box>
        <Grid container justifyContent="center" alignItems="center">
          <div className="form-border">
            <div className="form-content">
              <h1 style={{textAlign: "center"}} className="head-style-driver">Add a New Order</h1>
              <br/><br/>
              <form onSubmit={formik.handleSubmit}>
                <h5 className="head-style">Pickup Details</h5>
                <TextField
                  className="text-field"
                  fullWidth
                  id="pickupUsername"
                  name="pickupUsername"
                  label="Username"
                  value={formik.values.pickupUsername}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pickupUsername && Boolean(formik.errors.pickupUsername)
                  }
                  helperText={formik.touched.pickupUsername && formik.errors.pickupUsername}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="pickupEmail"
                  name="pickupEmail"
                  label="Email"
                  type="email"
                  value={formik.values.pickupEmail}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pickupEmail && Boolean(formik.errors.pickupEmail)
                  }
                  helperText={formik.touched.pickupEmail && formik.errors.pickupEmail}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="pickupAddress"
                  name="pickupAddress"
                  label="Pickup Address"
                  value={formik.values.pickupAddress}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pickupAddress && Boolean(formik.errors.pickupAddress)
                  }
                  helperText={formik.touched.pickupAddress && formik.errors.pickupAddress}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="pickupCountry"
                  name="pickupCountry"
                  label="Pickup Country"
                  type="text"
                  value={formik.values.pickupCountry}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pickupCountry && Boolean(formik.errors.pickupCountry)
                  }
                  helperText={formik.touched.pickupCountry && formik.errors.pickupCountry}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="pickupCity"
                  name="pickupCity"
                  label="Pickup City"
                  type="text"
                  value={formik.values.pickupCity}
                  onChange={formik.handleChange}
                  error={formik.touched.pickupCity && Boolean(formik.errors.pickupCity)}
                  helperText={formik.touched.pickupCity && formik.errors.pickupCity}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="pickupPostalCode"
                  name="pickupPostalCode"
                  label="Pickup Postal Code"
                  type="number"
                  value={formik.values.pickupPostalCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pickupPostalCode &&
                    Boolean(formik.errors.pickupPostalCode)
                  }
                  helperText={
                    formik.touched.pickupPostalCode && formik.errors.pickupPostalCode
                  }
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="pickupCountryCode"
                  name="pickupCountryCode"
                  label="Pickup Country Code"
                  type="text"
                  value={formik.values.pickupCountryCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pickupCountryCode &&
                    Boolean(formik.errors.pickupCountryCode)
                  }
                  helperText={
                    formik.touched.pickupCountryCode && formik.errors.pickupCountryCode
                  }
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="pickupPhoneNumber"
                  name="pickupPhoneNumber"
                  label="Contact Number without country code"
                  type="tel"
                  value={formik.values.pickupPhoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pickupPhoneNumber &&
                    Boolean(formik.errors.pickupPhoneNumber)
                  }
                  helperText={
                    formik.touched.pickupPhoneNumber && formik.errors.pickupPhoneNumber
                  }
                />
                <br /><br />
                <Divider variant="middle" />
                <br />
                <h5 className="head-style">Delivery Details</h5>
                <TextField
                  className="text-field"
                  fullWidth
                  id="deliveryUsername"
                  name="deliveryUsername"
                  label="Username"
                  value={formik.values.deliveryUsername}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.deliveryUsername && Boolean(formik.errors.deliveryUsername)
                  }
                  helperText={formik.touched.deliveryUsername && formik.errors.deliveryUsername}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="deliveryEmail"
                  name="deliveryEmail"
                  label="Email"
                  type="email"
                  value={formik.values.deliveryEmail}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.deliveryEmail && Boolean(formik.errors.deliveryEmail)
                  }
                  helperText={formik.touched.deliveryEmail && formik.errors.deliveryEmail}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="deliveryAddress"
                  name="deliveryAddress"
                  label="Delivery Address"
                  value={formik.values.deliveryAddress}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.deliveryAddress && Boolean(formik.errors.deliveryAddress)
                  }
                  helperText={formik.touched.deliveryAddress && formik.errors.deliveryAddress}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="deliveryCountry"
                  name="deliveryCountry"
                  label="Delivery Country"
                  type="text"
                  value={formik.values.deliveryCountry}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.deliveryCountry && Boolean(formik.errors.deliveryCountry)
                  }
                  helperText={formik.touched.deliveryCountry && formik.errors.deliveryCountry}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="deliveryCity"
                  name="deliveryCity"
                  label="Delivery City"
                  type="text"
                  value={formik.values.deliveryCity}
                  onChange={formik.handleChange}
                  error={formik.touched.deliveryCity && Boolean(formik.errors.deliveryCity)}
                  helperText={formik.touched.deliveryCity && formik.errors.deliveryCity}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="deliveryPostalCode"
                  name="deliveryPostalCode"
                  label="Delivery Postal Code"
                  type="number"
                  value={formik.values.deliveryPostalCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.deliveryPostalCode &&
                    Boolean(formik.errors.deliveryPostalCode)
                  }
                  helperText={
                    formik.touched.deliveryPostalCode && formik.errors.deliveryPostalCode
                  }
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="deliveryCountryCode"
                  name="deliveryCountryCode"
                  label="Delivery Country Code"
                  type="text"
                  value={formik.values.deliveryCountryCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.deliveryCountryCode &&
                    Boolean(formik.errors.deliveryCountryCode)
                  }
                  helperText={
                    formik.touched.deliveryCountryCode && formik.errors.deliveryCountryCode
                  }
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="deliveryPhoneNumber"
                  name="deliveryPhoneNumber"
                  label="Contact Number without country code"
                  type="tel"
                  value={formik.values.deliveryPhoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.deliveryPhoneNumber &&
                    Boolean(formik.errors.deliveryPhoneNumber)
                  }
                  helperText={
                    formik.touched.deliveryPhoneNumber && formik.errors.deliveryPhoneNumber
                  }
                />
                <br /><br />
                <Divider variant="middle" />
                <br />
                <h5 className="head-style">Package Details</h5>
                <TextField
                  className="text-field"
                  fullWidth
                  id="contentDetails"
                  name="contentDetails"
                  label="Content Details"
                  value={formik.values.contentDetails}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contentDetails && Boolean(formik.errors.contentDetails)
                  }
                  helperText={formik.touched.contentDetails && formik.errors.contentDetails}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="packageDescription"
                  name="packageDescription"
                  label="Description"
                  type="text"
                  value={formik.values.packageDescription}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.packageDescription && Boolean(formik.errors.packageDescription)
                  }
                  helperText={formik.touched.packageDescription && formik.errors.packageDescription}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="pacakageLength"
                  name="pacakageLength"
                  label="Package Length"
                  value={formik.values.pacakageLength}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.pacakageLength && Boolean(formik.errors.pacakageLength)
                  }
                  helperText={formik.touched.pacakageLength && formik.errors.pacakageLength}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="packageWidth"
                  name="packageWidth"
                  label="Package Width"
                  type="text"
                  value={formik.values.packageWidth}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.packageWidth && Boolean(formik.errors.packageWidth)
                  }
                  helperText={formik.touched.packageWidth && formik.errors.packageWidth}
                />
                <TextField
                  className="text-field"
                  fullWidth
                  id="packageWeight"
                  name="packageWeight"
                  label="Package Weight"
                  type="text"
                  value={formik.values.packageWeight}
                  onChange={formik.handleChange}
                  error={formik.touched.packageWeight && Boolean(formik.errors.packageWeight)}
                  helperText={formik.touched.packageWeight && formik.errors.packageWeight}
                />
                
                <br />
                <Button
                  style={{ marginTop: "20px" }}
                  className="rounded-button"
                  size="large"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Add Order
                </Button>
              </form>
            </div>
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default AddOrderForm;
