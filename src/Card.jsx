import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

function Card({ product, onAddToCart, onRemoveFromCart }) {
    return (
        <div className="col-lg-3">
            <div className="card text-center" style={{ width: "18rem" }}>
                <div className="badge bg-warning text-black position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{product.stock}</div>
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h6 className="price"><FontAwesomeIcon icon={faRupeeSign} /> {product.rupee} <span className="strike"> {product.strike}</span></h6>

                    <p className="card-text">{product.description}</p>
                    {
                        product.isClicked ? <button className="btn btn-danger" onClick={() => onRemoveFromCart(product)}>Remove from Cart</button> : <button className="btn btn-primary" onClick={() => onAddToCart(product)}>Add to Cart</button>
                    }
                </div>
            </div><br />
        </div>
    );
}

export default Card;
