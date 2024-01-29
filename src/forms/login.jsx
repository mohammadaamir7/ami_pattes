import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'
import Navbar from '../components/navbar'
// import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
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
    .required('Password Required'),
  email: Yup.string('Enter your email').email('Invalid email').required('Email Required'),

});

const LoginForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(login(values.email, values.password))
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
              <h1 className='head-style'>Welcome Back</h1><br/>
              <p className='para-style'>To keep connected with us please login with your personal information by email address and password</p>
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
                <Button className='rounded-button' color="primary" size="large" variant="contained" type="submit">
                  Login Account
                </Button>
                <Button onClick={() => {navigate('/register')}} className='rounded-button-outlined' color="primary" size="large" variant="outlined" type="submit">
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

export default LoginForm
