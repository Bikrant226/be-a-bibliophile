import React from 'react'
import '../styles/content.css';
import data from './Data';
import { useDispatch } from 'react-redux';
function Content() {

    const dispatch=useDispatch();

    return (
        <div className="content">
            {data.map(book=>(
                <div className="content-item" key={book.id}>
                    <img src={book.photo} alt="hi" />
                    <p>{book.title}</p>
                    <p>By {book.author}</p>
                    <span>₹{book.price}</span>
                    <button key={book.id}
                        onClick={()=>
                            {
                                dispatch({type:"ADD_TO_CART",payload:book});   
                            }
                        }
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}


export default Content;