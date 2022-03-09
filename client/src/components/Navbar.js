import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logoutUser } from '../actions/userActions'
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer)
  const userstate = useSelector((state) => state.loginUserReducer)
  const { currentUser } = userstate
  const dispatch = useDispatch()
  return (
    <div>
      <nav className='navbar navbar-expand-lg shadow-sm p-3 bg-light rounded'>
        <NavLink to='/'>
          <div className='navbar-brand' href='/'>
            Mama John's Pizza
          </div>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'>
            <i style={{ color: 'black' }} className='fas fa-bars'></i>
          </span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            {currentUser ? (
              <div className='dropdown mt-2'>
                <a
                  style={{ color: 'black' }}
                  className='dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {currentUser.name}
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <a className='dropdown-item' href='/orders'>
                    Orders
                  </a>
                  <a
                    className='dropdown-item'
                    href='#'
                    onClick={() => {
                      dispatch(logoutUser())
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className='nav-item'>
                <Link to='/login' className='nav-link link'>
                  Login
                </Link>
              </li>
            )}

            <li className='nav-item ml-4'>
              <NavLink to='/cart'>
                <div className='nav-link nav-cart' href='/cart'>
                  <i class='fas fa-shopping-cart'></i>&nbsp;Cart{' '}
                  <div
                    className='px-2'
                    style={{
                      backgroundColor: 'black',
                      borderRadius: '10%',
                      display: 'inline-block',
                      color: 'white',
                    }}
                  >
                    {cartstate.cartItems.length}
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
