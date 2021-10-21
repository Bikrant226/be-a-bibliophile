import React, { useState } from 'react'
import '../styles/content.css';
import data from './Data';
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
function Content() {

    const [disable,setDisable]=useState(false);
    const dispatch=useDispatch();

    return (
        <div className="content">
            {data.map(book=>(
                <div className="content-item" key={book.id}>
                    <img src={book.photo} alt="hi" />
                    <p>{book.title}</p>
                    <p>By {book.author}</p>
                    <span>₹{book.price}</span>
                    <button 
                        onClick={()=>
                            dispatch({type:"ADD_TO_CART",payload:book})
                        }
                        // disabled={disable}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}


export default Content;