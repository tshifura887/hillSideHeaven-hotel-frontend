import React from 'react'

const RoomCard = ({room}) => {
  return (
    <Col key={room.id} className='mb-4' xs={12}>
      <Card>
        <Card.Body className='d-flex flex-wrap align-items-center'>
          <div className='flex-shrink-0 mr-3 mb-3 mb-md-0'>
            <Card.Img
              variant='top'
              source={`data:image/png;base64, ${room.photo}`}
              alt="Room Photo"
              style={{width: "100%", maxWidth: "200px", height: "auto"}}
            >
            </Card.Img>
          </div>
          <div className='flex-row-1 ml-3 px-5'>
            <Card.Title className='hotel-color'>{room.roomType}</Card.Title>
            <Card.Title className='room-price'>{room.roomPrice}</Card.Title>
            <Card.Text>Some room information goes here for the guest to read through</Card.Text>
          </div>

          <div className='flex-shrink-0 mt-3'>
            <Link to={`bookings/${room.id}`} className='btn btn-hotel btn-sm'>Book Now</Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RoomCard