import React from 'react'
import dpi from '../images/dpi-cropped.jpeg'
import hec from '../images/hec-logo.jpeg'
import nccs from '../images/nccs.jpeg'
import { Container, Col, Row } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Footer = () => {
  return (
    <div className='landing-back-footer'>
        <Container>
            <Row>
                <h1 className='white-head-style' style={{textAlign: 'center'}}>Sample Heading</h1>
            </Row>
            <Row>
                <Col md={4} style={{marginTop: "5%"}}>
                    <Card sx={{ maxWidth: 375 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={hec}
                            alt="green iguana"
                        />
                        
                    </Card>
                </Col>
                <Col md={4} style={{marginTop: "5%"}}>
                    <Card sx={{ maxWidth: 375 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={dpi}
                            alt="green iguana"
                        />
                        
                    </Card>
                </Col>
                <Col md={4} style={{marginTop: "5%"}}>
                    <Card sx={{ maxWidth: 375 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={nccs}
                            alt="green iguana"
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer
