import { useState } from 'react'
import './App.css'
import AddRoom from './components/room/AddRoom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExistingRooms from './components/room/ExistingRooms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditRoom from './components/room/EditRoom';
import Home from './components/home/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/edit-room/:roomId" element={<EditRoom/>}/>
          <Route path="/existing-rooms" element={<ExistingRooms/>}/>
        </Routes>
      </Router>
    </main>
    </>
  )
}

export default App
