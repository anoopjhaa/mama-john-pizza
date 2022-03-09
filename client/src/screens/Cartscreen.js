import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Cartscreen() {
  AOS.init()
  const cartstate = useSelector((state) => state.cartReducer)
  const cartItems = cartstate.cartItems
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
  const dispatch = useDispatch()
  return (
    <div>
      <div
        className='row justify-content-center p-2 mt-4 cart-row'
        data-aos='fade-down'
      >
        <div className='col-md-8'>
          <h2 className='mb-5'>My Cart</h2>

          {cartItems.map((item) => {
            return (
              <div className='flex-container'>
                <div className='text-left m-1 w-50'>
                  <h4>
                    {item.name} [{item.varient}]
                  </h4>
                  <h5>
                    Price : {item.quantity} * {item.prices[0][item.varient]} ={' '}
                    {item.price}
                  </h5>
                  <h6 style={{ display: 'inline' }}>Quantity : </h6>
                  <i
                    className='fa fa-plus'
                    aria-hidden='true'
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity + 1, item.varient))
                    }}
                  ></i>
                  &nbsp;
                  <b>{item.quantity}</b>&nbsp;
                  <i
                    className='fa fa-minus'
                    aria-hidden='true'
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity - 1, item.varient))
                    }}
                  ></i>
                  <hr />
                </div>

                <div className='m-1 w-50'>
                  <img
                    src={item.image}
                    style={{ height: '80px', height: '80px' }}
                  />
                </div>
                <div className='m-1 w-10'>
                  <i
                    className='fa fa-trash mt-5'
                    aria-hidden='true'
                    onClick={() => {
                      dispatch(deleteFromCart(item))
                    }}
                  ></i>
                </div>
              </div>
            )
          })}
        </div>

        <div className='col-md-3 text-right'>
          <h2 style={{ fontSize: '35px' }}>SubTotal : {subtotal} /-</h2>
          <div className='text-center pt-4'>
            <Checkout subtotal={subtotal} />
          </div>
        </div>
      </div>
    </div>
  )
}
