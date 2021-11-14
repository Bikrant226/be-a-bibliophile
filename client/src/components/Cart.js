
import React from 'react';
import '../styles/cart.css';
import GooglePayButton from  '@google-pay/button-react';

import {useSelector,useDispatch} from 'react-redux';
function Cart() {

    const dispatch=useDispatch();
    const cartItems=useSelector(state=>state.cartItems)
    const p=useSelector((state)=>state.cartItems.map((e)=>e.price*e.quantity))
    const reducer=(a,b)=>a+b;
    const totalPrice=p.reduce(reducer,0)

  
    return (    
        <div className="cart-wrapper">  
          {cartItems.length!==0 ?
          <>    {
                  cartItems.map(e=>(
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
                }
                  <p id="totalPrice">Total Price: ₹{totalPrice}</p>
                  <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: 'BCR2DN6TY7NKN3JJ',
            merchantName: 'Bik',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice:'10',
            currencyCode: 'INR',
            countryCode: 'IN',
          },
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('load payment data', paymentRequest);
        }}
      />
            </>
                  :
                  <p>Nothing to show in cart.</p>
          }
          
        </div>
    )
}

export default Cart