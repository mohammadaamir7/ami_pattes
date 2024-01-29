import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row, Container, Button, Form } from 'react-bootstrap'
import Navbar from '../components/navbar'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loader';
import Footer from '../components/footer'

const ApplicationLayer = () => {
  const [ textData, setTextData ] = useState('')

  const userLogin = useSelector(state => state.userLogin)
  const { loading, userInfo } = userLogin

  const navigate = useNavigate()

  
  useEffect(() => {
    if(!userInfo){
      navigate('/')
    }
  }, [userInfo, navigate])


  const getProtocolData = () => {
    axios.get('https://dummyjson.com/products/1')
      .then(res => setTextData(JSON.stringify(res.data)))
      .catch(err => console.log(err))
  }

  const reset = () => {
    setTextData('')
  }

  return (
    <div>
      <Navbar />
        {loading && <Loader />}
        <Container>
          <Row>
            <h1 className='my-3 head-style'>Application Layer</h1>
            <Col className='my-3'>
              <Button className="brand-style-youtube" onClick={getProtocolData} variant="text"><i className="fa-brands fa-youtube"></i>Youtube</Button>{' '}
              <Button onClick={getProtocolData} className="brand-style-insta" variant="text"><i className="fa-brands fa-instagram"></i>Instagram</Button>{' '}
              <Button className="brand-style-twitter" onClick={getProtocolData} variant="text"><i className="fa-brands fa-twitter"></i>Twitter</Button>{' '}
              <Button onClick={reset} className="brand-style-twitter-reset" color="primary" size="large" variant="outlined">
                  Reset
              </Button>
              <Form>
                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Protocol Response</Form.Label>
                  <Form.Control as="textarea" rows={3} value={textData} />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
        <div style={{position: "fixed", bottom: '0', width: '100%'}}>
            <Footer />            
        </div>
    </div>
  )
}

export default ApplicationLayer
