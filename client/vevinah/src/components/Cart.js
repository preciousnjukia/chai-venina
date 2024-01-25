import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ItemActions from './ItemActions';

function Cart() {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();
  const cart = location.state ? location.state.cart : [];

  useEffect(() => {
    if (JSON.stringify(cart) !== JSON.stringify(cartItems)) {
      setCartItems(cart);
    }
  }, [cart]);

  useEffect(() => {
    const calculateTotal = () => {
      let subtotal = 0;

      for (let i = 0; i < cartItems.length; i++) {
        const price = cartItems[i].price;
        const quantity = cartItems[i].quantity;

        subtotal += price * quantity;
      }

      setTotal(subtotal.toFixed(2));
      setSubtotal(subtotal.toFixed(2));
    };

    calculateTotal();
  }, [cartItems]);

  

  const navigate = useNavigate();

  function handlePayNow() {
    // Check if the user is signed in
    const isLoggedIn = true; // Replace with actual logic to check if the user is signed in

    if (isLoggedIn) {
      // User is signed in, proceed to checkout
      navigate('/payment');
    } else {
      // User is not signed in, redirect to the register page
      navigate('/sign_up');
    }
  }

  return (
    <div className="cart-page">
      <h2>MY CART</h2>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} className="cart-image" />
            </div>
            <div className="item-details">
              <div className="item-name">Item: {item.name}</div>
              <div className="item-description">{item.description}</div>
              <br />
              <div className="item-price">Kshs {item.price}</div>
              <ItemActions
                item={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="summary-item">
          <span className="summary-label">Sub total:</span>
          <span className="summary-value">{subtotal}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Delivery charges:</span>
          <span className="summary-value">N/A</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">TOTAL:</span>
          <span className="summary-value">{total}</span>
        </div>
        <div className="summary-note">
          * Delivery charges will be applicable based on your chosen address
        </div>
      </div>

      <div className="payment-options">
        <Link to="/menu">
          <button className="continue-shopping">Continue Shopping</button>
        </Link>
        <button className="pay-now" onClick={handlePayNow}>
          Sign in and Pay
        </button>
      </div>
    </div>
  );
}

export default Cart;