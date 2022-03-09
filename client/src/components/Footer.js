import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='pt-5'>
      <footer class='page-footer font-small unique-color-dark pt-4'>
        <div class='container'>
          <ul class='list-unstyled list-inline text-center py-2'>
            <li class='list-inline-item'>
              <h5 class='mb-1'>Order your Pizza Now!</h5>
            </li>
            <li class='list-inline-item'>
              <Link to='/login'>
                <button class='btn btn-outline-success btn-rounded landing'>
                  Sign up!
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div class='footer-copyright text-center py-3'>
          © 2021 Copyright:
          <Link to='/'>
            <div> Mama John's Pizza</div>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer
