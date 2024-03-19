import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCreditCard } from '@fortawesome/free-solid-svg-icons';

function Cart({ CartQuantity }) {
    return (
        <header className="p-2 bg-white text-dark">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <FontAwesomeIcon icon={faCreditCard} /> Shopping Cart
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Gifts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Customer Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">New Releases</a>
                                </li>
                            </ul>
                            <div className="text-end">
                                <button type='button' className="btn btn-outline-dark me-5">
                                    <FontAwesomeIcon icon={faCartShopping} /> Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{CartQuantity}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Cart;
