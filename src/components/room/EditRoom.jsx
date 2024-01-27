import React, { useEffect, useState } from 'react'
import { getRoomById, updateRoom } from '../utils/ApiFunctions';
import { Link, useParams } from 'react-router-dom';
import RoomTypeSelector from '../common/RoomTypeSelector';

const EditRoom = () => {
  const[room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: ""
  });

  const[imagePreview, setImagePreview] = useState("")
  const[successMessage, setSuccessMessage] = useState("")
  const[errorMessage, setErrorMessage]= useState("")

  const {roomId} = useParams()

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    setRoom({...room, photo: selectedImage})
    setImagePreview(URL.createObjectURL(selectedImage))
  }

  const handleRoomInputChange = (e) => {
    const { name, value} = e.target
    setRoom({...room, [name]: value})
  }


  useEffect(() =>{
    const fetchRoom = async () => {
      try {
        const roomData = await getRoomById(roomId)
        setRoom(roomData)
        setImagePreview(roomData.photo)
      } catch (error) {
        console.log(error)
      }
    }

    fetchRoom()
  }, [roomId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateRoom(roomId, room)

      if ( response.status ) {
        setSuccessMessage("Room updated sucessfully")
        const updatedRoomData = await getRoomById(roomId)
        setRoom(updatedRoomData)
        setImagePreview(updatedRoomData.photo)
        setErrorMessage("")
      }else {
       setErrorMessage("Error adding room")
      }
    } catch (error) {
      setErrorMessage(error.message)
    }

    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 3000);
  }

  return (
    <>
      <section className='container, mt-5 mb-5'>
        <div className='row justify-content-center'>

          <div className='col-md-8 col-lg-6'>
            <h2 className='mt-5 mb-2'>Edit Room</h2>
            {successMessage && (
              <div className='alert alert-success fade show'>{successMessage}</div>
            )}

            {errorMessage && (
              <div className='alert alert-danger fade show'>{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='roomType' className='form-label'>
                  Room Type
                </label>
                <div>
                  <RoomTypeSelector handleRoomInputChange={handleRoomInputChange} newRoom={room}/>
                </div>
              </div>

              <div className='mb-3'>
                <label htmlFor='roomPrice' className='form-label'>
                  Room Price
                </label>
                <input
                className='form-control'
                required
                id="roomPrice"
                name="roomPrice"
                type="number"
                value={room.roomPrice}
                onChange={handleRoomInputChange}
                />

              </div>

              <div className='mb-3'>
                <label htmlFor='photo' className='form-label'>
                  Photo
                </label>
                <input
                className='form-control mb-3'
                id="photo"
                name="photo"
                type="file"
                onChange={handleImageChange}
                />

                {imagePreview && (
                  <img src={`data:image/png;base64,${imagePreview}`}
                  alt="Room Preview"
                  style={{maxWidth: "400px", maxHeight: "400px"}}
                  className='mb-3'
                  />
                )}
              </div>

              <div className='d-grid d-md-flex mt-2'>
                <Link to={"/existing-rooms"} className='btn btn-outline-info ml-5'>
                  back
                </Link>
                <button className='btn btn-outline-warning' type='submit'>Edit Room</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditRoom
