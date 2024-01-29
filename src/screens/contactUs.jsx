import React from 'react'
import Navbar from '../components/navbar'
import { Container, Row, Col, Image, Table } from 'react-bootstrap'
import dpi from '../images/dpi-cropped.jpeg'
import Footer from '../components/footer'

const ContactUs = () => {
  return (
    <>
    <Navbar />
    <div>
    <Row className="blue-back">
                <Col>
                    <Container>
                        <Row style={{marginTop: "10%"}}>
                            <Col md={6}>
                                <Image style={{height: '300px', width: '500px', marginLeft: '15%'}} fluid src={dpi} alt="screen" />
                            </Col>
                            <Col md={6}>
                                <h1 className='white-head-style'>Responsive Design</h1>
                                <h4 className='white-head-style' style={{margin: "10px"}}>Mobile Ready Template</h4>
                                <p className='white-para-style'>Designed and style should work toward making you look good and feel good without a lot of efforts so you can get on with the things that matter</p>

                                <i className="fa-brands fa-youtube white-icon-style"></i>
                                <i className="fa-brands fa-instagram white-icon-style"></i>
                                <i className="fa-brands fa-android white-icon-style"></i>
                                <i className="fa-brands fa-html5 white-icon-style"></i>
                                <i className="fa-brands fa-aws white-icon-style"></i>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        <Container>
            <br/>
            <h1 className='head-style' style={{textAlign: 'center'}}>Contact US</h1>
            <p className='para-style'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br/>
            <p className='para-style'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br/>
            <p className='para-style'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br/>
            <Table bordered hover>
                <tbody>
                    <tr>
                    <td><h5 className='head-style'><strong>Mobile No:</strong> 1234567</h5></td>
                    </tr>
                    <tr>
                    <td><h5 className='head-style'><strong>Email:</strong> abc@abc.com</h5></td>
                    </tr>
                    <tr>
                    <td><h5 className='head-style'><strong>P.O Box:</strong> abc street abc town</h5></td>
                    </tr>
                </tbody>
            </Table>
            <br/><br/>
        </Container>
    </div>
    <Footer />
    </>
  )
}

export default ContactUs
