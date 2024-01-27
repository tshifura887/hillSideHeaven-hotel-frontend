import React, { useState } from 'react'

const BookingForm = () => {
  const[isValidated, setIsValidated] = useState(false)
  const[isSubmitteed, setIsSubmitted] = useState(false)
  const[errorMessage, setErrorMessage] = useState("")
  const[roomPrice, seRoomPrice] = useState(0)
  const[booking, setBooking] = useState({
    guestName: "",
    guestEmail: "",
    CheckInDate: "",
    CheckOutDate: "",
    numberOfAdults: "",
    numberOfChildren: ""
  })



  return (
    <div>

    </div>
  )
}

export default BookingForm
