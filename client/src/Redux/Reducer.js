
const initState={
    cartItems:[]
  }

const addToCart=(cartItems,productToAdded)=>{
  const p=cartItems.find(item=>item.id===productToAdded.id);
  if(p){
    alert('Already added to cart.')
    return cartItems
  }
  return [...cartItems,productToAdded]
}


const incrementQuantity = (cartItems, productToIncrement) => {
    const existingCartItem = cartItems.find(item => item.id === productToIncrement.id);
    if (existingCartItem) {
      return cartItems.map(item =>
        item.id === productToIncrement.id
          ? { ...productToIncrement, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...cartItems, { ...productToIncrement, quantity: 1 }];
  };
  

const decrementQuantity = (cartItems, productToDecrement) => {
    //check if item is already in the cartItems
    const existingCartItem = cartItems.find(
      item => item.id === productToDecrement.id
    );
    //if there is only 1, upon clicking, we should remove the item from the array
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(item => item.id !== productToDecrement.id);
    }
  
    return cartItems.map(item =>
      item.id === productToDecrement.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  
  };

const cartReducer=(state=initState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case 'INC_QTY':
                return {
                   ...state,
                   cartItems: incrementQuantity(state.cartItems, action.payload)
                 };
        case 'DEC_QTY':
            return{
                ...state,
                cartItems: decrementQuantity(state.cartItems, action.payload)

            }
        default:
            return state
    }
}


module.exports=cartReducer;
