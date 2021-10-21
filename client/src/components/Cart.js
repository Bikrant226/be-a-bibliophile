
import React,{useState} from 'react'
import data from './Data';
import '../styles/cart.css';
import {useSelector,useDispatch} from 'react-redux';
function Cart(props) {

    const dispatch=useDispatch();

    const [amount,setAmount]=useState(0);

    
    console.log(props)
    return (    
        <>
        <div className="cart-wrapper">
          {props.cartItems.length!==0 ?
                  props.cartItems.map(e=>(
                      <div key={e.id} className="cart-item">
                        <div className="cart">
                            <img src={e.photo} alt="hi"/>
                            <div className="cart-item-detail">
                                <p id="item-title">{e.title}</p>
                                <p id="item-author">by {e.author}</p>
                                <button id="decbtn" onClick={()=>dispatch({type:'DEC_QTY',payload:e})}>
                                    -
                                </button>
                                <span>qty:{e.quantity}</span>
                                <button id="incbtn" onClick={()=>dispatch({type:'INC_QTY',payload:e})}>
                                    +
                                </button>
                                <p>₹{e.price * e.quantity}</p>
                            </div>
                        </div>
                        <button onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:e})}>Remove from cart</button>
                      </div>
                  ))
                  :
                  <p>Nothing to show in cart</p>
          }
          
        </div>
        <p>{props.totalPrice}</p>
        </>
    )
}

export default Cart