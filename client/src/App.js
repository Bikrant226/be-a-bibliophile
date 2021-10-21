import React,{useState} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';
// import {Switch,Route} from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
import data from './components/Data';
function App(){
  // const [books,setBooks]=useState([]);

  // axios.get("http://localhost:3001/read")
  //       .then((res)=>setBooks(res.data.articles))
  //       .catch((err)=>console.log(err));
  const stat = useSelector(state=>state.cartItems)
  const [hidden,setIsHidden]=useState(false);


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