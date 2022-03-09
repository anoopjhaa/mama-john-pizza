import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer)
  const currentUser = useSelector((state) => state.loginUserReducer.currentUser)
  const { loading, error, success } = orderstate
  const dispatch = useDispatch()
  function tokenHander(token) {
    console.log(token)
    dispatch(placeOrder(token, subtotal))
  }

  return (
    <div className='align-items-center justify-content-center'>
      {loading && <Loading />}
      {error && <Error error='Something went wrong' />}
      {success && <Success success='Your Order is placed successfully' />}

      {currentUser == null ? (
        <div>
          <Error error='Please Login' />{' '}
        </div>
      ) : (
        <StripeCheckout
          amount={subtotal * 100}
          shippingAddress
          token={tokenHander}
          stripeKey='pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ'
          currency='INR'
        >
          <button className='btn'>Pay Now</button>
        </StripeCheckout>
      )}
    </div>
  )
}
