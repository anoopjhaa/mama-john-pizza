import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/landing.svg'
import chef from '../images/chef.svg'
const Landingscreen = () => {
  return (
    <div>
      <header className='page-header gradient'>
        <div className='container pt-5'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-5 mt-3 mx-3'>
              <h2 style={{ fontSize: '300%' }}>The best pizzas in town</h2>
              <p style={{ fontSize: '140%' }}>
                We bring to you Mama John and her experiments to create
                Incredible Cheese pizzas through Mama John's Pizza.
              </p>
              <Link to='/pizza'>
                <button
                  type='button'
                  class='btn btn-outline-success landing mx-3 mt-2'
                >
                  View Pizzas
                </button>
              </Link>
              <Link to='/login'>
                <button
                  type='button'
                  class='btn btn-outline-success landing mt-2'
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <div className='col-md-5'>
              <img className='landing-img' src={img} alt='Pizza' />
            </div>
          </div>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#fff'
            fill-opacity='1'
            d='M0,96L48,106.7C96,117,192,139,288,165.3C384,192,480,224,576,202.7C672,181,768,107,864,96C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </header>

      <div>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-5 mx-3'>
              <img className='chef-img' src={chef} alt='chef' />
            </div>
            <div className='col-md-5'>
              <h2 style={{ fontSize: '300%' }}>The best pizzas in town</h2>
              <p style={{ fontSize: '140%' }}>
                We bring to you Mama John and her experiments to create
                Incredible Cheese pizzas through Mama John's Pizza.
              </p>
              <Link to='/pizza'>
                <button
                  type='button'
                  class='btn btn-outline-success landing mx-3 mt-2'
                >
                  View Pizzas
                </button>
              </Link>
              <Link to='/login'>
                <button
                  type='button'
                  class='btn btn-outline-success landing mt-2'
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingscreen
