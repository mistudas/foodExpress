import React, { useContext, useState } from 'react'
import {StoreContext } from '../../context/StoreContext'
import './Cart.css'
import{useNavigate} from 'react-router-dom'

const Cart = () => {
  const navigate =useNavigate()
  const{cartItems, food_list, removeFromCart, getTotaltCartAmount}= useContext(StoreContext)

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />


        {
          food_list.map((item, index)=>{
            if(cartItems[item._id]>0){
              return(
                <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>{removeFromCart(item._id)}} className='cross'>x</p>
                </div>
                <hr />
                </>
              )
            }
          })
        }
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotaltCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotaltCartAmount()===0?0 :2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotaltCartAmount()===0?0 :getTotaltCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>{navigate('/order')}}>PROCEED TO PAY</button>
          
        </div>
        <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Cart