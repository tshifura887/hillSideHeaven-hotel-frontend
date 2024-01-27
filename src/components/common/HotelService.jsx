import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import { FaClock, FaCocktail, FaParking, FaSnowflake, FaTshirt, FaUtensils, FaWifi } from 'react-icons/fa'

const HotelService = () => {
  return (
    <>
      <Container className='mb-2'>
        <Header title={"Our Services"}/>
        <Row>
          <h4 className='test-center mt-3'>
            Services at our <span className='hotel-color'>HillSide Heaven - </span> Hotel
            <span className='gap-2'>
              <FaClock/> - 24-Hour Front Desk
            </span>
          </h4>
        </Row>
        <hr/>

        <Row xs={1} md={2} ls={3} className='q-4 mt-2'>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='hotel-color'>
                  <FaWifi/> WiFi
                </Card.Title>
                <Card.Text>Stay connected with high speed internet access.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='hotel-color'>
                  <FaUtensils/> BreakFast
                </Card.Title>
                <Card.Text>Start your day with a delicious breakfast buffet.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='hotel-color'>
                  <FaTshirt/> Laundry
                </Card.Title>
                <Card.Text>Keep your clothes clean and fresh with our laundry services</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='hotel-color'>
                  <FaCocktail/> Min-bar
                </Card.Title>
                <Card.Text>Enjoy a refreshing drink or snack from our in-room mini-bar</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='hotel-color'>
                  <FaParking/> Parking
                </Card.Title>
                <Card.Text>Park your car convenientely in our on-site parking lot.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className='hotel-color'>
                  <FaSnowflake/> Air conditioning
                </Card.Title>
                <Card.Text>Stay cool and comfortable with our air conditioning system</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HotelService
