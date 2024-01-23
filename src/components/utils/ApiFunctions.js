import axios from "axios";

export const api = axios.create({
  baseURL :"http://localhost:9192"
})

export async function addRoom(photo, roomType, roomPrice) {
  try {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);

    const response = await api.post("/rooms/add/new-room", formData);

    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error adding room:", error);
    throw new Error("Error adding room");
  }
}

export async function getRoomTypes() {
  try {
    const response = await api.get("/rooms/room/types");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching room types");
  }
}

export async function getAllRooms(){
  try {
    const result = await api.get("/rooms/all-rooms")
    return result.data
  } catch (error) {
    throw new Error("Error fetching rooms")
  }
}

export async function deleteRoom(roomId) {
  try {
    const result = await api.delete(`/rooms/delete/room/${roomId}`)
    return result.data
  } catch (error) {
    throw new Error(`Error deleting room ${error.message}`)
  }
}
