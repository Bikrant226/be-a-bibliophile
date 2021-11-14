import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';
import {Switch,Route} from 'react-router-dom';
function App(){

  const stat = useSelector(state=>state.cartItems)

  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path="/">
          <Content/>
        </Route> 
        <Route path="/Signin">
          <Signin/>
        </Route>
        <Route path="/Signup">
          <Signup/>
        </Route>
        <Route path="/Cart">
          <Cart cartItems={stat}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;