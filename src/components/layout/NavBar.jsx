import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [showAccount, setShowAccount] = useState(false)

  const handleAccountClick = () => {
    setShowAccount(!showAccount)
  }

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-5 sticky-top'>
      <div className='container-fluid'>
        <Link to={"/"} className='text-decoration-none'>
          <span className='hotel-color'>HillSide Heaven Hotel</span>
        </Link>

        <button
          className='navbar-toggler'
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScrew"
          aria-controls='navbarScroll'
          aria-expanded="false"
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id="navbarScroll">
          <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current="page" to="/browse-all-rooms">
                Browse all roooms
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current="page" to='/admin'>
                Manage Rooms
              </Link>
            </li>
          </ul>
          <ul className='d-flex navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to="/find-booking">
                Find My Booking
              </Link>
            </li>

            <li className='nav-item dropdown'>
              <a
                className={`nav-link dropdown-toggle ${showAccount? "show" : ""}`}
                href='#'
                role='button'
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleAccountClick}
              >
                {""}
                Account
              </a>

              <ul className={`dropdown-menu ${showAccount ? "show": ""}`}>
                <li>
                  <Link to="/login" className='dropdown-item'>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className='dropdown-item'>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/logout" className='dropdown-item'>
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
     </div>
    </nav>
  )
}

export default NavBar
