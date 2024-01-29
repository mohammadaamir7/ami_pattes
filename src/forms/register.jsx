import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar'
import { Container, Row, Col, Image } from 'react-bootstrap'
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
import dpi from '../images/dpi-cropped.jpeg'

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


const RegisterForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userRegister = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userRegister

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(register(values.email, values.password, values.firstName, values.lastName, 'client'))
    },
  });

  useEffect(() => {
    if(userInfo){
      navigate('/dashboard')
    }
  }, [userInfo, navigate])

  return (
    <div>
      <Navbar />
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Container>
        <Row>
          <Col md={6}>
            <Image className="vertical-mid" fluid src={dpi} alt="cover"/>
            <br/>

            <div style={{borderBottom: '1px solid black'}}></div>
          </Col>
          <Col md={6}>
            <div className="vertical-mid">
            <h1 className="head-style">Create Your Account</h1>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  style={{margin: '10px 0'}}
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
                  style={{margin: '10px 0'}}
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
                  style={{margin: '10px 0'}}
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="firstName"
                  type="text"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />

                <TextField
                  style={{margin: '10px 0'}}
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="lastName"
                  type="text"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />     
                <Button style={{marginTop: '20px'}} className='rounded-button' size="large" color="primary" variant="contained" type="submit">
                  Create Account
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RegisterForm
