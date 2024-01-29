import React from 'react'
import Navbar from '../components/navbar'
// import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Loader from '../components/loader';
import Message from '../components/message';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../style/index.css'
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const validationSchema = Yup.object().shape({

  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password Required'),
  firstName: Yup.string('Enter your FirstName')
    .required('First Name Required'),
  lastName: Yup.string('Enter your Last Name')
    .required('last Name Required'),
  email: Yup.string('Enter your email').email('Invalid email').required('Email Required'),

});


const RegisterDriverForm = () => {

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userLogin)
  const { loading, error } = userRegister

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(register(values.email, values.password, values.firstName, values.lastName, 'driver'))
    },
  });


  return (
    <div>
      <Navbar />
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Box>
        <Grid container justifyContent="center" alignItems="center">
            <div className='form-border'>
              <div className='form-content'>
                <h1 className="head-style-driver">Create a New Driver's Account</h1>
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    className='text-field'
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />

                  <TextField
                    className='text-field'
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />

                  <TextField
                    className='text-field'
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    type="text"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                  />

                  <TextField
                    className='text-field'
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                  />
                  <br/>     
                  <Button style={{marginTop: '20px'}} className='rounded-button' size="large" color="primary" variant="contained" type="submit">
                    Register Driver
                  </Button>
                </form>
              </div>
            </div>
          </Grid>
      </Box>
    </div>
  )
}

export default RegisterDriverForm
