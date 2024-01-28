import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'

const BookingSuccess = () => {
  const location = useLocation()
  const message = location.state?.message
  const error = location.state?.error
  return (
    <div className='container'>
      <Header title="Booking Success"/>
      <div className='mt-5'>
        {message ? (
          <div>
            <h3 className='test-success'>Booking success !</h3>
            <p className='test-success'>{message}</p>
          </div>
        ): (
          <div>
            <h3 className='test-danger'>Error booking room !</h3>
            <p className='test-danger'>{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingSuccess
