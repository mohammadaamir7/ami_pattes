import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, register } from '../actions/userActions';
import Loader from '../components/loader';
import Message from '../components/message';
import Navbar from '../components/navbar'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { USER_UPDATE_PROFILE_RESET, USER_UPDATE_RESET } from '../constants/userConstants';
import { updateUserProfile } from '../actions/userActions';
import Reception from '../images/reception.jpg'
import dpi from '../images/dpi.jpeg'

const validationSchema = Yup.object().shape({
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length'),
  firstName: Yup.string('Enter your FirstName'),
    
  lastName: Yup.string('Enter your Last Name'),
    
  email: Yup.string('Enter your email').email('Invalid email')
});


const UpdateForm = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [message, setMessage] = useState(null)


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile
  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    } else {
      if (!user || !user.firstName || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails())
      } else {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
      }
    }
  }, [dispatch, user, navigate])

  const formik = useFormik({
    initialValues: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        values.firstName = firstName
        values.email = email
        values.password = password
        values.lastName = lastName
        dispatch(updateUserProfile({ firstName, lastName, email, password }))
        navigate('/profile')
    },
  });
  return (
    <div>
      {error && <Message variant='danger'>{error}</Message>}
      {message && <Message variant='danger'>{message}</Message>}
      {loading && <Loader />}
      <Navbar />
      <Container>
        <Row>
            <Col md={6}>
                <Image className="vertical-mid" fluid src={dpi} alt="cover"/>
                <br/>

                <div style={{borderBottom: '1px solid black'}}></div>
            </Col>
          <Col md={6}>
            <h1 className='head-style vertical-mid'>Update Profile</h1>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  style={{margin: '10px 0'}}
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                  style={{margin: '10px 0'}}
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="firstName"
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />

                <TextField
                  style={{margin: '10px 0'}}
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" type="submit">
                  Update Profile
                </Button>
              </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UpdateForm
